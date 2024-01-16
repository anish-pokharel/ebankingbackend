const express = require('express')
const router = express.Router()


const settingData = require('../models/settingmodel')

router.post('/userSetting', async (req, res) => {
    try {
        const newsettingData = new settingData({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            streetAddress: req.body.streetAddress,
            zipCode: req.body.zipCode,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
        })
        await newsettingData.save();
        res.status(200).json({ message: 'Setting change' })
    }
    catch
    (error) { }
})



module.exports = router;