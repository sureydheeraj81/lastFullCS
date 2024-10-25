const jwt = require("jsonwebtoken");

module.exports = (req, resp, next)=>{
    
    try {
        const token = req.header["authorization"].split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
            if(err){
                return resp.status(401).send({ message: "Auth failed", success: false, err})
            }else{
                req.body.username = decoded.id;
                next();
            }
        })
    } catch (error) {
        return resp
        .status(401)
        .send({
          message: "Auth failed",
          success: false
        })
    }
}