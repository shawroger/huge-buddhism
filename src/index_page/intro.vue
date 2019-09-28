<template>
<div>
    <h1 class="item_text_more">皈依巨乘佛法 · 果报不可思议</h1>
    <el-divider></el-divider>
    <el-row>
  	<el-col :xs="24" :sm="6" :md="12">
  	<center>
  	<h1 class="item">南無奧特曼佛</h1>
    <img src="img/index_logo.jpg" class="logo"/>
    <h1 class="item_text">虔誠信奉 果報殊勝</h1>
    </center>
  	</el-col>
  	<el-col :xs="24" :sm="6" :md="12" style="background: black">
  	<center>
  	<h1 class="item">南無奧特曼佛</h1>
    <img src="img/index_logo2.jpg" class="logo"/>
    <h1 class="item_text" style="color:white">虔誠信奉 果報殊勝</h1>
    </center>
  	</el-col>
	</el-row>


</div>       
</template>
<script>
const index_introduction =  {
    data: function() {
        return {
            
        }
    },
    methods: {
     
    },
}
export default index_introduction

</script>

<style scoped>
.item {
    padding-left: 10px;
    font-family: KaiTi;
    font-size: 50px;
    text-align: center;
    color: #FECC0B;
}
.item_text {
	padding-left: 10px;
    font-family: KaiTi;
    font-size: 50px;
    text-align: center;
}
.logo {
	width: 225px;
	height: 225px;

}
.item_text_more {
	padding-left: 10px;
    font-family: KaiTi;
    font-size: 50px;
    text-align: center;
}
@media screen and (max-width: 768px ) {
    .item {
        font-size: 30px;
    }

    .item_text {
	padding-left: 10px;
    font-family: KaiTi;
    font-size: 30px;
    text-align: center;
	}
	.item_text_more {
	padding-left: 10px;
    font-family: KaiTi;
    font-size: 35px;
    text-align: center;
	}
}

@media screen and (max-width: 468px ) {
	.item_text_more {
	padding-left: 10px;
    font-family: KaiTi;
    font-size: 25px;
    text-align: center;
	}
}
</style>