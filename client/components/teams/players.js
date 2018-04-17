import React from 'react'
import {List} from 'semantic-ui-react'

import AssignButton from './assignButton'

const Players = (props) => (
    <List divided verticalAlign='middle'>
        {props.players.map(player => (
           <List.Item key={player.id}>
                <List.Content floated="right" verticalAlign="middle">
                    <AssignButton player={player.id} team={player.team} assignPlayer={props.assignPlayer} />
                </List.Content>
               <List.Content verticalAlign="middle">
                    <h2>{player.name}</h2>
               </List.Content>
            </List.Item>     
        ))}
    </List>
)

export default Players