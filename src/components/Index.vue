<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}" >
            <!-- :collapsible=true v-model="isCollapsed" -->
            <Menu active-name="1-2" :theme="menuTheme" width="auto" :class="menuitemClasses">
                <img src="../assets/img/navLogo2.png" style="width:100%;"/>

                <MenuItem name="0">
                    <Icon type="ios-medal" />
                    <span>常用网站</span>
                </MenuItem>

                <Submenu name="1">
                    <template slot="title">
                        <Icon type="md-code-working" />
                        <span>开发时域</span>
                    </template>
                    <MenuItem name="1-1">
                        <Icon type="md-cloud-done" />
                        <span>CDN WEB</span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <Icon type="logo-codepen" />
                        <span>开发框架</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <Icon type="ios-book" />
                        <span>教程手册</span>
                    </MenuItem>
                </Submenu>

                <Submenu name="2">
                    <template slot="title">
                        <Icon type="md-flame" />
                        <span>有关设计</span>
                    </template>
                    <MenuItem name="2-1">
                        <Icon type="md-flame" />
                        <span>图标素材</span>
                    </MenuItem>
                    <MenuItem name="2-2">
                        <Icon type="md-videocam" />
                        <span>视频图片</span>
                    </MenuItem>
                </Submenu>

                

                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-globe" />
                        <span>在线工具</span>
                    </template>
                    <MenuItem name="3-1">
                        <Icon type="md-settings" />
                        <span>综合站点</span>
                    </MenuItem>
                    <MenuItem name="3-2">
                        <Icon type="md-image" />
                        <span>图片处理</span>
                    </MenuItem>
                    <MenuItem name="3-3">
                        <Icon type="md-search" />
                        <span>资源搜索</span>
                    </MenuItem>
                    <MenuItem name="3-4">
                        <Icon type="ios-water" />
                        <span>其他</span>
                    </MenuItem>
                    
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <!--头部导航处-->
            <Header class="rHead" :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)', margin:'12px 12px 0px 12px ', padding:'12px 6px 6px 6px' }">
                <Select v-model="searchVal" style="width:15%; float: left;" @on-change="searcherSelected">
                    <Avatar :src="currentSearch.img" slot="prefix" size="small" style="margin-right:6px;" />
                    <Option v-for="item in searchers" :value="item.value" :key="item.value">
                        {{ item.name }}
                    </Option>
                </Select>
                <Input style="width:80%; float: left; margin-left:1%;" search enter-button="Search" placeholder="Enter something..." />
            </Header>
            <!--主体内容区域-->
            <Content :style="{padding: '0 12px 16px'}">
                <Card :style="{margin: '16px 0'}">
                    <div style="height: 600px">
                    
                    </div>
                </Card>
            </Content>
            <Footer>
                Copyright - 2019 <a href="http://beatree.cn" target="_blank">beatree.cn</a> 大树导航 一个简洁的网址导航，本站将不定期更新收录网站资源。
            </Footer>
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
                searchers:[
                    {
                        img: require('../assets/icons/doge_ico.png'),
                        name: 'Doge',
                        value: 0,
                    },
                    {
                        img: require('../assets/icons/google_ico.png'),
                        name: 'Google',
                        value: 1,
                    },
                    {
                        img: require('../assets/icons/baidu_ico.png'),
                        name: 'Baidu',
                        value: 2,
                    },
                    {
                        img: require('../assets/icons/bing_ico.png'),
                        name: 'Bing',
                        value: 3,
                    },
                    {
                        img: require('../assets/icons/magi_ico.png'),
                        name: 'Magi',
                        value: 4,
                    },
                    {
                        img: require('../assets/icons/miji_ico.png'),
                        name: 'Mijisou',
                        value: 5,
                    },
                    
                ],
                searchVal: 0,
                currentSearch:{
                        img: require('../assets/icons/doge_ico.png'),
                        name: 'Doge',
                        value: 0,
                    },
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
                this.$data.currentSearch = this.searchers[this.$data.searchVal];
            },
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