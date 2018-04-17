import React from 'react'
import {Button, Header} from 'semantic-ui-react'

const AssignButton = (props) => (
    props.team.length
        ? <Header color="teal">Team {props.team}   </Header>
        : <Button.Group>
            <Button color="teal" onClick={() => props.assignPlayer(props.player, 'A')}>A</Button>
            <Button.Or />
            <Button color="teal" onClick={() => props.assignPlayer(props.player, 'B')}>B</Button>
        </Button.Group>
)

export default AssignButton
