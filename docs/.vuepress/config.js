module.exports = {
    title: '个人主页',
    description: '杨杨的博客',
    base: "/yangyang-blog/",
    themeConfig: {
        logo: '/image/logo.png',
        nav: [
            { text: '基础知识', link: '/basic/' },
            { text: '项目笔记', link: '/project/' },
            { text: '面试题', link: '/mistake/' },
            { text: 'GitHub', link: 'https://github.com/Allen718/' }
        ],
        sidebar: {
            '/basic': [
                {
                    title: ' html和css部分',
                    // true 展开
                    collapsable: true,
                    children: [

                    ]
                },
                {
                    title: ' js部分',

                    collapsable: true,
                    children: [

                    ]
                },
                {
                    title: ' vue部分',

                    collapsable: true,
                    children: [
                        '/basic/vue/sync修饰符',
                        '/basic/vue/计算属性',
                        '/basic/vue/vue进阶构造属性',
                        '/basic/vue/构造属性之provide',
                        '/basic/vue/自定义指令',
                    ]
                },
                {
                    title: ' react部分',
                    // true 展开
                    collapsable: true,
                    children: [
                        '/basic/react/React虚拟Dom',
                        '/basic/react/redux',
                        '/basic/react/受控组件与非受控组件',
                        '/basic/react/高阶组件',
                    ]
                }
            ],
            '/project': [
                {
                    title: '前端导航',
                    collapsable: false,
                    children: [
                        '/project/nav/导航项目',

                    ]
                },
                {
                    title: " 快速记账 vue版本",
                    collapsable: true,
                    children: [
                        '/project/money-vue/序言',
                        '/project/money-vue/页面布局',
                        '/project/money-vue/Icon图标',
                        '/project/money-vue/记账页面',
                        '/project/money-vue/数据管理',
                        '/project/money-vue/Vuex数据管理',
                        '/project/money-vue/标签页面',
                        '/project/money-vue/标签编辑页面',
                        '/project/money-vue/统计页面',
                        '/project/money-vue/页面数据可视化',


                    ]
                },
                {
                    title: " 轻松记账 react版本",
                    // true 展开
                    collapsable: true,
                    children: [
                        '/project/money-react/序言',
                        '/project/money-react/项目搭建',
                        '/project/money-react/页面路由',
                        '/project/money-react/Icon图标引入',
                        '/project/money-react/layout组件',
                        '/project/money-react/记账页面',
                        '/project/money-react/数据管理',
                        '/project/money-react/标签页面',
                        '/project/money-react/自定义hooks',
                        '/project/money-react/标签编辑页面',
                        '/project/money-react/数据持久化',
                        '/project/money-react/统计页面',


                    ]
                },
                {
                    title: " 造轮子 vue2.0版本",

                    collapsable: true,
                    children: [
                        '/project/gulu-ui/序言',
                        '/project/gulu-ui/单元测试',
                        '/project/gulu-ui/button组件',
                        '/project/gulu-ui/input',
                        '/project/gulu-ui/popover',
                        '/project/gulu-ui/tabs',
                        '/project/gulu-ui/toast组件',
                        '/project/gulu-ui/手风琴组件',
                        '/project/gulu-ui/页面布局组件',


                    ]
                },
                {
                    title: " 造轮子 vue3.0版本",

                    collapsable: true,
                    children: [
                        '/project/GUlu/序言',
                        '/project/GUlu/环境搭建',
                        '/project/GUlu/button组件',
                        '/project/GUlu/switch组件',

                    ]
                },
            ],
        }

    }
}

