import axios from 'axios'
import history from '../history'

//ACTION TYPES
const GET_CURRENT_GAME = 'GET_CURRENT_GAME'
const SET_CURRENT_GAME = 'SET_CURRENT_GAME'
const SET_CURRENT_TIME = 'SET_CURRENT_TIME'
const RESET_GAME = 'RESET_GAME'
const SET_HOST = 'SET_HOST'
const SET_ACTIVE_PLAYERS = 'SET_ACTIVE_PLAYERS'
const SET_PLAYER_TEAM = 'SET_PLAYER_TEAM'

//DEFAULT STATE
const defaultGame = {
    gamePlay: false,
    host: false,
    gameNumber: '',
    gameTime: '',
    players: []
}

//ACTION CREATORS
const getCurrentGame = () => ({type: GET_CURRENT_GAME})
export const setCurrentGame = (game) => ({type: SET_CURRENT_GAME, game})
const setCurrentTime = (time) => ({type: SET_CURRENT_TIME, time})
export const setHost = () => ({type: SET_HOST})
export const resetUserGame = () => ({type: RESET_GAME})
const setActivePlayers = (players) => ({type: SET_ACTIVE_PLAYERS, players})
export const setPlayerTeam = (player, team) => ({type: SET_PLAYER_TEAM, player, team})

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

export const setPlayersFromFirebase = (players) => dispatch => {
    let activePlayers = []
    for(let player in players) {
        activePlayers.push({
            id: player,
            name: players[player].name,
            status: players[player].status,
            team: ''
        })
    }
    dispatch(setActivePlayers(activePlayers))
}

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
        case SET_ACTIVE_PLAYERS:
            return {
                ...state,
                players: action.players
            }
        case SET_PLAYER_TEAM:
            return {
               ...state,
               players: state.players.map(player => (player.id === action.player) ? {...player, team: action.team} : player)
            }
        default:
            return state
    }
}