import React from 'react'
import {Message} from 'semantic-ui-react'

const GameNumber = (props) => (
    <Message color="olive" size="huge">
        <Message.Header>
            {`Game Number: ${props.gameNumber}`}
        </Message.Header>
        {
            props.host
                ? <p>Assign players to a team.</p>
                : <p>Waiting for host to assign players to a team.</p>
        }
    </Message>
)

export default GameNumber