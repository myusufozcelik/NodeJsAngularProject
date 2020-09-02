module.exports = (sequelize,Sequelize) => {
    const User = sequelize.define('user', {
        id: {
            type:Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        user_name : {
            type:Sequelize.STRING
        },
        user_password: {
            type:Sequelize.STRING
        }
    })
    return User;
}

