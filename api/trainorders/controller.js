const jwt = require('jsonwebtoken');
const fs = require('fs');

// Replace with your own secret key
const secretKey = 'paranguacutirimicuaro';

function isList(obj) {
    return Array.isArray(obj);
}

module.exports  = {
    async posttrainorders(req, res){
        // Get the token from the request headers
        const token = req.headers['authorization'];
        // If there is no token, return a 401 unauthorized error
        if (!token) {
            return res.status(401).send({ error: 'No token provided' });
        }
        // Verify the token and decode the payload
        jwt.verify(token.split(" ")[1], secretKey, async (err, decoded) => {
            if (err) {
                console.log(err)
                return res.status(401).send({ error: 'Invalid token' });
            }    
            
            // If the token is valid, send a response with the user's data
            // get the existense orders 
            fs.readFile('orders.json', (err, data) => {
                if (err) throw err;
                // Parse the JSON file to an object
                let jsonorders = JSON.parse(data);
                console.log(jsonorders)
                // get the orders that are type "train model"
                if(isList(jsonorders["orders"])){
                    lista = []
                    for(var i = 0; i < jsonorders["orders"].length; i++){
                        
                        if(jsonorders["orders"][i]["type"] == "train model"){
                            lista.push(jsonorders["orders"][i])
                        }
                    }
                    //return res.send({user: decoded.user, orders: lista });
                    return res.status(200).send({ orders: lista });
                }else{
                    return res.status(401).send({ error: 'Internal Error, get orders error' });
                }
            });
        });
    }
}
