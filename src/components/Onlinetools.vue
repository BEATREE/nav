<template>
    <div class="devContainer">
        <h2 id="complex"># 综合站点</h2>
        <Card class="card" v-for="item in sites" :key="item.id" :to="item.url" target="_blank" v-if="item.tag=='complex'">
            <div style="text-align:center" >
                <img :src="item.icon">
                <h3>{{item.name}}</h3>
                <p>{{item.desc}}</p>
            </div>
        </Card>
        
        <h2 id="imgtool" ># 图片处理</h2>
        <Card class="card" v-for="item in sites" :key="item.id" :to="item.url" target="_blank" v-if="item.tag=='imgtool'">
            <div style="text-align:center" >
                <img :src="item.icon">
                <h3>{{item.name}}</h3>
                <p>{{item.desc}}</p>
            </div>
        </Card>


        <h2 class="resourcesearch" ># 资源搜索</h2>
        <Card class="card" v-for="item in sites" :key="item.id" :to="item.url" target="_blank" v-if="item.tag=='resourcesearch'">
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
                        tag:'complex',
                        name: 'OSCHINA 在线工具',
                        icon: require('../assets/website/oschina.png'),
                        url:'https://tool.oschina.net/?source=beatree.cn',
                        desc:'OSCHINA.NET在线工具,为开发设计人员提供在线工具，提供jsbin在线 CSS、JS 调试，在线 Java API文档,在线 PHP API文档,在线 Node.js API文档,Less CSS编译器，MarkDown编译器等其他在线工具',
                    },
                    {
                        id: 1,
                        tag:'complex',
                        name: '菜鸟工具 - 不止于工具',
                        icon: require('../assets/website/runoob.png'),
                        url:'https://c.runoob.com/?source=beatree.cn',
                        desc:'菜鸟工具，为开发设计人员提供在线工具，提供在线PHP、Python、 CSS、JS 调试，中文简繁体转换，进制转换等工具。致力于打造国内专业WEB开发工具，集成开发环境，WEB开发教程。',
                    },
                    {
                        id: 2,
                        tag:'complex',
                        name: '在线工具 - 程序员的工具箱',
                        icon: require('../assets/website/tool.png'),
                        url:'https://tool.lu/?source=beatree.cn',
                        desc:'在线工具,开发人员工具,代码格式化、压缩、加密、解密,下载链接转换,sql工具,正则测试工具,favicon在线制作,ruby工具,中文简繁体转换,迅雷下载链接转换,程序猿的在线工具',
                    },
                    {
                        id: 3,
                        tag:'imgtool',
                        name: '在线图片格式转化',
                        icon: require('../assets/website/jinaconvert.png'),
                        url:'https://jinaconvert.com/?source=beatree.cn',
                        desc:'将您的图片转换成多种图片格式。JPG, PNG, GIF, BMP, TIFF, ICO, SVG和更多图片格式!',
                    },
                    {
                        id: 4,
                        tag:'imgtool',
                        name: 'AI人工智能图片放大',
                        icon: require('../assets/website/bigjpg.png'),
                        url:'https://bigjpg.com/?source=beatree.cn',
                        desc:'Bigjpg - 使用开源waifu2x人工智能深度卷积神经网络（CNN）智能无损免费放大图片，可放大4K级超高清分辨率（4000x4000）图片，最大32倍放大,效果秒杀PhotoZoom放大。',
                    },
                    {
                        id: 5,
                        tag:'imgtool',
                        name: 'TinyPNG – 压缩PNG图片的同时保留透明度',
                        icon: require('../assets/website/tinypng.png'),
                        url:'https://tinypng.com/?source=beatree.cn',
                        desc:'加速您网站的访问并节约带宽。TinyPNG能在完整保留透明度的同时将PNG图片压缩50-80%。',
                    },
                    {
                        id: 6,
                        tag:'imgtool',
                        name: '图片背景消除',
                        icon: require('../assets/website/removebg.png'),
                        url:'https://www.remove.bg/zh/?source=beatree.cn',
                        desc:'使用人工智能，无需点击，即可在 5 秒钟内 100% 自动消除背景。',
                    },
                    {
                        id: 7,
                        tag:'resourcesearch',
                        name: '快搜 - 搜索快人一步',
                        icon: require('../assets/website/cbl.png'),
                        url:'https://search.chongbuluo.com/?source=beatree.cn',
                        desc:'快搜！虫部落全网独家首发出品！为你聚合Google,百度,必应等国内外综合搜索和学术,资源,专业领域知识等垂直搜索。精准搜索,便捷交互！是你的网络搜索第一站！',
                    },
                    {
                        id: 8,
                        tag:'resourcesearch',
                        name: '百度网盘搜索-小白盘',
                        icon: require('../assets/website/xiaobaipan.png'),
                        url:'https://www.xiaobaipan.com/?source=beatree.cn',
                        desc:'小白盘帮收录了大量的百度网盘资源,页面清新，实时检查失效资源.帮您省心快速找到想要的电影,电视剧,小说,文档,音乐,软件,种子等热门网盘资源',
                    },
                    {
                        id: 9,
                        tag:'resourcesearch',
                        name: '超高无损音乐',
                        icon: require('../assets/website/sqmusic.jpg'),
                        url:'https://www.sq688.com/?source=beatree.cn',
                        desc:'超高无损音乐网SQ688.Com收录大量无损音乐免费下载,提供华语男歌手,华语女歌手,华语乐队,专辑合集,欧美歌手等FLAC,WAV,DSD,APE格式无损音乐免费下载',
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