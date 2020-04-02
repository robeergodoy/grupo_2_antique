const db = require('../../database/models')

let apiController = {
    
    users: (req, res, next) => {
        db.user
            .findAll({})
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
    },

    findUser: (req, res, next) => {
        db.user
            .findByPk(req.params.id)
            .then(data => {
              res.json(data)
            })
    }
}


module.exports = apiController