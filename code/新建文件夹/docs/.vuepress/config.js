// 自动获取文件名并添加路由
const fs = require('fs')
const url = 'E:/warriorjs/data/docs'
// const files = fs.readdirSync('E:/warriorjs/data/docs/accumulate/HTML')

// const ret = files.map(function(x) {
//     x = x.split('.')[0]
//     return '/accumulate/HTML/' + x
// })
function returnName(str) {
    const files = fs.readdirSync(url + str)
    return files.map(function(x) {
        x = x.split('.')[0]
        if (x == 'README') {
            x = ''
        }
        return str + x
    })
}
module.exports = {
    title: 'Technical-tree',
    description: '我与我周旋久，宁做我。',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }] // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/Technical-tree/', // 这是部署到github相关的配置
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
            { text: '前端', link: '/accumulate/' },
            { text: '算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
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
                        link: 'https://github.com/homobulla/algorithm'
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

                    children: returnName('/accumulate/HTML/')
                },
                {
                    title: 'CSS',
                    children: returnName('/accumulate/CSS/')
                },
                {
                    title: 'JS',
                    children: returnName('/accumulate/JS/')
                }
            ],
            '/algorithm/': [
                '/algorithm/', // 一级分类
                {
                    title: '数据结构',
                    children: returnName('/algorithm/数据结构/')
                },
                {
                    title: '算法基础',
                    children: returnName('/algorithm/算法基础/')
                },
                {
                    title: '算法思想',
                    children: returnName('/algorithm/算法思想/')
                }
            ]
        }
    }
}
