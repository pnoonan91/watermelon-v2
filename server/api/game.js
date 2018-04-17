const router = require('express').Router()
const {Game} = require('../db/models')
const firebaseDb = require('../firebase')

module.exports = router

router.post('/:gameNumber', (req, res, next) => {
    Game.create({
        code: req.params.gameNumber,
        active: true
    })
    .then(game => {
        firebaseDb.ref(`/games/${req.params.gameNumber}`).set({status: 'waiting'})
        res.json(game)
    })
    .catch(next)
})

router.get('/:gameNumber', (req, res, next) => {
    console.log(req.params.gameNumber)

    Game.destroy({
        where: {
            code: req.params.gameNumber
        }
    })
    .then(() => res.sendStatus(200))
    .catch(next)
})
