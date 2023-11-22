const Test = require('../models/test.js')
const TestCenter = require('../models/testCenter.js')

const showTest = (req, res) => {

    Test.find({ centerId: req.body.centerId })
        .then((tests) => {
            if (tests) {
                const data = {
                    status: 200,
                    description: "Done",
                    tests: tests
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
}

const showAllTest = (req, res) => {
    Test.find().then((tests) => {
        const data = {
            status: 200,
            tests: tests
        }
        res.json(data)
    }).catch((err) => console.log(err))
}


const createTest = async (req, res) => {
    const newTest = new Test(req.body)
    await newTest.save().then((response) => {
        const data = {
            status: 200,
            description: "Created successfully"
        }
        res.json(data)
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = {
    showTest, createTest, showAllTest
}
