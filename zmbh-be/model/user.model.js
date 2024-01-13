// const { Sequelize, DataTypes } = require('sequelize');
// const bcrypt = require('bcryptjs');

// // Adatbázis kapcsolat létrehozása
// const sequelize = new Sequelize('mysql://user:password@localhost:3306/mydb');


// // Jelszó hashelése a mentés előtt
// User.beforeCreate(async (user, options) => {
//     user.password = await bcrypt.hash(user.password, 8);
// });

// module.exports = User;

const Sequelize = require('sequelize');
const sequelize = require('./db'); // Importáld az adatbázis kapcsolatot

const User = sequelize.define('User', {
    user_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    is_verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    verification_code: {
        type: Sequelize.STRING
    },
    refresh_token: {
        type: Sequelize.STRING
    },
    refresh_token_expires: {
        type: Sequelize.DATE
    },
    role: {
        type: Sequelize.ENUM('admin', 'user', 'editor'),
        defaultValue: 'user'
    }
}, {
    timestamps: false
});
// Jelszó hashelése a mentés előtt
User.beforeCreate(async (user, options) => {
    user.password = await bcrypt.hash(user.password, 8);
  });
  
module.exports = User;
