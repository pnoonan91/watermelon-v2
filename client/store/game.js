import axios from 'axios'
import history from '../history'

//ACTION TYPES
const GET_CURRENT_GAME = 'GET_CURRENT_GAME'
const SET_CURRENT_GAME = 'SET_CURRENT_GAME'

//DEFAULT STATE
const defaultGame = {
    gamePlay: false,
    gameNumber: ''
}

//ACTION CREATORS
const getCurrentGame = () => ({type: GET_CURRENT_GAME})
const setCurrentGame = (game) => ({type: SET_CURRENT_GAME, game})

//THUNK CREATORS
export const setGameNumber = (gameNumber) =>
    dispatch => 
        axios.post(`api/game/${gameNumber}`)
            .then(res => {
                console.log(res.data)
                dispatch(setCurrentGame(res.data.code))
                history.push(`/play/${gameNumber}`)
            })
            .catch(err => console.error(err))

//REDUCER
export default function(state = defaultGame, action) {
    switch (action.type) {
        case GET_CURRENT_GAME:
            return state.gameNumber
        case SET_CURRENT_GAME:
            return {
                gamePlay: true,
                gameNumber: action.game
            }
        default:
            return state
    }
}