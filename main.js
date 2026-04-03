// main.js - Retro Web Decorations (Aero Blob & Bubbles)

document.addEventListener("DOMContentLoaded", () => {
    // =============================================
    // 0. Classic Digital Clock (トップ右の時計)
    // =============================================
    const clock = document.createElement("div");
    clock.style.position = "fixed";
    clock.style.top = "10px";
    clock.style.right = "10px";
    clock.style.padding = "6px 12px";
    clock.style.background = "rgba(0, 120, 255, 0.15)";
    clock.style.color = "#0055ea";
    clock.style.fontFamily = "Tahoma, 'Trebuchet MS', sans-serif";
    clock.style.fontWeight = "bold";
    clock.style.border = "1px solid rgba(0, 150, 255, 0.4)";
    clock.style.borderRadius = "8px";
    clock.style.backdropFilter = "blur(10px)";
    clock.style.WebkitBackdropFilter = "blur(10px)";
    clock.style.boxShadow = "inset 0 2px 5px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(0,0,0,0.1)";
    clock.style.zIndex = "9999";
    clock.style.fontSize = "14px";
    document.body.appendChild(clock);

    function updateClock() {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
        setTimeout(updateClock, 1000);
    }
    updateClock();

    // =============================================
    // 1. Blob Tracking (マウスストーカーの光)
    // =============================================
    const blob = document.createElement("div");
    blob.classList.add("blob");
    document.body.appendChild(blob);

    document.addEventListener("mousemove", (e) => {
        blob.style.left = e.clientX + "px";
        blob.style.top = e.clientY + "px";
    });

    // =============================================
    // 2. Click Sparkles (クリック時のキラキラパーティクル)
    // =============================================
    document.addEventListener("click", (e) => {
        // Prevent sparkles when clicking window controls to keep UI clean
        if (e.target.closest('.ctrl-btn')) return;

        for (let i = 0; i < 8; i++) {
            const sparkle = document.createElement("div");
            sparkle.classList.add("sparkle");
            document.body.appendChild(sparkle);
            
            const size = Math.random() * 12 + 4;
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            sparkle.style.left = `${e.clientX}px`;
            sparkle.style.top = `${e.clientY}px`;
            
            const dx = (Math.random() - 0.5) * 80; // scatter distance
            const dy = (Math.random() - 0.5) * 80;
            
            sparkle.animate([
                { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)', opacity: 1 },
                { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0) rotate(90deg)`, opacity: 0 }
            ], {
                duration: 500 + Math.random() * 500,
                easing: 'ease-out'
            }).onfinish = () => sparkle.remove();
        }
    });

    // =============================================
    // 3. Floating Bubbles (背景のAero風バブル)
    // =============================================
    const bubbleContainer = document.createElement("div");
    bubbleContainer.classList.add("bubbles-container");
    document.body.appendChild(bubbleContainer);

    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = `${Math.random() * 100}vw`;
        
        const size = Math.random() * 40 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Randomize speed and delay
        bubble.style.animationDuration = `${Math.random() * 10 + 8}s`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        
        bubbleContainer.appendChild(bubble);
    }
});

// =============================================
// 4. p5.js Blue Mosaic Background (青いモザイク背景)
// =============================================
const p5sketch = (p) => {
    let cols, rows;
    let scl = 50; // モザイクのサイズ
    let zoff = 0; // ノイズのZ軸（時間）

    p.setup = () => {
        let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '-4');
        canvas.style('position', 'fixed');
        canvas.style('top', '0');
        canvas.style('left', '0');
        cols = p.ceil(p.width / scl);
        rows = p.ceil(p.height / scl);
        p.noStroke();
    };

    p.draw = () => {
        p.clear(); // 背景はCSSに任せるためクリア
        
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                // パーリンノイズで不規則なうねりを作成
                let n = p.noise(x * 0.1, y * 0.1, zoff);
                
                // 青系の色と透明度を計算
                // Frutiger Aero風のシアン〜ディープブルー
                let r = p.map(n, 0, 1, 0, 100);
                let g = p.map(n, 0, 1, 100, 220);
                let b = p.map(n, 0, 1, 200, 255);
                let alpha = p.map(n, 0, 1, 0, 140); // わずかに透かす
                
                p.fill(r, g, b, alpha);
                p.rect(x * scl, y * scl, scl, scl);
            }
        }
        zoff += 0.005; // ゆっくりと動く
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        cols = p.ceil(p.width / scl);
        rows = p.ceil(p.height / scl);
    };
};

// CDNからp5.jsを動的に読み込んで実行
const p5script = document.createElement('script');
p5script.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js";
document.head.appendChild(p5script);
p5script.onload = () => {
    new p5(p5sketch);
};
