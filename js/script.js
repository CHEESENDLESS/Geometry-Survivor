// 控制导航栏高亮
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(navLink => navLink.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // 初始化语言
    const currentLang = localStorage.getItem("language") || "zh";
    switchLanguage(currentLang);

    // 设置下拉菜单的默认值
    const languageSelect = document.getElementById("language-select");
    languageSelect.value = currentLang;
});

// 语言切换逻辑
function switchLanguage(lang) {
    localStorage.setItem("language", lang); // 保存当前语言到本地存储
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        element.innerHTML = translations[lang][key] || element.innerHTML; // 使用 innerHTML 支持 HTML 内容
    });

    // 更新下拉菜单的值
    const languageSelect = document.getElementById("language-select");
    if (languageSelect) {
        languageSelect.value = lang;
    }
}

// 翻译内容
const translations = {
    zh: {
        "nav-home": "首页",
        "nav-about": "游戏介绍",
        "nav-contact": "联系我们",
        "hero-title": "几何幸存者",
        "hero-description": "这是一个充满未知与危险的几何世界...",
        "hero-btn": "了解更多",
        "hero-suggestion": "如果您有好的建议与想法，欢迎联系我们！",
        "hero-contact-btn": "联系我们",
        "hero-game": "快来体验《几何幸存者》吧！",
        "hero-contact2-btn": "跳转游戏",
        "about-title": "游戏介绍",
        "about-description-1": "《几何幸存者》是一款使用Scratch3.0编写而成的类幸存者游戏，于2023年10月29日在共创世界平台发行Demo版，于2024年10月6日更新为正式版",
        "about-description-2": "在这个充满未知与危险的几何世界中，你是一名叫Geo的三角形，面对无尽的危机和挑战。这是一个充满多边形、线条和色彩的奇幻空间，其中隐藏着无数秘密和危机...",
        "contact-title": "联系我们",
        "contact-description": "如果您有任何疑问、建议或想法，请联系我们。",
        "contact-email": "QQ: 2138963664",
        "contact-bilibili": "B站: ",
        "contact-Twitter": "Twitter: ",
        "contact-ccw": "共创世界: ",
        "game-title": "游戏暂未开放！请等待公测！",
        "nav-news": "游戏公告",
        "nav-game": "跳转游戏",
    },
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-contact": "Contact",
        "hero-title": "Geometry Survivor",
        "hero-description": "This is a geometric world brimming with unknowns and dangers...",
        "hero-btn": "Learn More",
        "hero-suggestion": "If you have any suggestions or ideas, please contact us!",
        "hero-contact-btn": "Contact Us",
        "hero-game": "Get ready to experience 'Geometry Survivor'!",
        "hero-contact2-btn": "Jump to Game",
        "about-title": "Game Introduction",
        "about-description-1": "'Geometry Survivor' is a Survivor-like game developed using Scratch 3.0. It was updated to its official release version on October 6, 2024.",
        "about-description-2": "In this mysterious and perilous geometric world,You are a triangle named Geo,Facing endless crises and challenges.This is a fantastical space filled with polygons, lines, and colors,Containing countless secrets and dangers...",
        "contact-title": "Contact Us",
        "contact-description": "If you have any questions, suggestions or ideas, please contact us.",
        "contact-email": "QQ: 2138963664",
        "contact-bilibili": "Bilibili: ",
        "contact-Twitter": "Twitter: ",
        "contact-ccw": "ccw: ",
        "game-title": "The game is not yet released! Please wait for the public beta!",
        "nav-news": "Game Announcement",
        "nav-game": "Jump to Game",
    }
};