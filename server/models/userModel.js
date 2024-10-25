const {DataTypes} =require("sequelize")
const database=require("../config/dbConfig")

const User=database.define('Userdata',{
    Sn:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{tableName:"UsersInfou",timestamps:"true"})
module.exports=User