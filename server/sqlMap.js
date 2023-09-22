// sql语句
//sqlMap.js——SQL 语句映射文件，供 API 调用

var sqlMap = {
    user: {
        //向manager表中插入一条记录
        add: 'insert into manager(name,password,power) values (?,?,?)',
    },
    address:{
        add: 'insert into address(name,telephone,province,city,county,detail,isDefault,id) values (?,?,?,?,?,?,?,?)',
        update:'update address set name=?,telephone=?,province=?,city=?,county=?,detail=?,isDefault=? where id=?'
    },
    driver:{
        add: 'insert into driver(driverID,name,sex,age,state,telephone) values (?,?,?,?,?,?)',

    },
    goods:{
        add:'insert into goods(goodsID,goodKind,packKind,weight,timeliness,isDanger,isForeign,remark) values (?,?,?,?,?,?,?,?)',

    },
    media:{
        add:'insert into media(expressID,startTime,endTime,state,postID,receiveID,goodsID,managerName,driverID,toolID) values (?,?,?,?,?,?,?,?,?,?)',

    },
    receiver:{
        add:'insert into receiver(receiveID,postCompany,name,telephone,province,city,county,detail) values (?,?,?,?,?,?,?,?)',

    },
    sender:{
        add:'insert into sender(postID,postCompany,name,telephone,payWay,money,province,city,county,detail) values (?,?,?,?,?,?,?,?,?,?)',

    },
    tool:{
        add: 'insert into tool(toolID,kind,origin,destination,positionNow) values (?,?,?,?,?)',
        
    }

}

module.exports = sqlMap

