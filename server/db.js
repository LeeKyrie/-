//后端共422行代码
// 数据库连接配置
//db.js——用来添加 mysql 配置
//根据mysql的IP，端口，用户名，密码，数据库名称自行修改
module.exports = {
    mysql: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'express',
        port: '3306'
    }
}
