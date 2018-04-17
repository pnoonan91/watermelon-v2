import React, {Component} from 'react'
import {connect} from 'react-redux'
import history from '../history'
import {Container, Divider} from 'semantic-ui-react'
import firebase from '../firebase'

import {TeamsHeader, GameNumber, Players} from '../components/teams'
import {setPlayersFromFirebase, setPlayerTeam} from '../store/game'

const mapStateToProps = state => ({
    ...state.game,
    players: state.game.players
})

function mapDispatchToProps(dispatch) {
    return {
        setPlayers(players){ dispatch(setPlayersFromFirebase(players)) },
        setTeam(player, team){ dispatch(setPlayerTeam(player, team))}
    }
}

class Teams extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    componentDidMount() {
        const playersRef = firebase.database().ref(`/games/${this.props.gameNumber}/players`)
        
        playersRef.on('value', (snapshot) => {
            let players = snapshot.val()
            this.props.setPlayers(players)
        })
    }

    render(){
        const {host} = this.props
        return (
            <Container>
                <Divider hidden />
                <TeamsHeader />
                <Divider hidden />
                <GameNumber gameNumber={this.props.gameNumber} host={this.props.host} />
                <Divider hidden />
                <Players players={this.props.players} host={this.props.host} assignPlayer={this.props.setTeam}/>
                <Divider hidden />
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams)
