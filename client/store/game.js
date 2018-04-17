import axios from 'axios'
import history from '../history'

//ACTION TYPES
const GET_CURRENT_GAME = 'GET_CURRENT_GAME'
const SET_CURRENT_GAME = 'SET_CURRENT_GAME'
const SET_CURRENT_TIME = 'SET_CURRENT_TIME'
const RESET_GAME = 'RESET_GAME'
const SET_HOST = 'SET_HOST'

//DEFAULT STATE
const defaultGame = {
    gamePlay: false,
    host: false,
    gameNumber: '',
    gameTime: ''
}

//ACTION CREATORS
const getCurrentGame = () => ({type: GET_CURRENT_GAME})
export const setCurrentGame = (game) => ({type: SET_CURRENT_GAME, game})
const setCurrentTime = (time) => ({type: SET_CURRENT_TIME, time})
export const setHost = () => ({type: SET_HOST})
export const resetUserGame = () => ({type: RESET_GAME})

//THUNK CREATORS
export const setGameNumber = (gameNumber) =>
    dispatch => 
        axios.post(`api/game/${gameNumber}`)
            .then(res => {
                dispatch(setCurrentGame(res.data.code))
                dispatch(setCurrentTime(res.data.createdAt))
                history.push(`/join`)
            })
            .catch(err => console.error(err))

export const resetGame = (gameNumber) =>
    dispatch => 
        axios.get(`api/game/${gameNumber}`)
            .then(() => {
                dispatch(resetUserGame())
                history.push('/')
            })

//REDUCER
export default function(state = defaultGame, action) {
    switch (action.type) {
        case GET_CURRENT_GAME:
            return state.gameNumber
        case SET_CURRENT_GAME:
            return {
                ...state,
                gamePlay: true,
                gameNumber: action.game
            }
        case SET_CURRENT_TIME:
            return {
                ...state,
                gameTime: action.time
            }
        case SET_HOST:
            return {
                ...state,
                host: true
            }
        case RESET_GAME:
            return defaultGame
        default:
            return state
    }
}