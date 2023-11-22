const TestCenter = require('../models/testCenter.js')

const validateTestCenter = (req, res) => {
    const email = req.body?.email
    const password = req.body?.password
    TestCenter.findOne({ email: email, password: password })
        .then((testCenter) => {
            if (testCenter) {
                const data = {
                    testCenter: testCenter,
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

const createTestCenter = async (req, res) => {
    console.log(req.body)
    const newTestCenter = new TestCenter(req.body)
    await newTestCenter.save().then((response) => {
        const data = {
            status: 200,
            description: "created successfully"
        }
        res.json(data)
    }).catch((err) => {
        console.log(err)
    })
}

const showTestCenter = (req, res) => {
    TestCenter.find().then((testCenters) => {
        const data = {
            status: 200,
            testCenters: testCenters,
            description: "Done"
        }
        res.json(data)
    }).catch((err) => console.log(err))
}

module.exports = {
    validateTestCenter,
    createTestCenter,
    showTestCenter
}
