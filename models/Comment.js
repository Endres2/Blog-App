const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        comment_body:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        post_title:{
            type: DataTypes.STRING,
            references:{
                model:'post',
                key:'title'
            },
        },
        user_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'user',
                key:'id'
            },
            
        }
       
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;