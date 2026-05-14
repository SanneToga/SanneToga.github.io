// ==========================================
// サイドバー（UPDATE・LINK）の設定ファイル
// ==========================================

// --- UPDATE項目の設定 ---
// <p class="small-text">日付 内容</p> の形式で追加してください。
const updateHTML = `
    <p class="small-text">2026.05.14 site open.</p>
`;

// --- LINK項目の設定 ---
// <li><a href="..." target="_blank" class="...">名前</a></li> の形式で追加してください。
const linksHTML = `
    <li><a href="https://www.youtube.com/@%E5%85%8E%E8%B3%80%E3%81%95%E3%82%93%E3%81%AD" target="_blank" class="link-youtube">YouTube</a></li>
    <li><a href="https://x.com/toga3_work" target="_blank" class="link-x">Twitter / X</a></li>
    <li><a href="https://scrapbox.io/SanneToga/" target="_blank" class="link-Cosence">Cosence</a></li>
    <li><a href="https://togasan.booth.pm" target="_blank" class="link-booth">Booth</a></li>
    <li><a href="https://studiodotzip.studio.site" target="_blank" class="link-studio">Studio.zip</a></li>
`;

// ==========================================
// 以下のコードは自動更新用です。変更しないでください。
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
