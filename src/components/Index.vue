<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}"  v-model="isCollapsed">
                <!-- :collapsible=true v-model="isCollapsed" -->
                <Menu active-name="0-3" :theme="menuTheme" width="auto" :class="menuitemClasses" :open-names="['1']" accordion >
                    <img @click="toOuterLink('http://beatree.cn')" src="../assets/img/navLogo2.png" style="width:100%;"/>

                    <MenuItem name="0" to="/recommend">
                        <Icon type="ios-medal" />
                        <span>常用网站</span>
                    </MenuItem>

                    <Anchor show-ink style="display:none;">
                        <AnchorLink href="" title="Basic Usage" />
                    </Anchor>

                    <MenuGroup title="开发时域">

                        <!-- <Submenu name="1">
                            <template slot="title" >
                            <Icon type="md-code-working" />
                            <span style="">开发时域</span>
                        </template> -->

                        <MenuItem v-for="item in categories1" :key="item.id" :name="item.id" :to="item.target">
                            <Icon :type="item.icon" />
                            <span>{{item.name}}</span>
                        </MenuItem>

                    </MenuGroup>

                    <MenuGroup title="有关设计">
                        <!-- 
                            <Submenu name="2">
                            <template slot="title">
                            <Icon type="md-flame" />
                            <span>有关设计</span>
                        </template> -->

                        <MenuItem v-for="item2 in categories2" :key="item2.id" :name="item2.id" :to="item2.target">
                            <Icon :type="item2.icon" />
                            <span>{{item2.name}}</span>
                        </MenuItem>
                    </MenuGroup>

                    

                    <MenuGroup title="在线工具">
                        <!--<Submenu name="3"> 
                            <template slot="title">
                            <Icon type="ios-globe" />
                            <span>在线工具</span>
                        </template> -->
                        
                        <MenuItem v-for="item3 in categories3" :key="item3.id" :name="item3.id" :to="item3.target">
                            <Icon :type="item3.icon" />
                            <span>{{item3.name}}</span>
                        </MenuItem>
                        
                        
                    </MenuGroup>
                </Menu>
            </Sider>
            <Layout :style="{marginLeft: '200px'}">
                <!--头部导航处-->
                <Header class="rHead" :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)', margin:'12px 12px 0px 12px ', padding:'12px 6px 6px 6px'}">
                    <!-- ,width: '82%', position:'fixed', -->
                    <Select v-model="searchVal" style="width:15%; float: left;" @on-change="searcherSelected">
                        <Avatar :src="currentSearch.img" slot="prefix" size="small" style="margin-right:6px;" />
                        <Option v-for="item in searchers" :value="item.value" :key="item.value">
                            {{ item.name }}
                        </Option>
                    </Select>

                    <Input v-model="keyword" style="width:80%; float: left; margin-left:1%;" search enter-button="Search" placeholder="Enter something..." :autofocus="true" @on-search="search()" />

                </Header>

                <!--主体内容区域-->
                <Content :style="{padding: '0 12px 16px'}">
                    <Card :style="{margin: '7px 0', background:'#f5f7f9', border:'0px',}" :dis-hover="true" :bordered="false">
                        <div style="min-height: 600px; margin-top:-22px;">
                            <transition name="mainContent">
                                <router-view>

                                </router-view>
                            </transition>
                        </div>
                    </Card>
                </Content>
                <Footer>
                    Copyright - 2020 <a href="https://beatree.cn" target="_blank">beatree.cn</a> 大树导航 一个简洁的网址导航 | 本站将不定期更新收录网站资源。
                </Footer>
            </Layout>
            </Layout>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data(){
            return {
                isCollapsed: false,
                menuTheme:'dark',
                keyword:'',
                searchers:[
                    {
                        img: require('../assets/icons/google_ico.png'),
                        name: 'Google',
                        value: 0,
                    },
                    {
                        img: require('../assets/icons/baidu_ico.png'),
                        name: 'Baidu',
                        value: 1,
                    },
                    {
                        img: require('../assets/icons/bing_ico.png'),
                        name: 'Bing',
                        value: 2,
                    },
                    {
                        img: require('../assets/icons/magi_ico.png'),
                        name: 'Magi',
                        value: 3,
                    },
                    {
                        img: require('../assets/icons/miji_ico.png'),
                        name: 'Mijisou',
                        value: 4,
                    },
                    
                ],
                searchFormats:[
                    'https://www.google.com/search?q=',
                    'https://www.baidu.com/s?wd=',
                    'https://bing.com/search?q=',
                    'https://magi.com/search?q=',
                    'https://mijisou.com/?q=',
                ],
                categories1:[
                    {
                        id: 1,
                        name: 'CDN WEB',
                        icon: 'md-cloud-done',
                        target: '/devspace#cdn',
                    },
                    {
                        id:10,
                        name: '自我充电',
                        icon: 'ios-battery-charging',
                        target:'/devspace#selfimprove'
                    },
                    {
                        id: 2,
                        name: '开发框架',
                        icon: 'logo-codepen',
                        target: '/devspace#framework',
                    },
                    {
                        id:3,
                        name: '教程手册',
                        icon: 'ios-book',
                        target: '/devspace#book',
                    },
                ],
                categories2: [
                    {
                        id: 4,
                        name: '图标素材',
                        icon: 'md-flame',
                        target: '/design#icon',
                    },
                    {
                        id: 5,
                        name: '视频图片',
                        icon: 'md-videocam',
                        target: '/design#vipic',
                    },
                ],
                categories3: [
                    {
                        id: 6,
                        name: '综合站点',
                        icon: 'md-settings',
                        target: '/onlinetools#complex',
                    },
                    {
                        id: 7,
                        name: '图片处理',
                        icon: 'md-image',
                        target: '/onlinetools#imgtool',
                    },
                    {
                        id:8,
                        name: '资源搜索',
                        icon: 'md-search',
                        target: '/onlinetools#resourcesearch',
                    },
                    {
                        id:9,
                        name: '其他',
                        icon: 'ios-water',
                        target: '/onlinetools#others',
                    },
                    
                ],
                searchVal: 1,
                currentSearch:{
                        img: require('../assets/icons/google_ico.png'),
                        name: 'Google',
                        value: 0,
                },
                jumpTargets: [// 控制子菜单路由跳转
                    '/',
                    '/devspace',
                    '/design',
                    '/onlinetools'
                ],
            };
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side0.toggleCollapse();
            },
            searcherSelected(e){// 搜索引擎更改，需要更改相关搜索链接
                this.$data.currentSearch = this.searchers.filter(item => item.value == this.$data.searchVal)[0];
            },
            jumpTo(target){
                console.log('tag', target)
                let targetUrl = this.$data.jumpTargets[target[0]];// 目标url
                let currentUrl = this.$route.path;
                if( targetUrl != currentUrl){
                    this.$router.push({
                        path: targetUrl,
                    })
                }
            },
            /*进行搜索 */
            search(){
                let keyword = this.$data.keyword;                   // 获取关键词
                let searchIndex = this.$data.currentSearch.value;   // 获取对应搜索引擎格式
                let href = this.$data.searchFormats[searchIndex]+keyword;
                this.toOuterLink(href);                             // 执行搜索
            },

            toOuterLink(href){
                window.open(href, '_blank'); 
            }
        }
    }
</script>

<style scoped>

    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        margin-top:-1px;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    
    .layout-con{
        height: 100%;
        width: 100%;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }

</style>