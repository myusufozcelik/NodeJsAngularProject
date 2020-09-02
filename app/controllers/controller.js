const db = require('../config/db.config.js')
const User = db.User;

exports.create = (req,res) => {
    let user = {};

try {
    user.user_name = req.body.user_name;
    user.user_password = req.body.user_password;

    User.create(user)
    .then(result=> {
        res.status(200).json({
            message: 'Upload successfully a User with id = '+result.id,
            user:result
        })
    })
} catch(err) {
    res.status(500).json({
        message:'Fail',
        error:err.message
    })
}

}

exports.retrieveAllUsers = (req,res) => {
    User.findAll().then(userInfos => {
        res.status(200).json({
            message:"Get all users infos successfully",
            users: userInfos ,
        })
    })
    .catch(error=> {
        console.log(error)
        res.status(500).json({
            message:'Error',
            error:error
        })
    })

}




exports.getUserById = (req,res) => {
    let userId = req.params.id;
    User.findByPk(userId).then(user => {
        res.status(200).json({
            message: 'Successfully get a user with id = '+userId,
            users:user
        })
    })
    .catch(error => {
        console.log(error)

        res.status(500).json({
            message:'Error',
            error:error
        })
    })
}

exports.updateById = async (req,res) => {
    try {
        let userId = req.params.id;
        let user = await User.findByPk(userId)

        if(!user) {
            res.status(404).json({
                message:'Not Found updating a user with id = '+userId,
                user: '',
                error: '404'
            })
        }
        else 
        {
            let updatedObject = {
                user_name: req.body.user_name,
                user_password: req.body.params
            }
            let result = await User.update(updatedObject, {returning: true, where: {id:userId}});
    
            if(!result) {
                res.status(500).json({
                    message:'Error -> Can not update a user with id = '+req.params.id,
                    error: 'Can not updated'
                })
            }

            res.status(200).json({
                message:'Update successfully a User with id = '+userId,
                user: updatedObject,
            })
            
        }
    }
    catch(error) {
        res.status(500).json({
            message:'Error -> Can not update a user with id = '+req.param.id,
            error:error.message
        })
    }
}

exports.deleteById = async (req,res) => {
    try {
        let userId = req.params.id;
        let user = await User.findByPk(userId)
        if(!user) {
            res.status(404).json({
                message: 'Does not exist a user with id = '+userId,
                error: '404'
            })
        }
        else {
            await user.destroy();
            res.status(200).json({
                message:'Delete Successfully a User with id = '+userId,
                user:user,
            })            
        }
    }
    catch(error) {
        res.status(500).json({
            message: 'Error -> Can not delete a user with id = '+req.params.id,
            error:error.message,
        })
    }
}


