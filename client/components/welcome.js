import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Container, Button, Divider } from 'semantic-ui-react'

import {setGameNumber} from '../store/game'
import {gameNumberGenerator} from '../util'

const mapStateToProps = state => ({

})

function mapDispatchToProps(dispatch) {
    return {
        startGame: () => dispatch(setGameNumber(gameNumberGenerator()))
    }
}

class Welcome extends Component {
  render () {
    const {startGame} = this.props
    return (
        <Container textAlign="center">
            <h1>watermelon</h1>
            <div>
                <Button color="olive" fluid size="massive" onClick={() => startGame()}>
                Start a Game
                </Button>
                <Divider hidden />
                <Button color="olive" fluid size="massive">
                Join a Game
                </Button>
                <Divider hidden />
                <Button color="olive" fluid size="massive">
                Rules
                </Button>
            </div>
            <p>Built with &hearts; in Chicago by <a href="http://pat-noonan.com">Pat Noonan</a></p>
        </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
