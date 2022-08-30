<script setup>
	import HeaderMenu from './components/Header_menu'
</script>
<template>
    <div class="layout">
        <Layout>
            <HeaderMenu/>
            <Content :style="{margin: '65px 0 0', background: '#fff', minHeight: '500px'}">
                <router-view/>
            </Content>
            <Footer class="layout-footer-center">{{new Date().getFullYear()}} &copy; DevBipu <a href="https://github.com/devbipu" target="_blank"><Icon type="logo-github" /></a></Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        name: "HomePage",
        created(){
	    	this.$Loading.config({
	            color: '#5cb85c',
	            failedColor: '#f0ad4e',
	            height: 5
	        });
        }
    }
</script>


<style>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .ivu-layout-header{
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
    }
    .layout-logo{
        max-width: 100px;
        color: white;
        border-radius: 3px;
        
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
  .dev-run-preview .dev-run-preview-edit{ display: none }
</style>