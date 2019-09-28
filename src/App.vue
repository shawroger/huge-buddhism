<template>
<div>

<nav_item></nav_item>

 
<router-view></router-view>   
<el-divider></el-divider> 

<div style="background-color: whiteSmoke;padding-right: 0">
<el-row>
  <el-col :span="12">
  <h1 class="bot_a"><a href="https://tieba.baidu.com/f?kw=%E6%88%92%E5%91%BC%E5%90%B8">戒呼吸吧</a></h1>
  <h1 class="bot_a"><a href="https://www.jiehuxi.org/">戒呼吸官网</a></h1>
  
  </el-col>

  <el-col :span="12">
  <h1 class="bot_a">南无奥特曼</h1>
  <h1 class="bot_a">只渡有缘人</h1>
  <h1 class="bot_a">累计浏览：{{visitors}} 人次</h1>
  
  </el-col>
</el-row>
</div>
<el-backtop></el-backtop>

</div>
</template>

<script>

import nav from './nav'
import Crearia from 'crearia'

const App = {
    components:{
        nav_item : nav,
    },
    data:function(){
        return{
        	visitors: '??',
        }
    },
    created: function(){
    	var that = this;
    	let data = {
    		url: 'http://hugebuddhism.online/service/commit.php',
    		type: 'get',
    		data: {
    			action: 'visit',
    			round: Math.floor(100000*Math.random())
    		}

    	}
    	Crearia.send(data,function(res){

    		that.visitors = JSON.parse(res.text).answer;
    	});
    }

   
}
export default App
</script>

<style scoped>
.bot {
	padding-left: 50px;
    font-family: KaiTi;
    font-size: 25px;
}

.bot_a {
	padding-left: 50px;
    font-family: KaiTi;
    font-size: 18px;
}
@media screen and (max-width: 768px ) {
	.bot {
	padding-left: 50px;
    font-family: KaiTi;
    font-size: 15px;
}

.bot_a {
	padding-left: 10px;
    font-family: KaiTi;
    font-size: 15px;
}

}
</style>