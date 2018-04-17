import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Container, Button, Divider, Icon} from 'semantic-ui-react'

import {JoinGameHeader, JoinGameInput} from '../components/join'
import {resetGame} from '../store/game'
import history from '../history'

const mapStateToProps = state => ({
    ...state.game,
    plaerNameLength: state.player.name.length,
    playerGameLength: state.player.game.length
})

function mapDispatchToProps(dispatch) {
    return {
        reset: (gameNumber) => dispatch(resetGame(gameNumber))
    }
}

class JoinGame extends Component {
    constructor(props) {
        super(props)

        this.state = {
            joinDisabled: true
        }
    }

    componentWillReceiveProps() {
        let {plaerNameLength, playerGameLength} = this.props

        if(plaerNameLength > 0 && playerGameLength > 0) {
            this.setState({
                joinDisabled: false
            })
        }
    }

    render() {
        const {host, gameNumber, reset} = this.props

        return (
            <Container>
                <Divider hidden />
                <JoinGameHeader host={host} />
                <Divider hidden />
                <JoinGameInput host={host} gameNumber={gameNumber} />
                <Divider hidden />
                <Button color="olive" fluid size="massive" disabled={this.state.joinDisabled}>Join Game!</Button>
                <Divider hidden />
                {
                    host
                        ? <Button icon labelPosition='left' color='pink' onClick={() => reset(gameNumber)}>
                            <Icon name='cancel' />
                            Cancel
                        </Button>
                        : <Button icon labelPosition='left' color='pink' onClick={() => history.push('/')}>
                            <Icon name='home' />
                            Home
                        </Button>
                }
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinGame)
