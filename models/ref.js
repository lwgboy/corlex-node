// 模型关联类
var { sequelize } = require("../config/index");
var User = sequelize.import("./user");
var Position = sequelize.import("./position");
// var LoginInfo = sequelize.import("./loginInfo");
// var Address = sequelize.import("./address");
// var Role = sequelize.import("./role");

//建立模型之间关联关系
// Position.belongsTo(User);
User.belongsTo(Position, { foreignKey: 'position', as: 'info' });
// User.hasOne(Position, { foreignKey: 'pid', as: 'info' });
//
// User.hasMany(Address, {
//   foreignKey: 'user_id',
//   targetKey: 'id',
//   as: "Addresses" //别名，目标模型会混入到源模型后会使用该名称,存在getAddresses、setAddresses等方法
// });
// Address.belongsTo(User); //address想反查user必须加这个，否则只能实现user查询address
//
// User.belongsToMany(Role, {
//   through: "userRoles"
// });
// Role.belongsToMany(User, {
//   through: 'userRoles'
// });

//创建表
sequelize.sync({ force: false });
