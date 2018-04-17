import React from 'react'
import { Header } from 'semantic-ui-react'

const JoinGameHeader = (props) => (
    <Header color="pink" size="huge" textAlign="center">{props.host ? 'Start' : 'Join'} a Game</Header>
)

export default JoinGameHeader
