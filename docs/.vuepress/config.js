module.exports = {
    title: '前端技术图谱',
    description: '我与我周旋久，宁做我。',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }] // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
    },
    themeConfig: {
        // 导航栏
        nav: [
            { text: '前端算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
            { text: '博客', link: 'http://homobulla.site' }, // 外部链接
            // 下拉列表
            {
                text: 'GitHub',
                items: [
                    {
                        text: 'GitHub地址',
                        link: 'https://github.com/homobulla'
                    },
                    {
                        text: '算法仓库',
                        link: 'https://github.com/OBKoro1/Brush_algorithm'
                    }
                ]
            }
        ],

        // 侧边栏
        sidebar: {
            // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
            '/accumulate/': [
                '/accumulate/', // accumulate文件夹的README.md 不是下拉框形式
                {
                    title: 'HTML',

                    children: ['/accumulate/HTML/one', '/accumulate/HTML/two']
                },
                {
                    title: 'CSS',
                    children: ['/accumulate/CSS/']
                },
                {
                    title: 'JS',
                    children: ['/accumulate/JS/']
                }
            ]
        }
    }
}
