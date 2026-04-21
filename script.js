// 作品数据
const portfolioItems = [
    {
        id: 1,
        title: '城市光影',
        description: '一系列城市夜景摄影作品，捕捉都市的光与影、动与静。通过长曝光技术展现城市的另一面。',
        emoji: '📷',
        tags: ['摄影', '后期处理']
    },
    {
        id: 2,
        title: 'AI生成艺术系列',
        description: '利用Midjourney和Stable Diffusion创作的超现实主义数字艺术作品，探索人工智能的创造力边界。',
        emoji: '🎨',
        tags: ['AI设计', '生成艺术']
    },
    {
        id: 3,
        title: '品牌视觉设计',
        description: '为校园创业团队设计的完整品牌视觉系统，包括Logo、海报、名片等物料设计。',
        emoji: '✨',
        tags: ['PS设计', '品牌VI']
    },
    {
        id: 4,
        title: '动态影像短片',
        description: '使用After Effects制作的抽象动画短片，结合音乐节奏展现视觉韵律美。',
        emoji: '🎬',
        tags: ['AE视频', '动态设计']
    },
    {
        id: 5,
        title: '互动装置艺术',
        description: '基于TouchDesigner开发的实时交互装置，观众的动作会影响视觉效果的呈现。',
        emoji: '💻',
        tags: ['TD交互', '新媒体艺术']
    },
    {
        id: 6,
        title: '智能灯光系统',
        description: '使用Arduino控制的交互式灯光装置，根据环境声音和人体感应产生不同的光效变化。',
        emoji: '🔧',
        tags: ['Arduino', '硬件编程']
    },
    {
        id: 7,
        title: '创意编程实验',
        description: 'Processing和p5.js创作的生成式艺术作品，探索算法与美学的结合。',
        emoji: '🎯',
        tags: ['创意编程', '生成艺术']
    },
    {
        id: 8,
        title: '虚拟现实体验',
        description: 'Unity开发的VR艺术展览空间，让观众沉浸式体验数字艺术作品。',
        emoji: '🌐',
        tags: ['VR开发', '交互设计']
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
