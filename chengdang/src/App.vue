<template>
  <div id="app">
    <div class="header">上门收集检查软件</div>
    <footerBar v-show="footer_show" :footIndex="footIndexn"  ></footerBar>
    <router-view v-on:footer="footer" v-on:checkHomeIndex="checkHomeIndex" />
  </div>
</template>
 
<script>
import footerBar from "@/components/footerBar";
export default {
  components: {
    footerBar
  },
  data() {
    return {
      footer_show: false,
      footIndexn: "" //记录当前底部选中项
    };
  },
  methods: {
    //是否显示底部
    footer(bool) {
    //  console.log(bool,'是否显示')
      this.footer_show = bool;
    },
    // 判断当前在哪一个页面
    checkHomeIndex(index) {
    //  console.log(index,'当前索引')
      this.footIndexn = index;
      
    },
 
  }
};
</script>
<style lang="scss">
    .header{
      padding: 0.2rem;
      text-align: center;
      line-height: 0.6rem;
      font-weight: bold;
      font-size: 0.32rem;
      background-color: rgb(255, 255, 255);
      color: rgb(0, 0, 0);
    }
 
</style>