import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome, Welcome} from './components'
import {JoinGame, Teams} from './containers'
import {me} from './store'
import {Modal, Button, Icon} from 'semantic-ui-react'
import history from './history'

import {resetUserGame} from './store/game'
import {resetPlayer} from './store/player'

/**
 * COMPONENT
 */
class Routes extends Component {
  constructor(props){
    super(props)
    this.state = {
      gameChoiceOpen: false
    }
    this.showGameChoice = this.showGameChoice.bind(this)
    this.modalResetGame = this.modalResetGame.bind(this)
    this.modalJoinGame = this.modalJoinGame.bind(this)
  }

  componentDidMount () {
    const {gamePlay, gameTime, gameNumber, resetGameData} = this.props

    if(gamePlay) {
      let timeSinceGameStart = (Date.now() - new Date(gameTime))/60000
      timeSinceGameStart > 45
        ? resetGameData()
        : this.showGameChoice()
    }
  }

  showGameChoice() {
    this.setState({gameChoiceOpen: !this.state.gameChoiceOpen})
  }

  modalResetGame() {
    this.props.resetGameData()
    this.showGameChoice()
  }

  modalJoinGame() {
    this.showGameChoice()
    history.push('/teams')
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <div>
        <Modal dimmer="inverted" open={this.state.gameChoiceOpen} onClose={this.showGameChoice} closeOnDimmerClick={false}>
          <Modal.Header color="pink">Game In Progress</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <p>It looks like you're already a part of a game in progress.</p>
              <p>Would you like to re-join this game?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button icon labelPosition="left" color="olive" onClick={() => this.modalJoinGame()}><Icon name="check"/> Yes</Button>
            <Button icon labelPosition="left" color="pink" onClick={() => this.modalResetGame()}><Icon name="delete" /> No</Button>
          </Modal.Actions>
        </Modal>
        <Switch>
          <Route path="/join" component={JoinGame} />
          <Route path="/teams" component={Teams} />
          <Route component={Welcome} />
        </Switch>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    gamePlay: state.game.gamePlay,
    gameNumber: state.game.gameNumber,
    gameTime: state.game.gameTime
  }
}

const mapDispatch = (dispatch) => {
  return {
    resetGameData(){
      dispatch(resetUserGame())
      dispatch(resetPlayer())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {

}
