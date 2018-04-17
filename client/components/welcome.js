import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Container, Button, Divider, Header } from 'semantic-ui-react'

import {setGameNumber, setHost} from '../store/game'
import {setCurrentGame} from '../store/player'
import {gameNumberGenerator} from '../util'
import history from '../history'

const mapStateToProps = state => ({

})

function mapDispatchToProps(dispatch) {
    return {
        startGame() {
            const gameNumber = gameNumberGenerator()
            dispatch(setHost())
            dispatch(setGameNumber(gameNumber))
            dispatch(setCurrentGame(gameNumber))
        }
    }
}

class Welcome extends Component {
  render () {
    const {startGame} = this.props
    return (
        <Container textAlign="center">
            <Divider hidden />
            <Header color="pink" size="huge" textAlign="center">WATERMELON</Header>
            <Divider hidden />
            <div>
                <Button color="olive" fluid size="massive" onClick={() => startGame()}>
                Start a Game
                </Button>
                <Divider hidden />
                <Button color="olive" fluid size="massive" onClick={() => history.push('/join')}>
                Join a Game
                </Button>
                <Divider hidden />
                <Button color="olive" fluid size="massive">
                Rules
                </Button>
            </div>
            <Divider hidden />
            <p>Built with &hearts; in Chicago by <a href="http://pat-noonan.com">Pat Noonan</a></p>
        </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
