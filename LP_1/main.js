// 1. 制御したいHTML要素を取得する
const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.fullscreen-nav');
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

// 4. 黒い背景がクリックされた時の処理を追加
nav.addEventListener('click', function(event) {
    // クリックされたのが背景自身（nav）の時だけメニューを閉じる
    // （中のリンクをクリックした時は閉じないようにするため）
    if (event.target === nav) {
        toggleMenu();
    }
});


// 5. メニューを開閉する共通の関数
function toggleMenu() {
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
}