//公用的一些资料数据
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginFlag:false, //是否有已经登录，true表已经登录
    power:1, //1表示普通成员，0表示管理人员
    profile:'',//头像
    loginName:'请您先登录！',
    powerFlag:false ,//管理人员标识符，管理人员的权限设置为true
    queryFlag:false,// 登录后发送的axios请求完成后，设为true
    addFlag: true,// 用于事故记录添加 ‘运单号’

    addrName:'',//登记的地址名字,登陆后初始化（默认地址）
    telephone:'',//地址电话
    province:'',
    city:'',
    county:'',
    addrDetail:'',
    addrDefault:'',
    text1:'登 录',
    id:1,//用于添加地址时的主键索引
    index:0,//用于地址修改的下标

    sender:[],//保存数据库表
    media:[],
    driver:[],
    receiver:[],
    goods:[],
    tool:[],
    datadmt:[],
    datasrg:[],
    lostpack:[],
    logaccident:[],
    selectIndex:0,//选择的包裹详细信息的下标
    //-----------用于账单信息
    billName:[],// 不同的姓名
    cityName:[],// 不同的城市名

//---------“最”服务
    mostCus:[],
    mostCity:[],

//两个num加起来就是数据库的表长length
    numPost:0, //寄件的数量
    numReceive:0,//收件的数量

    listPost: [],//寄件的数组
    // postLength:'',//寄件的数组长度
    listReceive:[],//收件的数组
    
    totalMoney:0,
    useID:0, //记录插入了几条数据,方便datasrg,datadmt取数据
    //用于地址修改时的初始值
    addressInfo:{
      id:'',
      name:'',
      tel:'',
      province:'',
      city:'',
      county:'',
      addressDetail:'',
      isDefault:''
    },
   //用于地一级目录
    list: [
      {
        id: '1',
        name: '',
        tel: '',
        address: '',
        isDefault: '',
      },
    ]
  },
  //定义方法,用于登录成功后的数据地址初始化
  mutations: {
    queryAddr(state,index){
      axios.get('http://localhost:3000/api/query/address').then((response) => {
      var list=response.data;//保存数据
      state.city=list[index].city;
      state.county=list[index].county;
      state.telephone=list[index].telephone;
      state.province=list[index].province;
      state.addrName=list[index].name;
      state.addrDefault=list[index].isDefault;
      state.addrDetail=list[index].detail;

      var province = state.province;
      var city = state.city;
      var county = state.county;
      var detail = state.addrDetail;
      if(province == city)
      {
         province = '';
      }
      state.list[0].address=province+' '+city+' '+county+' '+detail;
      state.list[0].name= state.addrName;
      state.list[0].tel=state.telephone;
      state.list[0].isDefault=state.addrDefault;
      // console.log(state.list);
      // console.log(state.county);
      // console.log(state.telephone);
      // console.log(state.province);
      // console.log(state.addrName);
      // console.log(state.addrDefault);
      // console.log(state.addrDetail);
    })
   },

   queryMedia(state){
    axios.get('http://localhost:3000/api/query/media').then((response) => {
      //保存数据
      state.media=response.data;
      // console.log(state.media);
      // console.log('queryMedia');
    })

   },

   querySender(state){
    axios.get('http://localhost:3000/api/query/sender').then((response) => {
       //保存数据
       state.sender=response.data;
      //  console.log('querySender');
      
    })

   },

   querySenderdis(state){
    axios.get('http://localhost:3000/api/query/senderDis').then((response) => {
       //保存数据
       state.billName = response.data;
      //  console.log(state.billName);
      
    })
    axios.get('http://localhost:3000/api/query/senderCity').then((response) => {
      //保存数据
      state.cityName = response.data;
     //  console.log(state.billName);
     
   })

   },

   queryReceiver(state){
    axios.get('http://localhost:3000/api/query/receiver').then((response) => {
       //保存数据
       state.receiver=response.data;
      //  console.log('++++++++++++++ queryReceiver');
      
    })

   },

   queryDriver(state){
    axios.get('http://localhost:3000/api/query/driver').then((response) => {
     //保存数据
     state.driver=response.data;
    //  console.log('++++++++++++++queryDriver');      
    })

   },

   queryGoods(state){
    axios.get('http://localhost:3000/api/query/goods').then((response) => {
     //保存数据
     state.goods=response.data;
    //  console.log('++++++++++++++queryDriver');
    //  state.queryFlag = true;
      
    })

   },

   queryTool(state){
    axios.get('http://localhost:3000/api/query/tool').then((response) => {
     //保存数据
     state.tool=response.data;
    //  console.log('++++++++++++++queryDriver');
    //  console.log(state.tool);
     state.queryFlag = true;
      
    })

   },

   queryDatasrg(state){
    axios.get('http://localhost:3000/api/query/datasrg').then((response) => {
     //保存数据
     state.datasrg=response.data;
    //  console.log('++++++++++++++queryDriver');
    //  console.log(state.datasrg);
      
    })

   },

   queryDatadmt(state){
    axios.get('http://localhost:3000/api/query/datadmt').then((response) => {
     //保存数据
     state.datadmt=response.data;
    //  console.log('++++++++++++++queryDriver');
    //  console.log(state.datadmt);
      
    })

   },

   queryLogaccident(state){
    axios.get('http://localhost:3000/api/query/logaccident').then((response) => {
     //保存数据
     state.logaccident=response.data;
    //  console.log('++++++++++++++queryDriver');
    //  console.log(state.datadmt);
      
    })

   },

   queryLostpack(state){
    axios.get('http://localhost:3000/api/query/lostpack').then((response) => {
     //保存数据
     state.lostpack = response.data;
     var str='运单号：'
     for(let i=0;i<state.lostpack.length;i++) //格式化
     {
       state.lostpack[i].expressID = str + state.lostpack[i].expressID
     }
    //  console.log('++++++++++++++queryDriver');
    //  console.log(state.datadmt);
      
    })

   },


   selectPackMsg(state){
     var str='admin';
     var tag;
     for(let i=0;i<state.media.length;i++)
     {
        if(state.media[i].managerName == str)
        {
           tag = parseInt(state.media[i].postID);
           tag--;
         
           state.listPost.push({
               id:i,
               expressID:state.media[i].expressID,
               endTime:state.media[i].endTime,
               state:state.media[i].state,
               receiveName:state.receiver[tag].name,
               receiveCity:state.receiver[tag].city,
               postName:state.sender[tag].name,
               postCity:state.sender[tag].city,
               driverName:state.driver[tag].name
            });
          
        }
        else{
           tag = parseInt(state.media[i].receiveID);
          
          //  console.log('-----1----------');
          //  console.log(tag);
           tag--;
           state.listReceive.push({
            id:i,
            expressID:state.media[i].expressID,
            endTime:state.media[i].endTime,
            state:state.media[i].state,
            receiveName:state.receiver[tag].name,
            receiveCity:state.receiver[tag].city,
            postName:state.sender[tag].name,
            postCity:state.sender[tag].city,
            driverName:state.driver[tag].name
         });

        }
     }
     state.numPost = state.listPost.length
     state.numReceive = state.listReceive.length
    //  console.log(state.listPost);
    //  console.log(state.listReceive);
   },

// 运费算法
//运费 = 两个城市的距离（公里）/100 + 基本运费（10元） + 重量（取重量的值即可，单位kg）+ 
//       体积（体积<1000立方厘米取5元，体积小于1立方米取10元,大于1立方米取30元）
// var weight ; // 包裹重量，kg
calcMoney:(state,[postLocation,receiveLocation,weight,vlength, vwidth, vheight]) => {
     var direction0;//位于中心点的方向
     var direction1;
     var distance0;
     var distance1;//城市距离中心点的距离
     var disMoney;
     var basic = 10 ;//基本运费
     var volunm;
     var vmoney;//体积费用
     var volunmList = [1000,1000000];//体积分割点
     var sum;
    //  console.log(postLocation+' '+receiveLocation+' '+weight+' '+vlength+' '+vwidth+' '+vheight);
     axios.get('http://localhost:3000/api/query/area').then((response) => {
      for(let i=0;i<response.data.length;i++)
      {
          if(postLocation == response.data[i].province)//获取方向和距离
           {
            direction0 = response.data[i].locate;
            distance0 = response.data[i].distance;
           }
           if(receiveLocation == response.data[i].province)
           {
           
             direction1 = response.data[i].locate;
             distance1 = response.data[i].distance;
           }
      }
      volunm = vlength* vwidth* vheight;
      if(volunm<= volunmList[0])
           vmoney = 5;
      else if(volunm > volunmList[0] && volunm <= volunmList[1])
           vmoney = 10;
      else vmoney = 30;

      if( direction0 == direction1) //在同一地区或同向
     {
        disMoney= Math.abs(Number(distance0) - Number(distance1))/100;// 转换数据类型
       //运费 = 两个城市的距离（公里）/100 + 基本运费（10元） + 重量（取重量的值即可）+ 
       //       体积（体积<1000立方厘米取5元，体积小于1立方米取10元,大于1立方米取30元）
       sum = disMoney + basic + weight + vmoney
     }
     else{
       if(direction0 == 'M' || direction1 == 'M')
       {
          disMoney= Math.abs(Number(distance0) - Number(distance1))/100;
          sum = disMoney + basic + weight + vmoney
       }
       else{
          disMoney= (Number(distance0) + Number(distance1))/100;
          sum = disMoney + basic + weight + vmoney
       }
     }
     state.totalMoney = sum
    })
   },

   queryMostCus(state){
     //-----------------
     //select top 1 userName,count(*) from UserLog group by userName order by count(*) desc
     var sender = state.sender
        for(let j=0;j<state.billName.length;j++)
        {
          var name1 = state.billName[j].name
          var tel
          var city
          var money = 0
          var num = 0
          for(let i=0;i<sender.length;i++)
          {
            if(name1 == sender[i].name)
            {
                 tel =sender[i].telephone
                 city = sender[i].city
                 money+= sender[i].money
                 num++
             }
          }
          state.mostCus.push({
            name:name1,
            phone:tel,
            city:city,
            money:money,
            num:num
        })
      }
      // console.log(state.mostCus);

    },
     //-----------
    queryMostCity(state){
      //-----------------
      //select top 1 userName,count(*) from UserLog group by userName order by count(*) desc
      var sender1 = state.sender
         for(let j=0;j<state.cityName.length;j++)
         {
           var name2 = state.cityName[j].city
           var number = 0
           for(let i=0;i<sender1.length;i++)
           {
             if(name2 == sender1[i].city)
             {
                 number++
             }
           }
           state.mostCity.push({
             name:name2,
             number:number
           })
         }

        //  console.log(state.mostCity);
 
     },
      
  

},
  
  //异步的方法
  actions: {
  },
  modules: {
  }
})
