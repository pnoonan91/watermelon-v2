const router = require('express').Router()
const {Game} = require('../db/models')
module.exports = router

router.post('/:gameNumber', (req, res, next) => {
    console.log(req.params.gameNumber)
    console.log("YAY")
    Game.create({
        code: req.params.gameNumber,
        active: true
    })
    .then(game => res.json(game))
    .catch(next)
})
