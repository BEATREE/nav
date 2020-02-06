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


        <h2 id="resourcesearch" ># 资源搜索</h2>
        <Card class="card" v-for="item in sites" :key="item.id" :to="item.url" target="_blank" v-if="item.tag=='resourcesearch'">
            <div style="text-align:center" >
                <img :src="item.icon">
                <h3>{{item.name}}</h3>
                <p>{{item.desc}}</p>
            </div>
        </Card>

        <h2 id="others" ># 其他</h2>
        <Card class="card" v-for="item in sites" :key="item.id" :to="item.url" target="_blank" v-if="item.tag=='others'">
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
                        tag:'others',
                        name: 'Temp Mail - Temporary Email',
                        icon: require('../assets/website/tempmail.png'),
                        url:'https://temp-mail.org/?source=beatree.cn',
                        desc:'保护隐私，临时邮件提供临时的，安全的，匿名的，免费的，一次性的电子邮件地址。',
                    },
                    {
                        id: 11,
                        tag:'others',
                        name: '隐私短信',
                        icon: require('../assets/website/message.gif'),
                        url:'https://www.yinsiduanxin.com/?source=beatree.cn',
                        desc:'隐私短信免费在线接码平台,提供专属隐私短信,虚拟手机号码,临时注册APP专属手机小号,免费手机短信验证码接收代收服务,免费一次性邮箱验证码接收.号码包括中国大陆,香港,台湾,澳门,美国,日本,英国.',
                    },
                    {
                        id: 12,
                        tag:'others',
                        name: 'FAST在线测速',
                        icon: require('../assets/website/fasttest.png'),
                        url:'https://fast.com/?source=beatree.cn',
                        desc:'你的下载速度有多快？几秒钟后，fast.com在线测速即刻知晓！',
                    },
                    {
                        id: 13,
                        tag:'others',
                        name: '西瓜视频放映厅',
                        icon: require('../assets/website/xigua.png'),
                        url:'https://www.ixigua.com/cinema/?source=beatree.cn',
                        desc:'字节跳动旗下免费视频平台，放映厅频道为您提供经典高清电视剧、电影、热播综艺节目等资源，画面清晰、播放流畅、看视频就上西瓜视频',
                    },
                    {
                        id: 14,
                        tag:'others',
                        name: '天外来客影视论坛',
                        icon: require('../assets/website/video.gif'),
                        url:'http://twlkbt.com/forum.php/?source=beatree.cn',
                        desc:'高清电影资源论坛，BluRay720p,BluRay1080p,BluRay2160p 4k 电影下载',
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