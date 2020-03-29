const express = require('express');
const router = express.Router();
const db = require('../../src/database/models/')
router.get('/', (req, res) => {
   
        db.user.findAll({})
           
            .then(users => {
            

                let answord = {
                    meta: {
                        status: 200,
                        total_users: users.length,
                        url: '/api/users'
                       },
                    data: users
                }
                
                res.json(answord)
            })
   
})

router.get('/users/:id', function(req, res, next) {
    db.users
        .findByPk(req.params.id)
        .then(data => {
            if (data) {
                return res.json(data)
            }

            return res.status(404).end('Not found')
        })
});

module.exports = router