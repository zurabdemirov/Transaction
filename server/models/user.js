'use strict'

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    },{
        underscored: true,
        tableName: 'User'
    });
    return User
}
