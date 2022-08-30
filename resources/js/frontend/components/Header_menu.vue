<template>
    <Header :style="{position: 'fixed', width: '100%'}">
        <div class="layout-logo">DevBipu</div>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-nav">
                <MenuItem name="1" :to="{name: 'Home'}">
                    <Icon type="ios-home-outline" />
                    Home
                </MenuItem>
                <MenuItem name="2" :to="{name: 'Posts'}">
                    <Icon type="logo-rss" />
                    Posts
                </MenuItem>
                <MenuItem name="3" :to="{name: 'PostSingle'}">
                    <Icon type="ios-analytics"></Icon>
                    Post Single
                </MenuItem>
                
            </div>
        </Menu>
    </Header>
</template>