const User = require('../models/user.js')

const validateUser = (req, res) => {
    const email = req.body?.email
    const password = req.body?.password
    User.findOne({ email: email, password: password })
        .then((user) => {
            if(user){
                const data = {
                    user: user,
                    status: 200,
                    description: "Found"
                }
                res.json(data)
            }
            else {
                const data = {
                    status: 404,
                    description: "Not Found"
                }
                res.json(data)
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

const createUser = async(req, res) => {
    const newUser = new User(req.body)
    await newUser.save().then((response) => {
        const data = {
            status : 200,
            description : "Created successfully"
        }
        res.json(data)
    }).catch((err) => {
        if(err)console.log(err)
    })
}


module.exports = {
    validateUser, createUser
}
