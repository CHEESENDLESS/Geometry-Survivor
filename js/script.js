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
        "hero-title": "熊熊人格",
        "hero-description": "激烈对抗，接近事实，不可思议的真相。",
        "hero-btn": "了解更多",
        "hero-suggestion": "如果您有好的建议与想法，欢迎联系我们！",
        "hero-contact-btn": "联系我们",
        "hero-game": "快来体验《熊熊人格》吧！",
        "hero-contact2-btn": "跳转游戏",
        "about-title": "游戏介绍",
        "about-description-1": "《熊熊人格》是一款根据经典动画片“熊出没”而自制的非对称竞技游戏，其原型是网易旗下的《第五人格》后改编的游戏，游戏计划于2025年3月1日开启限号测试，计划2025年5月1日开启全平台公测。该游戏适龄级别为16+。",
        "about-description-2": "玩家将扮演不同阵营的动画角色，然后在森林里展开激烈的追击和比拼。",
        "about-description-3": "《熊熊人格》官方正版游戏还原了那些动画中的角色，满足玩家的心愿。如果您也喜欢非对称竞技，那么这款以《第五人格》为原型而打造的同人游戏值得一试。",
        "contact-title": "联系我们",
        "contact-description": "如果您有任何疑问、建议或想法，请联系我们。",
        "contact-email": "邮箱: wwxiaomo@163.com",
        "contact-bilibili": "B站: ",
        "contact-douyin": "抖音: ",
        "contact-kuaishou": "快手: ",
        "contact-wechat": "（备注来意）微信: xiaomo1202020",
        "game-title": "游戏暂未开放！请等待公测！",
        "nav-news": "游戏公告",
        "nav-game": "跳转游戏",
    },
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-contact": "Contact",
        "hero-title": "IDENTITY BEAR",
        "hero-description": "Intense confrontation, approaching the truth, incredible truths.",
        "hero-btn": "Learn More",
        "hero-suggestion": "If you have any suggestions or ideas, please contact us!",
        "hero-contact-btn": "Contact Us",
        "hero-game": "Get ready to experience 'IDENTITY BEAR'!",
        "hero-contact2-btn": "Jump to Game",
        "about-title": "Game Introduction",
        "about-description-1": "'IDENTITY BEAR' is an asymmetrical competitive game made based on the classic animation 'Boonie Bears'. Its prototype is 'Identity V' by NetEase, and it is scheduled to start a limited test on March 1, 2025, and a full-platform release on May 1, 2025. The game is suitable for ages 16 and above.",
        "about-description-2": "Players will take on different roles from the animation and engage in intense chases and competitions in the forest.",
        "about-description-3": "The official version of 'IDENTITY BEAR' faithfully recreates the characters from the animation, fulfilling players' wishes. If you also enjoy asymmetrical competition, this fan-made game based on 'Identity V' is worth a try.",
        "contact-title": "Contact Us",
        "contact-description": "If you have any questions, suggestions or ideas, please contact us.",
        "contact-email": "Email: wwxiaomo@163.com",
        "contact-bilibili": "Bilibili: ",
        "contact-douyin": "Douyin: ",
        "contact-kuaishou": "Kuaishou: ",
        "contact-wechat": "WeChat: xiaomo1202020",
        "game-title": "The game is not yet released! Please wait for the public beta!",
        "nav-news": "Game Announcement",
        "nav-game": "Jump to Game",
    }
};