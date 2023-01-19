
const jwt = require('jsonwebtoken');
const fs = require('fs');

module.exports  = {
    postendtrainorder(req, res){
        const orders = require('./orders.json').orders;
        const id = req.params.id;
        const newStatus = req.body.status;
        console.log(id," ",newStatus)
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].id === id) {
                orders[i].status = newStatus;
                res.status(200).json({ message: 'Order status updated successfully' });
                return;
            }
        }
        res.status(404).json({ message: 'Order not found' });
        //return res.status(200).send({ orders: lista });
    }
}