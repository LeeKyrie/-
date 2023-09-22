//api路由
//api.js —— 后端提供给前端的 API 接口
var models = require('./db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('./sqlMap');
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1', msg: '操作失败'
        });
    }
    else {
        res.json(
            ret
        );
    }
};
// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    // console.log(params);
    conn.query(sql, [params.username, params.password,params.power], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
// 增加地址接口
router.post('/addAddr', (req, res) => {
    var sql = $sql.address.add;
    var params = req.body;
    // console.log(params);
    conn.query(sql, [params.name, params.tel,params.province,params.city,
                     params.county,params.detail,params.isDefault,params.id], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
// 增加driver接口
router.post('/addDriver', (req, res) => {
    var sql = $sql.driver.add;
    var params = req.body;
    // console.log(params);
    //driverID,name,sex,age,state,telephone
    conn.query(sql, [params.driverID, params.name,params.sex,params.age,
                     params.state,params.telephone], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
// 增加goods接口
router.post('/addGoods', (req, res) => {
    var sql = $sql.goods.add;
    var params = req.body;
    // console.log(params);
    //goodsID,goodKind,packKind,weight,timeliness,isDanger,isForeign,remark
    conn.query(sql, [params.goodsID, params.goodKind,params.packKind,params.weight,
                     params.timeliness,params.isDanger,params.isForeign,params.remark], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
// 增加media接口
router.post('/addMedia', (req, res) => {
    var sql = $sql.media.add;
    var params = req.body;
    // console.log(params);
    //expressID,startTime,endTime,state,postID,receiveID,goodsID,managerName,driverID,toolID
    conn.query(sql, [params.expressID, params.startTime,params.endTime,params.state,
                     params.postID,params.receiveID,params.goodsID,params.managerName,params.driverID,params.toolID], 
                     function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
// 增加receiver接口
router.post('/addReceiver', (req, res) => {
    var sql = $sql.receiver.add;
    var params = req.body;
    // console.log(params);
    //receiveID,postCompany,name,telephone,province,city,county,detail
    conn.query(sql, [params.receiveID, params.postCompany,params.name,params.telephone,
                     params.province,params.city,params.county,params.detail], 
                     function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
// 增加sender接口
router.post('/addSender', (req, res) => {
    var sql = $sql.sender.add;
    var params = req.body;
    // console.log(params);
    //postID,postCompany,name,telephone,payWay,money,province,city,county,detail
    conn.query(sql, [params.postID, params.postCompany,params.name,params.telephone,
                     params.payWay,params.money,
                     params.province,params.city,params.county,params.detail], 
                     function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
// 增加tool接口
router.post('/addTool', (req, res) => {
    var sql = $sql.tool.add;
    var params = req.body;
    // console.log(params);
    //toolID,kind,origin,destination,positionNow
    conn.query(sql, [params.toolID, params.kind,params.origin,
                     params.destination,params.positionNow,], 
                     function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

// 修改地址接口
router.post('/editAddr', (req, res) => {
    var sql = $sql.address.update;
    var params = req.body;
    // console.log(params);
    conn.query(sql, [params.name, params.tel,params.province,params.city,
                     params.county,params.detail,params.isDefault,params.id], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

//下面均为查询语句，由于登录之后，几乎所有数据都要使用，故程序查询速度采取“开头难，之后体验好”的策略
router.get('/query/manager',(req,res)=>{
    conn.query('select * from manager',function(err,row){
        if(err){
             console.log(err)            
        }
        // console.log(typeof row)
        let data = JSON.stringify(row)
        res.end(data)
    })
});

router.get('/query/area',(req,res)=>{
    conn.query('select * from area',function(err,row){
        if(err){
             console.log(err)            
        }
        // console.log(typeof row)
        let data = JSON.stringify(row)
        res.end(data)
    })
});

router.get('/query/address',(req,res)=>{
    conn.query('select * from address',function(err,row){
        if(err){
             console.log(err)            
        }
        // console.log(typeof row)
        let data = JSON.stringify(row)
        res.end(data)
    })
});

router.get('/query/media',(req,res)=>{
    conn.query('select * from media',function(err,row){
        if(err){
             console.log(err)            
        }
        // console.log(typeof row)
        let data = JSON.stringify(row)
        res.end(data)
    })
});

router.get('/query/sender',(req,res)=>{
    conn.query('select * from sender',function(err,row){
        if(err){
             console.log(err)            
        }
        // console.log(typeof row)
        let data = JSON.stringify(row)
        res.end(data)
    })
});
//-------------------------------------------------------------------------
router.get('/query/senderDis',(req,res)=>{
    conn.query('select distinct name from sender',function(err,row){
        if(err){
             console.log(err)            
        }
        // console.log(typeof row)
        let data = JSON.stringify(row)
        res.end(data)
    })
});

router.get('/query/senderCity',(req,res)=>{
    conn.query('select distinct city from sender',function(err,row){
        if(err){
             console.log(err)            
        }
        // console.log(typeof row)
        let data = JSON.stringify(row)
        res.end(data)
    })
});
//----------------------------------------
router.get('/query/receiver',(req,res)=>{
    conn.query('select * from receiver',function(err,row){
        if(err){
             console.log(err)            
        }
        // console.log(typeof row)
        let data = JSON.stringify(row)
        res.end(data)
    })
});

router.get('/query/driver',(req,res)=>{
    conn.query('select * from driver',function(err,row){
        if(err){
             console.log(err)            
        }
        // console.log(typeof row)
        let data = JSON.stringify(row)
        res.end(data)
    })
});

router.get('/query/goods',(req,res)=>{
    conn.query('select * from goods',function(err,row){
        if(err){
             console.log(err)            
        }
        // console.log(typeof row)
        let data = JSON.stringify(row)
        res.end(data)
    })
});

router.get('/query/tool',(req,res)=>{
    conn.query('select * from tool',function(err,row){
        if(err){
             console.log(err)            
        }
        // console.log(typeof row)
        let data = JSON.stringify(row)
        res.end(data)
    })
});

router.get('/query/datasrg',(req,res)=>{
    conn.query('select * from datasrg',function(err,row){
        if(err){
             console.log(err)            
        }
        // console.log(typeof row)
        let data = JSON.stringify(row)
        res.end(data)
    })
});

router.get('/query/datadmt',(req,res)=>{
    conn.query('select * from datadmt',function(err,row){
        if(err){
             console.log(err)            
        }
        // console.log(typeof row)
        let data = JSON.stringify(row)
        res.end(data)
    })
});

router.get('/query/logaccident',(req,res)=>{
    conn.query('select * from logaccident',function(err,row){
        if(err){
             console.log(err)            
        }
        // console.log(typeof row)
        let data = JSON.stringify(row)
        res.end(data)
    })
});

router.get('/query/lostpack',(req,res)=>{
    conn.query('select * from lostpack',function(err,row){
        if(err){
             console.log(err)            
        }
        // console.log(typeof row)
        let data = JSON.stringify(row)
        res.end(data)
    })
});


module.exports = router;
