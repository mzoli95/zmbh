// const { Sequelize, DataTypes } = require('sequelize');
// const bcrypt = require('bcryptjs');

// // Adatbázis kapcsolat létrehozása
// const sequelize = new Sequelize('mysql://user:password@localhost:3306/mydb');

// const User = sequelize.define('User', {
//     // Definiáld a modell attribútumait
//     user_name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     },
//     is_verified: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false
//     },
//     verification_code: {
//         type: DataTypes.STRING
//     },
//     refresh_token: {
//         type: DataTypes.STRING
//     },
//     refresh_token_expires: {
//         type: DataTypes.DATE
//     },
//     role: {
//         type: DataTypes.ENUM('admin', 'user', 'editor'),
//         defaultValue: 'user'
//     },
//     // További mezők...
// }, {
//     // Modell beállításai
//     sequelize,
//     modelName: 'User'
// });

// // Jelszó hashelése a mentés előtt
// User.beforeCreate(async (user, options) => {
//     user.password = await bcrypt.hash(user.password, 8);
// });

// module.exports = User;
