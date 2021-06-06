<template>
  <div class="container">
    <div class="img-box"><img src="../assets/images/1.png" alt=""></div>
    <div class="login-box">
        <i class="useraccount-icon"></i>
        <input type="text" v-model="account" id="useraccount" required placeholder="账号">
        <i class="userpwd-icon"></i>
        <input type="password" v-model="userpwd" id="userpwd" required placeholder="密码">
        <div class="forgotpwd" @click="forgetpassword">忘记密码</div>
        <button class="login-btn" @click="login">登录</button>
    </div>
  </div>
</template>

<style scoped>
    *{
      font-size: 0.3rem;
    }

    img{
      width: 100%;
    }
    .login-box{
      width: 100%;
      height: 5rem;
      position: relative;

    }
    #useraccount,#userpwd{
      width: 60%;
      border: 1px solid rgb(80, 185, 238);
      background-color: rgb(240,247,255);
      height: 0.9rem;
      margin: 0.12rem auto;
      border-radius: 0.5rem;
      position: relative;
      left: 15%;
      padding-left: 0.95rem;
    }
    .forgotpwd{
      width: 70%;
      position: relative;
      left: 15%;
      text-align: right;
      margin: 0.12rem 0;
      color: rgb(48,113,255);
    }
    .login-btn{
      width: 70%;
      background-color: rgb(240,247,255);
      height: 0.9rem;
      margin: 0.12rem auto;
      border: none;
      border-radius: 0.5rem;
      position: relative;
      left: 15%;
      background: linear-gradient(to right, rgb(85,186,253),rgb(48,113,255));
      color: #fff;
    }
    .useraccount-icon{
      position: absolute;
      left: 1.35rem;
      top: 0.25rem;
      z-index: 1;
      background-image: url('../assets/images/account.png'); 
      background-size: 100%;
      background-repeat: no-repeat; 
      width: 0.6rem;
      height: 0.6rem;
    }
    .userpwd-icon{
      position: absolute;
      left: 1.35rem;
      top: 1.45rem;
      z-index: 1;
      background-image: url('../assets/images/pwd.png'); 
      background-size: 100%;
      background-repeat: no-repeat; 
      width: 0.6rem;
      height: 0.6rem;
    }

</style>
<script>
import {mapMutations} from "vuex";
export default {
  data(){
    return {
      loginForm:{
        account:'',
        userpwd:''
      }
    }
  },
  methods:{
    ...mapMutations(['changeLogin']),
      login(){
        let _this = this;
        if (this.loginForm.account === '' || this.loginForm.userpwd === '') {
          alert('账号或密码不能为空');
        } else {
          this.axios({
            method: 'post',
            url: '/login',
            data: _this.loginForm
          }).then(res => {
            console.log(res.data);
            _this.userToken = 'Bearer ' + res.data.data.body.token;
            // 将用户token保存到vuex中
            _this.changeLogin({ Authorization: _this.userToken });
            _this.$router.push('/gatherinfo');
            alert('登陆成功');
          }).catch(error => {
            alert('账号或密码错误');
            console.log(error);
          });
        }
      },
  
        // this.$refs[name].validate(valid => {
        //   let val = {
        //     account:this.formInline.account,
        //     userpwd:this.formInline.userpwd
        //   };

        // })        
        // //假设登录成功，则跳转到gatherinfo组件
        // this.$router.push({path:'/gatherinfo',query:{id:''}});
      
      forgetpassword(){
        //进行跳转忘记密码页面
        // this.$router.push({path:'/repwd',query:{id:''}});
        console.log("请修改密码");
      },
    }
    
  }
</script>