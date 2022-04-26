<template>
  <div>
    <!-- 导航栏 -->
    <header id="top">
      <nav id="navigation">
        <h1 id="logo">
          <a href="/#">网易云音乐</a>
        </h1>
        <ul class="navigation">
          <li
            class="navigationlabel"
            @click="Changebackgroundcolor(i)"
            @mouseout="move(i)"
            @mouseover="shiftout(i)"
            v-for="(v, i) in navigationarr"
            :key="i"
          >
            {{ v }}

            <p v-show="hn" class="triangle"></p>
          </li>
        </ul>
        <div class="inputbox">
          <el-input
            id="input"
            prefix-icon="el-icon-search"
            v-model="input"
            size="small"
            placeholder="音乐/视频/电台/用户"
            @focus="focus()"
            @blur="blur()"
          ></el-input>
        </div>
        <el-row>
          <el-button size="small" round id="thecreatorcenter"
            >创作者中心</el-button
          >
        </el-row>
        <el-dropdown>
          <span class="el-dropdown-link" id="login" @click="login(loginText)">
            {{ loginText }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>待定</el-dropdown-item>
            <el-dropdown-item>待定</el-dropdown-item>
            <el-dropdown-item>待定</el-dropdown-item>
            <el-dropdown-item disabled>待定</el-dropdown-item>
            <el-dropdown-item divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </nav>
    </header>
    <!-- 小导航栏 -->
    <div class="secondaryrouting">
      <div style="height: 4px"></div>
      <ul class="secondaryroutingUl">
        <li
          class="secondaryroutinglole"
          v-for="(v, i) in secondaryrouting"
          :key="i"
          @mouseout="moveHn(i)"
          @mouseover="shiftoutHn(i)"
          @click="ChangebackgroundcolorHn(i)"
        >
          {{ v }}
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <!-- 登录页 -->
    <el-dialog
      title="登录"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <div>
        <img
          src="../assets/sweepthelogincode.png"
          width="150px"
          style="margin-left: 60px"
          alt=""
        />
      </div>
      <div class="Sweepcodelanding">
        <h3>扫码登陆</h3>
        <img v-lazy="qr" alt="" />
        <div>使用 <a href="#">网易云App扫码</a> 登录</div>
      </div>
      <span
        @click="(dialogVisibleDe = true), (dialogVisible = false)"
        class="otherlogin"
        >其他登录方式</span
      >
    </el-dialog>
    <!-- login2 -->
    <el-dialog
      title="登录"
      :visible.sync="dialogVisibleDe"
      :before-close="handleClose"
    >
      <div class="Sweepcodelanding">
        <div>
          电话号码：<input type="text" v-model="phone" /> 密码：<input
            type="password"
            v-model="pwd"
          />
          <button @click="lo()">登录</button>
        </div>
        <div></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
var arr = document.getElementsByClassName("navigationlabel");
var triangle = document.getElementsByClassName("triangle");
var secondaryroutinglole = document.getElementsByClassName(
  "secondaryroutinglole"
);

import axios from "axios";
import { Ggrwna, Ggrwap } from "@/http/request";
export default {
  data() {
    return {
      navigationarr: [],
      secondaryrouting: [],
      secondaryroutingsuspend: [],
      immovables: 0,
      immovablesHn: 0,
      input: "",
      dialogVisible: false,
      dialogVisibleDe: false,
      qr: "",
      hn: false,
      phone: "",
      pwd: "",
      loginText: "",
    };
  },

  methods: {
    //获取失去焦点
    focus() {
      document.getElementById("input").placeholder = "";
    },
    blur() {
      document.getElementById("input").placeholder = "音乐/视频/电台/用户";
    },
    //导航样式选择
    Changebackgroundcolor(s) {
      this.immovables = s;
      arr = Array.from(arr);
      triangle = Array.from(triangle);
      //控制背景
      arr.forEach((v) => {
        v.style.backgroundColor = "#242424";
        v.style.color = "#cccccc";
      });
      arr[s].style.backgroundColor = "#000000";
      arr[s].style.color = "#ffffff";
      //控制小箭头
      triangle.forEach((r) => {
        r.style.display = "none";
      });
      triangle[s].style.display = "block";
      if (s != 0) {
        this.secondaryrouting = null;
      } else {
        secondaryroutinglole = document.getElementsByClassName(
          "secondaryroutinglole"
        );
        this.secondaryrouting = this.secondaryroutingsuspend;
      }
    },

    //移入移出
    move(s) {
      arr = Array.from(arr);
      if (this.immovables != null) {
        if (s != this.immovables) {
          arr.forEach((v) => {
            v.style.backgroundColor = "#242424";
            v.style.color = "#cccccc";
          });
          arr[this.immovables].style.backgroundColor = "#000000";
          arr[this.immovables].style.color = "#ffffff";
        }
      } else {
        arr.forEach((v) => {
          v.style.backgroundColor = "#242424";
          v.style.color = "#cccccc";
        });
      }
    },
    shiftout(s) {
      arr = Array.from(arr);
      arr[s].style.backgroundColor = "#000000";
      arr[s].style.color = "#ffffff";
    },
    //小导航样式
    ChangebackgroundcolorHn(s) {
      this.immovablesHn = s;
      secondaryroutinglole = Array.from(secondaryroutinglole);
      //控制背景
      secondaryroutinglole.forEach((v) => {
        v.style.backgroundColor = "#c20c0c";
      });
      secondaryroutinglole[s].style.backgroundColor = "#9b0909";
      if (s == 0) {
        this.$router.push("/IndexView");
      } else if (s == 1) {
        this.$router.push("/RankingView");
      } else if (s == 3) {
        this.$router.push("/AnchorView");
      }
    },
    moveHn(s) {
      secondaryroutinglole = Array.from(secondaryroutinglole);
      if (this.immovablesHn != null) {
        if (s != this.immovablesHn) {
          secondaryroutinglole.forEach((v) => {
            v.style.backgroundColor = "#c20c0c";
          });
          secondaryroutinglole[this.immovablesHn].style.backgroundColor =
            "#9b0909";
        }
      } else {
        secondaryroutinglole.forEach((v) => {
          v.style.backgroundColor = "#9b0909";
        });
      }
    },
    shiftoutHn(s) {
      secondaryroutinglole = Array.from(secondaryroutinglole);
      secondaryroutinglole[s].style.backgroundColor = "#9b0909";
    },
    //登录页 生成二维码
    handleClose(done) {
      done();
    },
    login(s) {
      if (s == "用户") {
        console.log(1);
      } else {
        this.dialogVisible = true;
        //二维码Key生成码
        Ggrwna("/login/qr/key").then((res) => {
          var key = res.data.data.unikey;
          //生成二维码
          Ggrwap("/login/qr/create", {
            key: key,
            qrimg: key,
          }).then((res) => {
            this.qr = res.data.data.qrimg;
          });
        });
      }
    },
    lo() {
      Ggrwap("/login/cellphone", {
        phone: this.phone,
        password: this.pwd,
      }).then((res) => {
        let { nickname } = res.data.profile;
        localStorage.username = nickname;
        if (res.data.code == 200) {
          this.$message({
            message: "登录成功! 欢迎回来 " + nickname,
            type: "success",
          });
          localStorage.cookie = res.data.cookie;
          let login = document.getElementById("login");
          this.loginText = "用户";
          login.innerText = localStorage.username;
        }
        this.dialogVisibleDe = false;
      });
    },
  },
  created() {
    //网页导航数据

    localStorage.username = "登录";
    this.loginText = localStorage.username;
    axios.get("db.json").then((res) => {
      this.navigationarr = res.data.navigation;
      this.secondaryrouting = res.data.secondaryrouting;
      this.secondaryroutingsuspend = this.secondaryrouting;
      setTimeout(() => {
        arr = Array.from(arr);
        triangle = Array.from(triangle);
        secondaryroutinglole = Array.from(secondaryroutinglole);
        arr[0].style.backgroundColor = "#000000";
        arr[0].style.color = "#ffffff";
        triangle[0].style.display = "block";
        secondaryroutinglole[0].style.backgroundColor = "#9b0909";
        this.$router.push("/IndexView");
      }, 100);
    });
    //  随机获取颜色
    // var url = "http://colormind.io/api/";
    // var data = {
    //   model: "default",
    //   input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"],
    // };

    // var http = new XMLHttpRequest();

    // http.onreadystatechange = function () {
    //   if (http.readyState == 4 && http.status == 200) {
    //     var palette = JSON.parse(http.responseText).result;
    //     console.log(palette);
    //   }
    // };
    // http.open("POST", url, true);
    // http.send(JSON.stringify(data));
  },
};
</script>

<style>
#navigation {
  display: flex;
  line-height: 70px;
  height: 70px;
  justify-content: center;
  background-color: #242424;
  overflow: hidden;
}
#logo {
  width: 167px;
  height: 70px;
  padding-right: 20px;
  text-align: right;
  background: url(../assets/logo.png) no-repeat 0px center;
  background-size: 40px;
}

#navigation a {
  color: #ffffff;
}
.navigation {
  height: 70px;
  display: flex;
}
.navigationlabel {
  height: 70px;
  padding: 0px 18px;
  font-size: 14px;
  color: #cccccc;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

#input {
  width: 150px;
  border-radius: 15px !important;
}
.inputbox {
  margin-left: 45px;
}
.el-input__inner {
  color: #3c3c3c !important;
}
#thecreatorcenter {
  color: #cccccc;
  margin: 0px 10px;
  border: 1px solid #4c4c4c;
  background-color: #242424;
}
#login {
  color: #787878;
}
.el-dialog {
  width: 450px;
  margin-top: 30vh !important;
}
.el-dialog__header {
  padding: 10px 20px;
  background-color: #2d2d2d;
}
.el-dialog__title {
  font-size: 14px;
  color: #ffffff;
}

.el-dialog__body {
  display: flex !important;
}

.Sweepcodelanding {
  width: 200px;
  margin: 0px 20px;
}
.Sweepcodelanding h3 {
  color: #54495a;
  text-align: center;
}
.Sweepcodelanding img {
  width: 180px;
  margin: 0px 10px;
}
.Sweepcodelanding div {
  width: 180px;
  margin: auto;
  text-align: center;
}
.Sweepcodelanding a {
  color: #0c73c2;
}
.secondaryrouting {
  background-color: #c20c0c;
}
.secondaryroutingUl {
  display: flex;
  width: 625px;
  margin: 0px auto;
}
.secondaryroutinglole {
  color: white;
  font-size: 14px;
  margin: 5px 15px;
  padding: 3px 10px;
  border-radius: 10px;
}
.triangle {
  border: 6px solid transparent;
  border-bottom: 6px solid #c20c0c;
  position: absolute;
  bottom: 0px;
  left: 47%;
}
.otherlogin {
  position: absolute;
  bottom: 10px;
  left: 200px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
