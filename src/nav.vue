<template>
<div class="page">
<el-row type="flex" justify="start">
    <el-menu :default_page="activeIndex" mode="horizontal"  @select="handleSelect">
    <el-menu-item index="0">首页</el-menu-item>
    <el-menu-item index="1">缘起</el-menu-item>
    <el-menu-item index="2">殊胜</el-menu-item>
    <el-menu-item index="3">教义</el-menu-item>
    </el-menu>  
</el-row> 
</div>       
</template>
<script>
const nav =  {
    data: function() {
        return {
            default_page: 0,
            router_name:['/','/缘起','/殊胜','/教义']
        }
    },
    methods: {
        handleSelect(key){
            this.$store.commit('change_nav_page', key);
            this.default_page = this.$store.state.nav_page;
            this.$router.push(this.router_name[key]);
        },
    },
}
export default nav

</script>

<style scoped>
.title {
    padding-left: 50px;
    font-size: 30px;
    font-family: KaiTi;
    position: absolute;
    top: -10px;
    left: 0;
}
.page {
    padding-right: 50px;
}

@media screen and (max-width: 768px ) {
    .page {
        padding-right: 10px;
    }

    .title {
    padding-left: 10px;
    font-size: 20px;
    font-family: KaiTi;
    position: absolute;
    top: 0px;
    left: 0;
}
}

</style>