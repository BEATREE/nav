<template>
    <div class="devContainer">
        <h2 id="recommend">常用推荐</h2>
        <Card class="card" v-for="item in sites" :key="item.id" :to="item.url" target="_blank">
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
                        name: 'GitHub',
                        icon: require('../assets/website/github.png'),
                        url:'https://github.com/?source=beatree.cn',
                        desc:'稳定、快速、免费的前端开源项目 CDN 加速服务',
                    },
                    {
                        id: 1,
                        name: 'Boot CDN',
                        icon: require('../assets/website/bootcdn.png'),
                        url:'https://www.bootcdn.cn/?source=beatree.cn',
                        desc:'稳定、快速、免费的前端开源项目 CDN 加速服务',
                    },
                    {
                        id: 2,
                        name: '菜鸟教程',
                        icon: require('../assets/website/runoob.png'),
                        url:'https://www.runoob.com/?source=beatree.cn',
                        desc:'菜鸟教程提供了编程的基础技术教程，同时也有大量的实例用于理解学习',
                    },
                    {
                        id: 3,
                        name: '中国大学MOOC',
                        icon: require('../assets/website/mooc.png'),
                        url:'https://www.icourse163.org/?source=beatree.cn',
                        desc:'中国大学MOOC(慕课)_国家精品课程在线学习平台 | 好的大学，没有围墙',
                    },
                    {
                        id: 4,
                        name: 'LeetCode',
                        icon: require('../assets/website/leetcode.png'),
                        url:'https://leetcode-cn.com/?source=beatree.cn',
                        desc:'备战技术面试？力扣提供海量技术面试资源，帮助你高效提升编程技能，轻松拿下世界 IT 名企 Dream Offer。',
                    },
                    {
                        id: 5,
                        name: 'Bilibili',
                        icon: require('../assets/website/bilibili.jpg'),
                        url:'https://www.bilibili.com/?source=beatree.cn',
                        desc:'bilibili是国内知名的视频弹幕网站，这里有最及时的动漫新番，最棒的ACG氛围，最有创意的Up主。大家可以在这里找到许多欢乐。',
                    },
                    {
                        id: 6,
                        name: '少数派',
                        icon: require('../assets/website/sspai.jpg'),
                        url: 'https://sspai.com/?source=beatree.cn',
                        desc: '少数派致力于更好地运用数字产品或科学方法，帮助用户提升工作效率和生活品质'
                    },
                    {
                        id: 7,
                        name: '小众软件',
                        icon: require('../assets/website/appinn.jpg'),
                        url: 'https://www.appinn.com/?source=beatree.cn',
                        desc: '小众软件是一个分享、体验、评测电脑软件、手机应用、互联网产品的网站'
                    },
                    {
                        id: 8,
                        name: 'Pocket',
                        icon: require('../assets/website/pocket.png'),
                        url: 'https://getpocket.com/?source=beatree.cn',
                        desc: '随时随处保存，存储知识，激发思想！'
                    }

                ]
            };
        }
    }
</script>

<style scoped>
    .card {
        color: #515a6e;
        width: 30%;
        height: 125px;
        overflow: hidden;
        margin-left: 2.5%;
        margin-top:12px;
        float: left;
        box-shadow: 0px 1px 6px rgba(0,0,0,.2);
        /* background-color: #f5f7f9; */
    }
    .ivu-card .card:hover {
        color: #2d8cf0;;
        box-shadow: 0px 1px 18px rgba(0,0,0,.38);
        border-color: #eee;
    }
    .devContainer h2 {
        /* float: left; */
        padding-top: 15px;
        clear: both;
    }
</style>