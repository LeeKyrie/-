<template>
<div>
    <go-back-com></go-back-com>
  <div class="divStyle">
    <div>
        <h3>{{ this.content1 }}</h3>
        <p>{{ this.content10 }}</p>
    </div>
    <br>
    <div>
        <h3>{{ this.content2 }}</h3>
        <p>{{ this.content20 }}</p>
    </div>
    <br>
    <div>
        <h3>{{ this.content3 }}</h3>
        <p>{{ this.content30 }}</p>
    </div>
    <br>
    <div>
        <h3>{{ this.content4 }}</h3>
        <p>{{ this.content40 }}</p>
    </div>

    <br>
    <br>
    <p><b>技术支持：BY @KAIlee</b></p>
  </div>
  <router-view></router-view>
</div>
  
</template>

<script>
import goBackCom from '../components/goBackCom.vue'
export default {
    data(){
        return{
             content1:'1、快件计费规则：',
             content10:'标准运费报价=物品计费重量（计费重量在质量计重和体积计重之间取最大值，'+
             +'陆运件体积计重为长*宽*高除以8000，航空件体积计重为长*宽*高除以6000）*时效产品基础运费+包材费用（可选）+保价运费（可选）；'
             +'下单界面会展示预估报价，实际以快递员上门为准。',
             content2:'2、不支持揽收的物品：',
             content20:'除国家《禁止寄递物品管理规定》中禁运品不能揽收外，以下物品不支持揽收：'+
             '（1）玻璃类（如灯管、灯泡等玻璃制品）、陶瓷类、石膏类，以及不易妥善包装的物品；如：玉雕、木雕艺术品等；'+
             '（2）工艺品、古董、瓷器、玉器、字画、珠宝、有价证券等难以客观确认价值的货物；'+
             '（3）医药类物品：无完整销售包装，药品有温度等特殊要求等；医学检测类物品不作揽收；'+
             '（4）活体动物；'+
             '（5）现金及货币。',
             content3:'3、可支付类型：',
             content30:'目前我们的服务付款方式支持寄付现结和到付，支付类型可选择微信支付、支付宝支付或银行卡进行付款。',
             content4:'4、本公司禁止配送说明：',
             content40:'物品具体是否能够寄递，可拿到公司服务站询问，服务站违禁品是禁止寄递的哦~ 如：'+
             '枪支、弹药、管制刀具、爆破器材、烟花爆竹、易燃气体、有毒气体、易爆、助燃气体、易燃液体、'+
             '易燃固体、自燃物质、遇水易燃物质、氧化剂、过氧化物、毒性物质、生化制品、传染性、感染性物质、'+
             '放射性物质、腐蚀性物质、毒品及吸毒工具、非正当用途麻醉药品和精神药品、非正当用途的易制毒化学品，详细可见官网的禁寄物品。',
        }
    },
    components:{
        goBackCom
    }

}
</script>

<style scoped>
.divStyle{
    background:rgb(247, 244, 238);
    margin:5px;
    /* overflow:visible; */
    height:120vh;
    margin-top: 50px;
}
p{
    text-align: left;
}

</style>