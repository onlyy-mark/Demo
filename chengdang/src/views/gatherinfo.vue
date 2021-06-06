<template>
<div>
    <div class="gatherinfo-box">
        <div class="header">上门收集</div>
        <div class="addressinfo">
            <div class="center-box">
                <p class="title">地点信息</p>
                <div class="option">
                    <label for="area">区<i class="select-icon"></i></label>
                    <select name="" class="area" id="area" v-model="areaName">
                        <option :value="item" v-for="(item,index) in provinces" :key="index">{{item.area}}</option>
                    </select>
                </div>

                <div class="option">
                    <label for="road">街道<i class="select-icon"></i></label>
                    <select class="road" id="road" v-model="roadNmae">
                        <option :value="item" v-for="(item,index) in areaName.road" :key="index">{{item}}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="roadinfo">
            <div class="center-box">
                <p class="title">道路信息</p>
                <label for="roadSection">路段</label>
                <input type="text"  name="" id="roadSection" placeholder="请填写路段">
                <div class="row-l">
                    <label for="start">起点</label>
                    <input type="text"  name="" id="start" placeholder="请输入起点">
                </div>
                <div class="row-r">
                    <label for="end">终点</label>
                    <input type="text"  name="" id="end" placeholder="请输入终点">
                </div>
            </div>
        </div>
        <div class="storeinfo">
            <div class="center-box">
                <p class="title">商铺信息</p>
                <label for="businessName">商家名称</label>
                <input type="text" name="" id="businessName" placeholder="请填写商铺名称">

                <label for="businessId">商家门牌号</label>
                <input type="text" name="" id="businessId" placeholder="请填写商铺门牌号">
                
                <label for="awareness">知晓率</label>
                <input type="radio" name="awareness" class="mr radio_type" id=""> 熟悉
                <input type="radio" name="awareness" class="ml mr radio_type" id=""> 不熟悉
                <input type="radio" name="awareness" class="ml mr radio_type" id=""> 完全不知

                <div >
                    <label for="">扣分项</label>
                    <table class="deduction">
                        <tr>
                            <td></td>
                            <td>不扣分</td>
                            <td>扣分</td>
                        </tr>
                        <tr>
                            <td>海报</td>
                            <td><input type="radio" name="poster" class="mr radio_type" id=""></td>
                            <td><input type="radio" name="poster" class="mr radio_type" id=""></td>
                        </tr>
                        <tr>
                            <td>是否分类</td>
                            <td><input type="radio" name="classification" class="mr radio_type" id=""></td>
                            <td><input type="radio" name="classification" class="mr radio_type" id=""></td>
                        </tr>
                        <tr>
                            <td>是否有标签</td>
                            <td><input type="radio" name="label" class="mr radio_type" id=""></td>
                            <td><input type="radio" name="label" class="mr radio_type" id=""></td>
                        </tr>
                        <tr>
                            <td>纯净度</td>
                            <td><input type="radio" name="purity" class="mr radio_type" id=""></td>
                            <td><input type="radio" name="purity" class="mr radio_type" id=""></td>
                        </tr>
                        <tr>
                            <td>周边环境</td>
                            <td><input type="radio" name="environment" class="mr radio_type" id=""></td>
                            <td><input type="radio" name="environment" class="mr radio_type" id=""></td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <div class="option">
                                    <label for="yt">选择业态<i class="yt-select-icon"></i></label>
                                    <select name="" class="area" id="area" v-model="areaName">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <button class="submit-btn">提   交</button>
    </div>

</div>
        
</template>

<script>

    export default {

        data(){
            return{
                areaName:[],
                roadNmae:[],
                provinces:[
                {
                    "area":"浦东新区",
                    "road":[
                        "浦东1号街道",
                        "浦东2号街道",
                        "浦东3号街道",
                    ]
                },
                {
                    "area":"静安区",
                    "road":[
                        "静安1号街道",
                        "静安2号街道",
                        "静安3号街道",
                    ]
                },
                {
                    "area":"奉贤区",
                    "road":[
                        "奉贤1号街道",
                        "奉贤2号街道",
                        "奉贤3号街道",
                    ]
                },
                ]
            }
        },
        created() {
            this.$emit("footer", true);
            this.$emit("checkHomeIndex",0);
        }

    }
</script>

<style lang="scss" scoped>
    *{
      font-size: 0.25rem;
    }
    .gatherinfo-box{
        width: 100%;
        background-color: rgb(239,239,239);
    }
    .header{
      padding: 0.2rem;
      text-align: center;
      line-height: 0.3rem;
      font-weight: bold;
      font-size: 0.32rem;
      background-color: rgb(50,119,255);
      color: #fff;
    }
    .title{
        font-size: 0.3rem;
    }
    .addressinfo,.roadinfo,.storeinfo{
        width: 100%;
        background-color: #fff;
        margin:0.2rem auto;
        line-height: 0.4rem;
    }
    label{
        display: block;
        margin: 0.1rem 0;
    }
    label::after{
        content: "*";
        color: red;
        margin-left: 0.1rem;
    }
    .center-box{
        width: 90%;
        margin: 0 auto;
        padding: 0.2rem;
    }
    .option{
        position: relative;
    }
    select,input[type="text"]{
        width: 100%;
        height: 0.65rem;
        border: 1px solid rgb(187, 182, 182);
        margin: 0.1rem auto;
        padding-left: 0.2rem;
    }
    select{
        appearance:none;        /*将默认的select选择框样式清除*/
        padding: 0.1rem;
    }
    .select-icon{
        width: 0.4rem;
        height: 0.4rem;
        background: url("../assets/images/下拉.png") no-repeat scroll right center transparent;
        background-size: 100%;
        position: absolute;
        right: 4%;
        top: 55%;
    }
    .yt-select-icon{
        width: 0.4rem;
        height: 0.4rem;
        background: url("../assets/images/下拉.png") no-repeat scroll right center transparent;
        background-size: 100%;
        position: absolute;
        right: 4%;
        top: 65%;
    }
    .row-l,.row-r{
        width: 3.2rem;
        display: inline-block;
    }
    .row-r{
        float: right;
    }
    .ml{
        margin-left: 0.8rem;
    }
    .mr{
        margin-right: 0.1rem;
    }
    .deduction{
        width: 100%;
        text-align: center;
    }
    tr{
        width: 100%;
        height: 0.8rem;
        border-bottom: 1px solid rgb(214, 208, 208);

    }
    td{
        width: 0.3rem;
        line-height: 0.8rem;
    }
    tr:first-child,tr:last-child{
        border: none;
    }
    td:first-child{
        text-align: left;
    }
    .submit-btn{
        width: 70%;
        background-color: rgb(240,247,255);
        height: 0.9rem;
        margin: 0.2rem auto;
        border: none;
        border-radius: 0.5rem;
        position: relative;
        left: 15%;
        background: linear-gradient(to right, rgb(85,186,253),rgb(48,113,255));
        color: #fff;
        margin-bottom: 1.5rem;
    }
    .radio_type{
        width: 0.3rem;
        height: 0.3rem;
        appearance: none;
        position: relative;
        margin-right: 0.25rem;
    }
    .radio_type:before{
        content: '';
        width: 0.4rem;
        height: 0.4rem;
        border: 1px solid #7d7d7d;
        display: inline-block;
        border-radius: 50%;
        vertical-align: middle;
    }
    .radio_type:checked:before{
        content: '';
        width: 0.4rem;
        height: 0.4rem;
        border: 1px solid #c59c5a;
        background:#2c7ddf;
        display: inline-block;
        border-radius: 50%;
        vertical-align: middle;
    }
    .radio_type:checked:after{
        content: '';
        width: 0.25rem;
        height:0.13rem;
        border: 0.05rem solid white;
        border-top: transparent;
        border-right: transparent;
        text-align: center;
        display: block;
        position: absolute;
        top: 0.1rem;
        left:0.07rem;
        transform: rotate(-45deg);
    }

</style>