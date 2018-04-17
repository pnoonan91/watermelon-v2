import axios from 'axios'
import history from '../history'

//ACTION TYPES
const SET_PLAYER_NAME = 'SET_PLAYER_NAME'
const SET_PLAYER_GAME = 'SET_PLAYER_GAME'
const RESET_PLAYER = 'RESET_PLAYER'

//DEFULT STATE
const defaultPlayer = {
    name: '',
    game: ''
}

//ACTION CREATORS
export const setCurrentName = (name) => ({type: SET_PLAYER_NAME, name})
export const setCurrentGame = (game) => ({type: SET_PLAYER_GAME, game})
export const resetPlayer = () => ({type: RESET_PLAYER})

//THUNK CREATORS


//REDUCER
export default function(state = defaultPlayer, action) {
    switch (action.type) {
        case SET_PLAYER_NAME:
            return {...state, name: action.name}
        case SET_PLAYER_GAME:
            return {...state, game: action.game}
        case RESET_PLAYER:
            return defaultPlayer
        default:
            return state
    }
}