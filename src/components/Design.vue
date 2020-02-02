<template>
    <div class="devContainer">
        <h2 id="icon"># 图标素材</h2>
        <Card class="card" v-for="item in sites" :key="item.id" :to="item.url" target="_blank" v-if="item.tag=='icon'">
            <div style="text-align:center" >
                <img :src="item.icon">
                <h3>{{item.name}}</h3>
                <p>{{item.desc}}</p>
            </div>
        </Card>
        
        <h2 id="vipic" ># 视频图片</h2>
        <Card class="card" v-for="item in sites" :key="item.id" :to="item.url" target="_blank" v-if="item.tag=='vipic'">
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
                        tag:'icon',
                        name: 'EasyIcon',
                        icon: require('../assets/website/easyicon.svg'),
                        url:'https://www.easyicon.net/?source=beatree.cn',
                        desc:'easyicon是以分享图标下载，ICON(SVG/PNG/ICO/ICNS)图标搜索下载为功能的网站。',
                    },
                    {
                        id: 1,
                        tag:'icon',
                        name: 'Iconfont 阿里图标库',
                        icon: require('../assets/website/iconfont.png'),
                        url:'https://www.iconfont.cn//?source=beatree.cn',
                        desc:'Iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能。阿里巴巴体验团队倾力打造，设计和前端开发的便捷工具',
                    },
                    {
                        id: 2,
                        tag:'icon',
                        name: 'Ggraphberry 图浆果',
                        icon: require('../assets/website/graphberry.png'),
                        url:'https://www.graphberry.com/?source=beatree.cn',
                        desc:'Free design resourse for design. | 免费供个人和商业用途',
                    },
                    {
                        id: 3,
                        tag:'icon',
                        name: 'logoeps',
                        icon: require('../assets/website/tree.png'),
                        url:'https://logoeps.com/?source=beatree.cn',
                        desc:'Brand logos, logo templates in vector format (.EPS, .AI, .SVG, .PDF, .CDR) free download - logoEPS.com',
                    },
                    {
                        id: 4,
                        tag:'icon',
                        name: 'Free Logo Maker',
                        icon: require('../assets/website/namecheap.png'),
                        url:'https://www.namecheap.com/logo-maker/?source=beatree.cn',
                        desc:'免费在线制作LOGO，需要注意：有时候中文会乱码',
                    },
                    {
                        id: 5,
                        tag:'vipic',
                        name: 'Unsplash',
                        icon: require('../assets/website/unsplash.png'),
                        url:'https://unsplash.com/?source=beatree.cn',
                        desc:'Beautiful Free Images & Pictures',
                    },
                    {
                        id: 6,
                        tag:'vipic',
                        name: 'Pixabay',
                        icon: require('../assets/website/pixabay.svg'),
                        url:'https://pixabay.com/?source=beatree.cn',
                        desc:'Pixabay拥有超过1百万张优质图片和视频素材，让你轻松应对各种设计场景',
                    },
                    {
                        id: 7,
                        tag:'vipic',
                        name: 'Mixkit',
                        icon: require('../assets/website/mixkit.png'),
                        url:'https://mixkit.co/?source=beatree.cn',
                        desc:'下载高品质的，免版税的录像和艺术。每天增加新真棒广告资产，是完全免费使用。',
                    },
                    {
                        id: 8,
                        tag:'vipic',
                        name: 'Pexels',
                        icon: require('../assets/website/Pexels.png'),
                        url:'https://www.pexels.com/videos/?source=beatree.cn',
                        desc:'Pexels上可以很容易地找到免费影片素材为您的网站，宣传片或其他任何东西。所有视频都是免费供个人和商业用途',
                    },
                    {
                        id: 9,
                        tag:'vipic',
                        name: 'Mixkit',
                        icon: require('../assets/website/Videvo.png'),
                        url:'https://www.videvo.net/?source=beatree.cn',
                        desc:'下载免费素材影片和高清视频短片; Videvo提供了大量的高清视频短片，动画和免费影视素材的。',
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