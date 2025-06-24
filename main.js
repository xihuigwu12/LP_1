// 1. 制御したいHTML要素を取得する
const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.fullscreen-nav');
// fullscreen-navの中にあるリンクを全て取得
const navLinks = document.querySelectorAll('.fullscreen-nav a');

// 2. ハンバーガーメニューがクリックされた時の処理
hamburger.addEventListener('click', function() {
    toggleMenu();
});

// 3. ナビゲーションのリンクがクリックされた時の処理
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        toggleMenu();
    });
});

// 4. メニューを開閉する共通の関数
function toggleMenu() {
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
}