// 作品数据
const portfolioItems = [
    {
        id: 1,
        title: '电商网站设计',
        description: '一个现代化的电商平台界面设计，注重用户体验和视觉美感。',
        emoji: '🛍️',
        tags: ['UI设计', '前端开发']
    },
    {
        id: 2,
        title: '移动应用原型',
        description: '为某健身应用设计的移动端原型，简洁直观的操作流程。',
        emoji: '📱',
        tags: ['移动设计', '原型制作']
    },
    {
        id: 3,
        title: '品牌视觉系统',
        description: '为初创公司打造的完整品牌视觉识别系统。',
        emoji: '🎨',
        tags: ['品牌设计', 'VI设计']
    },
    {
        id: 4,
        title: '数据可视化仪表板',
        description: '企业级数据分析平台的前端实现，支持多种图表展示。',
        emoji: '📊',
        tags: ['数据可视化', '前端开发']
    },
    {
        id: 5,
        title: '社交媒体应用',
        description: '社交网络平台的概念设计，强调用户互动和内容分享。',
        emoji: '💬',
        tags: ['社交应用', '用户体验']
    },
    {
        id: 6,
        title: '在线教育平台',
        description: '在线学习平台的界面设计，提供优质的学习体验。',
        emoji: '📚',
        tags: ['教育科技', '界面设计']
    }
];

// 初始化页面
function init() {
    renderPortfolio();
}

// 渲染作品集
function renderPortfolio() {
    const container = document.getElementById('portfolio-container');
    container.innerHTML = '';

    portfolioItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.innerHTML = `
            <div class="portfolio-image">${item.emoji}</div>
            <div class="portfolio-info">
                <h3 class="portfolio-title">${item.title}</h3>
                <p class="portfolio-desc">${item.description}</p>
                <div class="portfolio-tags">
                    ${item.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// 处理联系表单提交
function handleSubmit(event) {
    event.preventDefault();
    alert('感谢你的消息！我会尽快回复你。');
    event.target.reset();
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', init);
