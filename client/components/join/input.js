import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Message, Input, Divider} from 'semantic-ui-react'

import {setCurrentName, setCurrentGame as setPlayerGame} from '../../store/player'
import {setCurrentGame} from '../../store/game'

const mapStateToProps = state => ({
    host: state.game.host
})

function mapDispatchToProps(dispatch) {
    return {
        setName: (name) => dispatch(setCurrentName(name)),
        setGameNumber(game){
            dispatch(setCurrentGame(game))
            dispatch(setPlayerGame(game))
        }
    }
}

class JoinGameInput extends Component {
    render() {
        return (
            <div>
                {
                    this.props.host
                        ? <Message color="olive" size="big">
                            <Message.Header>
                                Game Number: {this.props.gameNumber}
                            </Message.Header>
                            <p>Share this with your friends so they can join your game!</p>
                        </Message>
                        : <Input focus={false} fluid size="massive" placeholder="Enter Game Number" onChange={e => this.props.setGameNumber(e.target.value.toUpperCase())} className="gameNumberInput"/>
                }
                <Divider hidden />
                <Input focus={false} fluid size="massive" placeholder="Enter Your Name" onChange={e => this.props.setName(e.target.value)}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinGameInput)
