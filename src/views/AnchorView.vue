<template>
  <div id="anchor">
      <div class="one">
          <div class="one-top">
              <div v-for="(v,i) in classifyList" :key="i" class="one-item">
                  <div class="bg">
                      <img :src="v.picMacUrl" class="img2">
                  </div>
                  <p class="one-dec">{{v.name}}</p>
              </div>
          </div>
      </div>
      <div class="two">
          <div class="left">
              <div class="right-top">
                  <h2>推荐节目</h2>
                  <span class="gengd">更多></span>
              </div>
              <ul>
                  <li v-for="(v,i) in leftList" :key="i">
                      <img :src="v.coverUrl"  class="img3">
                      <div>
                          <p class="left-dec-top">{{v.name}}</p>
                          <p class="left-dec-bot">{{v.radio.name}}</p>
                      </div>
                      <div class="left-last">{{v.radio.category}}</div>
                  </li>
              </ul>
          </div>
          <div class="right">
              <div class="right-top">
                  <h2>节目排行榜</h2>
                  <span class="gengd">更多></span>
              </div>
              <ul>
                  <li v-for="(v,i) in list" :key="i">
                      <div class="shuzi">
                          <p>{{v.rank}}</p>
                          <!-- <p>{{v.rank<10?'0'+v.rank:v.rank}}</p> -->
                          <span>{{v.lastRank-v.rank}}</span>
                          <!-- <img src="/images/balance.png">
                          <img src="/images/up.png">
                          <img src="/images/down.png"> -->
                      </div>
                      <img :src="v.program.coverUrl" class="img1">
                      <div>
                          <p class="right-dec-top">{{v.program.name}}</p>
                          <p class="right-dec-bot">{{v.program.radio.name}}</p>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
      <div>
          <div class="three">
              <h2>音乐推荐 · 电台</h2>
              <span class="gengd">更多></span>
          </div>
          <div class="three-sty">
              <div v-for="(v,i) in btoList.slice(0,4)" :key="i" style="display:flex;padding:20px 60px;width:440px;">
                  <img :src="v.picUrl" class="img4">
                  <div class="three-dec">
                      <h3 class="three-dec-top">{{v.category}}</h3>
                      <p>{{v.name}}</p>
                  </div>
              </div>
          </div>
      </div>
      <div>
          <div class="three">
              <h2>生活 · 电台</h2>
              <span class="gengd">更多></span>
          </div>
          <div class="three-sty">
              <div v-for="(v,i) in btoList.slice(4,8)" :key="i" style="display:flex;padding:20px 60px;width:440px;">
                  <img :src="v.picUrl" class="img4">
                  <div class="three-dec">
                      <h3 class="three-dec-top">{{v.category}}</h3>
                      <p>{{v.name}}</p>
                  </div>
              </div>
          </div>
      </div>
      <div>
          <div class="three">
              <h2>情感 · 电台</h2>
              <span class="gengd">更多></span>
          </div>
          <div class="three-sty">
              <div v-for="(v,i) in btoList.slice(8,12)" :key="i" style="display:flex;padding:20px 60px;width:440px;">
                  <img :src="v.picUrl" class="img4">
                  <div class="three-dec">
                      <h3 class="three-dec-top">{{v.category}}</h3>
                      <p>{{v.name}}</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { AnchorGet,ClassifyGet,recommendyGet,musicRecGet } from "@/http/request";
export default {
    data() {
        return {
            list:[],
            leftList:[],
            classifyList:[],
            btoList:[]
        }
    },
    created() {
        AnchorGet('/dj/program/toplist?limit=10')
        .then(res=>{
            // console.log(res.data);
            this.list=res.data.toplist
        })
        ClassifyGet('/dj/catelist')
        .then(res=>{
            // console.log(res.data);
            this.classifyList=res.data.categories
        })
        recommendyGet('/program/recommend')
        .then(res=>{
            // console.log(res.data);
            this.leftList=res.data.programs
        })
        musicRecGet('/dj/recommend')
        .then(res=>{
            console.log(res.data);
            this.btoList=res.data.djRadios
        })
    },
    
}
</script>

<style scoped>
.three-dec-top{
    padding: 33px 0;
}
.three-dec{
    padding-left: 30px;
}
.img4{
    width: 155px;
    height: 155px;
}
.three-sty{
    display: flex;
    flex-wrap: wrap;
}
.three{
    display: flex;
    justify-content: space-between;
    border-bottom:2px solid #C20C0C ;
    padding: 10px 0;
    margin: 0 40px;
}
#anchor{
    width: 1130px;
    margin: 0 auto;

}
.bg{
    width: 65px;
    height: 65px;
    overflow: hidden;
}
.img2{
    background: no-repeat 0px 0px;
}
.one-top{
    display: flex;
    flex-wrap: wrap;
    margin-left: 48px;
    padding: 30px 0;
}
.one-item{
    padding:  10px 25px;
}
.one-dec{
    font-size: 14px;
    color: rgb(95, 94, 94);
    text-align: center;
}
.two{
    
    display: flex;
}
.left,.right{
    width: 500px;
    margin-left:44px;
}
.right-top{
    display: flex;
    justify-content: space-between;
    border-bottom:2px solid #C20C0C ;
    padding: 10px 0;
}
h2{
    font-weight: normal;
}
.gengd{
    font-size: 14px;
    margin-top: 10px;
    color: rgb(95, 94, 94);
}
.img1{
    width: 60px;
    height: 60px;
    display: block;
}
.img3{
    width: 60px;
    height: 60px;
    display: block;
    padding: 0 15px 0 20px;
}
ul{
    list-style: none;
}
li{
    display: flex;
    padding: 15px 10px 0 0px;
}
.shuzi{
    padding: 10px 20px;
    text-align: center;
    color: #C20C0C;
}
.right-dec-top{
    font-size: 14px;
    margin-left: 20px;
    padding: 7px 0;
}
.right-dec-bot{
    font-size: 14px;
    margin-left: 20px;
    color: rgb(95, 94, 94);
}
.left-dec-bot{
    width: 300px;
    font-size: 14px;
    color: rgb(95, 94, 94);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.left-dec-top{
    font-size: 14px;
    padding: 7px 0;
    width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.left-last{
    height: 24px;
    padding: 0px 7px;
    border: 1px solid rgb(95, 94, 94);
    margin: 5px 0;
}
</style>