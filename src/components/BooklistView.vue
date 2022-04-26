<template>
  <div id="Booklist">
    <div class="navigationREM">
      <p style="color: #c10d0c">◉</p>
      <p>榜单</p>
    </div>
    <div class="Listdetails">
      <div class="details" v-for="(v, i) in Booklistarr" :key="i">
        <div class="bang">
          <div style="width: 100px; margin: 20px 5px 20px 20px">
            <img v-lazy="v.coverImgUrl" alt="" />
          </div>
          <div style="margin: 20px 10px">
            <p>{{ v.name }}</p>
            <p>待定图像</p>
          </div>
        </div>
        <div>
          <ul class="Textp">
            <li v-for="(m, j) in listArr[i][0]" :key="j">
              {{ j + 1 }}
              {{ m.name }}
            </li>
            <li>查看更多</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Booklistlist, ListdetailsGet } from "@/http/request";
export default {
  data() {
    return {
      Booklistarr: [],
      listArr: [],
      arr1: [],
      arr2: [],
      arr3: [],
    };
  },
  created() {
    setTimeout(() => {
      Booklistlist("/toplist").then((res) => {
        this.Booklistarr = res.data.list.slice(0, 3);
        var c = 0;
        let tim = setInterval(() => {
          if (c == 20) {
            clearInterval(tim);
          }
          //只要请求的够多，就没有出不来的数据  ☁☁☁☁☁
          this.ListdetArr(this.Booklistarr, 0, this.arr1);
          this.ListdetArr(this.Booklistarr, 1, this.arr2);
          this.ListdetArr(this.Booklistarr, 2, this.arr3);
          c++;
        }, 100);
        this.listArr.push(this.arr1, this.arr2, this.arr3);
      });
    }, 100);
  },
  methods: {
    ListdetArr(bk, i, ar) {
      ListdetailsGet("/playlist/detail", {
        id: bk[i].id,
        limit: 10,
      })
        .then((res) => {
          ar.push(res.data.playlist.tracks.slice(0, 10));
        })
        .catch((err) => {
          console.log(err, "请求超时...无线重新加载中");
        });
    },
  },
};
</script>

<style scoped>
.navigationREM {
  display: flex;
  border-bottom: 3px solid #c10d0c;
  margin: 15px;
  padding: 5px;
}
.navigationREM p {
  font-size: 20px;
  margin-right: 10px;
}
.Listdetails {
  width: 700px;
  background-color: #f4f4f4;
  margin: 10px auto;
  display: flex;
}
.details {
  width: 230px;
  border: 1px solid #c3c3c3;
}
.bang img {
  width: 100%;
}
.bang {
  display: flex;
  background-color: #ffffff;
}
.Textp {
  width: 100%;
  overflow: hidden;
}

.Textp li {
  width: 228px !important;
  height: 30px;
  line-height: 30px;
  background-color: white;
  text-indent: 30px;
  overflow: hidden;
}
.Textp li:nth-child(odd) {
  background-color: #f4f4f4;
}
</style>
