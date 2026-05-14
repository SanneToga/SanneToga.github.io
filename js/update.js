// ==========================================
// サイドバー（UPDATE・LINK）の設定ファイル
// ==========================================

// --- UPDATE項目の設定 ---
const updateHTML = `
    <p class="small-text">2026.05.14 site open.</p>
`;

// --- LINK項目の設定 ---
const linksHTML = `
    <li><a href="https://www.youtube.com/@%E5%85%8E%E8%B3%80%E3%81%95%E3%82%93%E3%81%AD" target="_blank" class="link-youtube">YouTube</a></li>
    <li><a href="https://x.com/toga3_work" target="_blank" class="link-x">Twitter / X</a></li>
    <li><a href="https://scrapbox.io/SanneToga/" target="_blank" class="link-Cosense">Cosense</a></li>
    <li><a href="https://togasan.booth.pm" target="_blank" class="link-booth">Booth</a></li>
    <li><a href="https://studiodotzip.studio.site" target="_blank" class="link-studio">Studio.zip</a></li>
`;

// ==========================================
// 以下のコードは自動更新用。変更しない。
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // UPDATEの更新
    const updateBox = document.getElementById('dynamic-update');
    if (updateBox) {
        updateBox.innerHTML = updateHTML;
    }

    // LINKの更新
    const linksBox = document.getElementById('dynamic-links');
    if (linksBox) {
        linksBox.innerHTML = linksHTML;
    }
});
