<template>
<div class="page">
	<!-- <br/>
	<center>
	<img src="img/yuanqi.jpg" class="picture"/>
	</center> -->
    <h1 class="item">巨乘 · 藏经阁</h1>
    <li class="item_text" v-for="(item,index) in docs" :key="index">
        <a href="javascript:;" v-text="item.title" @click="getBook(item.link)"></a>
    </li>
    
    <center>
        <div v-show="show_book">
        <el-divider></el-divider>
        <el-input
        
        type="textarea"
        :rows="20"
        placeholder="巨乘经典卷帙浩繁，该经典仍在查找中……"
        v-model="book_content"
        class="textarea_io"
        readonly
        >
        </el-input>
    </div>
    </center>
   


</div>
</template>
<script>
import Crearia from 'crearia'
import Rexine from 'rexine'
const page = {
    data:function(){
        return{
            docs:[],
            book_content:'巨乘经典卷帙浩繁，该经典仍在查找中……',
            show_book: false
        }
    },
    methods:{
        rexine_init:function(){
            var my = Rexine.new();
            my.ifReport = false
            my.indexStringArray=['title','link'];
            my.get('docs/classic.csv');
            my.then = () => {
                this.docs = my.JSON;
            }

        },
        getBook:function(link){
            var that = this;
            let data = {
                url: 'http://hugebuddhism.online/service/commit.php',
                type: 'get',
                    data: {
                        action: 'read',
                        book: link,
                        round: Math.floor(100000*Math.random())
                    }

            };
            Crearia.send(data,function(t){
                that.show_book = true;
                if(JSON.parse(t.text).answer){
                    that.book_content = JSON.parse(t.text).answer
                } else {
                    that.book_content = '巨乘经典卷帙浩繁，该经典仍在查找中……'
                }
                
            });
        }
    },
    created: function(){
        this.rexine_init();
    }
   
}
export default page
</script>

<style scoped>
red {
	color: red;
}
.page {
	padding-left: 60px;
	padding-right: 10px;
}
.picture {
	width: 70%;
}
.item {
    padding-left: 10px;
    font-family: KaiTi;
    font-size: 55px;
    color: #FECC0B;
}
.item_text {
	padding-left: 10px;
    font-family: KaiTi;
    font-size: 25px;
}

.item_text_more {
	padding-left: 10px;
    font-family: KaiTi;
    font-size: 50px;
    text-align: center;
}
.textarea_io {
    width: 80%;
}
@media screen and (max-width: 768px ) {
    .item {
        font-size: 30px;
    }

    .item_text {
	padding-left: 10px;
    font-family: KaiTi;
    font-size: 20px;

	}
	.item_text_more {
	padding-left: 10px;
    font-family: KaiTi;
    font-size: 35px;
    text-align: center;
	}

	.page {
		padding-left: 10px;
	}

    .textarea_io {
    width: 95%;
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