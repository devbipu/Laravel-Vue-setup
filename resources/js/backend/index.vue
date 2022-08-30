<template>
    <div class="layout">
        <!-- Top header start -->
        <Header :style="{position: 'fixed', width: '100%', zIndex: '222', borderBottom: '4px solid #dddddd', color: 'white'}">
            <Row align="center">
                <Col span="3">
                    <div>
                        <a href="/">Home</a>
                    </div>
                </Col>
                <Col span="20">
                    <div>two</div>
                </Col>
                <Col span="1">
                    <div>
                        <Icon size="28" type="md-contact" @click="helpers.showProfile = !helpers.showProfile" />
                        <div class="profileWrapper" v-if="helpers.showProfile">
                            <h2>Biplob Shaha</h2>
                            <p>Full Stack Developer</p>
                            <p>devbipu@gmail.com</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Header>
        <!-- Top header end -->

        <Layout :style="{marginTop: '64px'}">
            <!-- Sidebar start -->
            <Sider :style="{minHeight: '100vh', position: 'fixed', left: 0, overflow: 'auto' }" ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                
                <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses" class="sidebarMenu">
                    <MenuItem name="1-1" to="/admin/dashboard">
                        <Icon type="ios-navigate" size="22"></Icon>
                        <span>Home</span>
                    </MenuItem>
                    <Submenu name="2">
                        <template #title>
                            <Icon type="ios-filing" size="22"/>
                            Posts
                        </template>
                        <MenuItem name="2-1" to="/admin/posts">All posts</MenuItem>
                        <MenuItem name="2-2">Tags</MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
            <!-- Sidebar end -->


            <!-- Main page layout start -->
            <Layout :style="{marginLeft: styles.mLeft}">

                <!-- Content header start -->
                <Header :style="{paddingLeft: 0}" class="layout-header-bar inner_header_bar">
                    <Row>
                        <Col  :xl="{span: 2}" :lg="{span: 2}" :sm="{span: 3}" :xs="{flex: 'auto'}">
                            <Icon @click="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px', cursor: 'pointer', lineHeight: '38px'}" type="md-menu" size="32"></Icon>
                        </Col>
                        <Col :xl="{span: 22}" :lg="{span: 22}" :sm="{span: 21}" :xs="{flex: 'auto'}">
                            <div>one time</div>
                        </Col>
                    </Row>
                </Header>
                <!-- Content header end -->


                <!-- Page content start -->
                <Content :style="{margin: '20px', padding: '20px', background: '#fff', minHeight: '360px'}">
                    <router-view/>
                </Content>
                <!-- Page Content End -->
            </Layout>
            <!-- Main page layout End -->

        </Layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isCollapsed: false,
                styles: {
                    mLeft: '200px',
                },
                windowWidth: 0,
                helpers: {
                    showProfile: false,
                }
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
                if(this.styles.mLeft == '200px'){
                    this.styles.mLeft = '80px'
                }else{
                    this.styles.mLeft = '200px'
                }
            },
        },
        watch() {

        },
        created() {
            this.windowWidth = window.innerWidth
            if(this.windowWidth < 768){
                this.isCollapsed = true;
                this.styles.mLeft = '80px';
            }

            
            this.$Loading.config({
                color: '#5cb85c',
                failedColor: '#f0ad4e',
                height: 10
            });

        }

    }
</script>



<style scoped>
    .layout{
        /*border: 1px solid #d7dde4;*/
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
    }
    .layout .ivu-menu{
        z-index: 0;
        color:  white;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    
    /*.layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }*/
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
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

    /*My custom*/
    .inner_header_bar.ivu-layout-header{
        line-height: 38px;
        min-height: 36px;
    }
    @media(max-width:  768px){
        .inner_header_bar.ivu-layout-header{
            height: inherit;
        }
    }
    .ivu-layout-header{
        line-height: inherit;
        padding-top: calc(1% - 0px);
    }

    /*.sidebarMenu .ivu-menu-item{
        font-size: 18px;
    }
    .sidebarMenu .ivu-menu-submenu{
        font-size: 22px;
    }*/

    .profileWrapper {
        position: absolute;
        width: 250px;
        background: #515A6E;
        padding: 29px;
        right: 18px;
        top: 62px;
        border-radius: 14px;
    }

    .profileWrapper::before {
        content: "";
        display: inline-block;
        width: 50px;
        height: 50px;
        /* background: red; */
        position: absolute;
        right: 12px;
        top: -50px;
        border: 25px solid #515A6E;
        border-left-color: transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        z-index: -1;
    }

    @media(max-width:  768px){
        .profileWrapper{
            right: -22px;
        }
        .ivu-layout-header[data-v-7ff686ee] {
            line-height: inherit;
            padding-top: calc(3% - 6px);
        }
    }
</style>

<style>
    body{
        font-family: 'Josefin Sans', sans-serif;
        font-size: 16px;
    }
</style>
