<template>
<div>
    
    
    <el-carousel trigger="click" :height="ca_height">
    <el-carousel-item v-for="(item,index) in img_obj" :key="index">
    <el-row type="flex" justify="center">
    <img ref="app_img" v-bind:src="item" class="item_bj1" />
    </el-row>
    </el-carousel-item>
    </el-carousel>
     
    <intro></intro>
   

</div>
</template>
<script>

import intro from './intro'

const indexPage = {
    components:{
        
        intro: intro
    },
    data:function(){
        return{
           img_obj:['img/fo0.jpg','img/fo1.jpg'],
           ca_height: '600px'
        }
    },
    methods: {
        watch_ca_height() {
            let _height = Math.floor(document.body.clientWidth*0.9*0.5);

            this.ca_height = _height  + 'px';
        },
    },
    updated: function(){
        this.watch_ca_height();
        
    },
    created: function(){
        window.onload =  () => {
             this.watch_ca_height();
        }
        window.onresize  = () => {
             this.watch_ca_height();
        }
    }

}
export default indexPage

</script>

<style scoped>
    .item_bj1 {
        width: 93vw;
        height: 42vw;
        margin: 20px;
    }

</style>