<template>
  <div>
    <div id="footer_divId">
      <div class="fott_class">
        <div
          v-for="(item,index) in footerImg"
          @click="clickFoo(index)"
          :key="index"
          :id="index"
        >
          <img :src="(index == timepartValue)?item.img2:item.img1" alt />
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: true,
      tab: "tab",
      timepartValue: "",
      footerImg: [
        {
          img1: require("../assets/images/home.png"),
          img2: require("../assets/images/home-active.png"),
          name: "上门收集"
        },
        {
          img1: require("../assets/images/my.png"),
          img2: require("../assets/images/my-active.png"),
          name: "我的信息"
        },
      ]
    };
  },
  props: ["footIndex"],
  methods: {
    clickFoo(index) {
      if (index == 0) {
        this.$router.push("/gatherinfo");
      } else if (index == 1) {
        this.$router.push("/userinfo");
      } 
    }
  },
  watch: {
    footIndex(data) {
    //  console.log(data,'监听当前索引')
      this.timepartValue = data;
    }
  },
};
</script>
<style lang="scss">
#footer_divId {
   position: fixed;
   bottom: 0;
   width: 100%;
   background-color: #fff;
   z-index: 10;
   border-top: 1px solid #e6e6e6;
  
  .fott_class {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 0.14rem;
    div{
        width: 33.3%;
        text-align: center;
        color: #959CA7;
        font-size: 0.2rem;
    }
    img {
      width: 0.5rem;
      height: 0.5rem;
      vertical-align: middle;
      margin-bottom: 0.05rem;
      margin-top: 0.14rem;
    }
  }
}
 
 
</style>