<template>
    <div class="devContainer">
        
        <h2 id="cdn"># CDN WEB</h2>
        <Card class="card" v-for="item in sites" :key="item.id" :to="item.url" target="_blank" v-if="item.tag=='cdn'">
            <div style="text-align:center" >
                <img :src="item.icon">
                <h3>{{item.name}}</h3>
                <p>{{item.desc}}</p>
            </div>
        </Card>

        <h2 id="selfimprove"># 自我充电</h2>
        <Card class="card" v-for="item in sites" :key="item.id" :to="item.url" target="_blank" v-if="item.tag=='selfimprove'">
            <div style="text-align:center" >
                <img :src="item.icon">
                <h3>{{item.name}}</h3>
                <p>{{item.desc}}</p>
            </div>
        </Card>
        
        <h2 id="framework" ># 开发框架</h2>
        <Card class="card" v-for="item in sites" :key="item.id" :to="item.url" target="_blank" v-if="item.tag=='frame'">
            <div style="text-align:center" >
                <img :src="item.icon">
                <h3>{{item.name}}</h3>
                <p>{{item.desc}}</p>
            </div>
        </Card>


        <h2 id="book" ># 教程手册</h2>
        <Card class="card" v-for="item in sites" :key="item.id" :to="item.url" target="_blank" v-if="item.tag=='book'">
            <div style="text-align:center" >
                <img :src="item.icon">
                <h3>{{item.name}}</h3>
                <p>{{item.desc}}</p>
            </div>
        </Card>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                sites: [
                    {
                        id: 0,
                        tag:'cdn',
                        name: 'BootCDN',
                        icon: require('../assets/website/bootcdn.png'),
                        url:'https://www.bootcdn.cn/?source=beatree.cn',
                        desc:'稳定、快速、免费的前端开源项目 CDN 加速服务',
                    },
                    {
                        id: 1,
                        tag:'cdn',
                        name: 'Staticfile CDN',
                        icon: require('../assets/website/staticfile.png'),
                        url:'http://www.staticfile.org/?source=beatree.cn',
                        desc:'免费、快速、开放的 CDN 服务',
                    },
                    {
                        id: 2,
                        tag:'cdn',
                        name: 'CDNJS',
                        icon: require('../assets/website/cdnjs.png'),
                        url:'https://cdnjs.com/?source=beatree.cn',
                        desc:'The best FOSS CDN for web related libraries to speed up your websites!',
                    },
                    {
                        id: 3,
                        tag:'frame',
                        name: 'Spring框架',
                        icon: require('../assets/website/spring.jpg'),
                        url:'https://spring.io/?source=beatree.cn',
                        desc:'Spring: the source for modern java',
                    },
                    {
                        id: 4,
                        tag:'frame',
                        name: 'Bootstrap',
                        icon: require('../assets/website/bootstrap.jpg'),
                        url:'https://www.bootcss.com/?source=beatree.cn',
                        desc:'简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。',
                    },
                    {
                        id: 5,
                        tag:'frame',
                        name: 'Vue.js',
                        icon: require('../assets/website/vue.png'),
                        url:'https://cn.vuejs.org/?source=beatree.cn',
                        desc:'渐进式 JavaScript 框架 |易用|灵活|高效',
                    },
                    {
                        id: 6,
                        tag:'frame',
                        name: 'Element UI',
                        icon: require('../assets/website/element.png'),
                        url:'https://element.eleme.cn/?source=beatree.cn',
                        desc:'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
                    },
                    {
                        id: 7,
                        tag:'frame',
                        name: 'View UI',
                        icon: require('../assets/website/iview.png'),
                        url:'https://www.iviewui.com/?source=beatree.cn',
                        desc:'是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品',
                    },
                    {
                        id: 8,
                        tag:'book',
                        name: 'MDN',
                        icon: require('../assets/website/mdn.png'),
                        url:'https://developer.mozilla.org/?source=beatree.cn',
                        desc:'Mozilla旗下网站。源于开发者，服务开发者。',
                    },
                    {
                        id: 9,
                        tag:'book',
                        name: '菜鸟教程',
                        icon: require('../assets/website/runoob.png'),
                        url:'https://www.runoob.com/?source=beatree.cn',
                        desc:'菜鸟教程提供了编程的基础技术教程，同时也有大量的实例用于理解学习',
                    },
                    {
                        id: 10,
                        tag:'book',
                        name: 'W3C School',
                        icon: require('../assets/website/w3c.png'),
                        url:'https://www.w3school.com.cn/?source=beatree.cn',
                        desc:'全球最大的中文 Web 技术教程。在 W3School，你可以找到你所需要的所有的网站建设教程。',
                    },
                    {
                        id: 11,
                        tag:'frame',
                        name: 'NUXT JS',
                        icon: require('../assets/website/nuxtjs.png'),
                        url:'https://www.nuxtjs.cn/?source=beatree.cn',
                        desc:'Nuxt.js 是一个基于 Vue.js 的轻量级应用框架，可用来创建服务端渲染 (SSR) 应用，也可充当静态站点引擎生成静态站点应用，具有优雅的代码结构分层和热加载等特性。',
                    },
                    {
                        id: 12,
                        tag:'book',
                        name: 'Node.js 中文网',
                        icon: require('../assets/website/nodejs.png'),
                        url:'https://www.nodeapp.cn/?source=beatree.cn',
                        desc:'Node.js 中文文档。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。Node.js 的包管理器 npm，是全球最大的开源库生态系统。',
                    },
                    {
                        id: 13,
                        tag:'book',
                        name: 'webpack 中文文档',
                        icon: require('../assets/website/webpack.svg'),
                        url:'https://www.webpackjs.com/?source=beatree.cn',
                        desc:'webpack 是一个模块打包器。webpack 的主要目标是将 JavaScript 文件打包在一起，打包后的文件用于在浏览器中使用，但它也能够胜任转换(transform)、打包(bundle)或包裹(package)任何资源(resource or asset)。',
                    },
                    {
                        id: 14,
                        tag:'selfimprove',
                        name: 'IBM Developer 中国',
                        icon: require('../assets/website/ibm.png'),
                        url:'https://www.ibm.com/developerworks/cn/?source=beatree.cn',
                        desc:'IBM Developer，IBM 的官方开发者项目。在这里，您可以访问和下载试用版软件，查找丰富的 IT 技术资源（文章、教程、博客、Code Pattern、视频和代码等），和专业的 IT 从业人员交流。学习资源，开发工具和技术社区。',
                    },
                    {
                        id: 15,
                        tag:'selfimprove',
                        name: '力扣中国（LeetCode）官网',
                        icon: require('../assets/website/leetcode.png'),
                        url:'https://leetcode-cn.com/?source=beatree.cn',
                        desc:'备战技术面试？力扣提供海量技术面试资源，帮助你高效提升编程技能，轻松拿下世界 IT 名企 Dream Offer。',
                    },
                    {
                        id: 16,
                        tag:'selfimprove',
                        name: 'HackerRank',
                        icon: require('../assets/website/hackerrank-favicon.png'),
                        url:'https://www.hackerrank.com/?source=beatree.cn',
                        desc:'Join over 7 million developers. Practice coding, prepare for interviews, and get hired.',
                    },
                    {
                        id: 17,
                        tag:'selfimprove',
                        name: '中国大学MOOC(慕课)',
                        icon: require('../assets/website/icourse.png'),
                        url:'https://www.icourse163.org/?source=beatree.cn',
                        desc:'好的大学，没有围墙！平台拥有包括985高校在内提供的千余门课程，其中首批获得认定的国家精品在线开放课程322门，占2017年获得认定课程总数的65.7%。',
                    },
                    {
                        id: 18,
                        tag:'selfimprove',
                        name: '慕课网-程序员的梦工厂',
                        icon: require('../assets/website/imooc.png'),
                        url:'https://www.imooc.com/?source=beatree.cn',
                        desc:'提供了丰富的移动端开发、php开发、web前端、android开发以及html5等视频教程资源公开课。并且富有交互性及趣味性，你还可以和朋友一起编程。',
                    },
                    {
                        id: 19,
                        tag:'frame',
                        name: 'View UI',
                        icon: require('../assets/website/vux.png'),
                        url:'https://vux.li/?source=beatree.cn',
                        desc:'Vue.js 移动端 UI 组件库，虽是个人维护，但项目还是很强的！',
                    },
                    
                ],
            };
        }
    }
</script>

<style scoped>
    
    .devContainer h2 {
        /* float: left; */
        padding-top: 15px;
        clear: both;
    }
</style>