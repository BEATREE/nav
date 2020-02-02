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
        
        <h2 id="framework" ># 开发框架</h2>
        <Card class="card" v-for="item in sites" :key="item.id" :to="item.url" target="_blank" v-if="item.tag=='frame'">
            <div style="text-align:center" >
                <img :src="item.icon">
                <h3>{{item.name}}</h3>
                <p>{{item.desc}}</p>
            </div>
        </Card>


        <h2 class="book" ># 教程手册</h2>
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