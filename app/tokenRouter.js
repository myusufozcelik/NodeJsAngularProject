const router = require("express").Router();
const jwt = require("jsonwebtoken")

router.post("/getToken",(req,res,next)=> {
    const { user_name, user_password} = req.body;
    const payLoad = {
        user_name,
        user_password,
        email: "ozcelikyusufm@gmail.com"
    };
    const token = jwt.sign(payLoad,req.app.get('api_secret_key'),{ expiresIn:120})
    res.json({
        status:true,
        token
    })
})

module.exports = router;