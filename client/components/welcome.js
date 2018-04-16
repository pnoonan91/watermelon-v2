import React from 'react'
import { Container, Button, Divider } from 'semantic-ui-react'

const Welcome = () => {
    console.log('local storage: ', Window.localStorage)
  return (
    <Container textAlign="center">
      <h1>watermelon</h1>
      <div>
        <Button color="olive" fluid size="massive">
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
      <p>Built with &hearts; in Chicago</p>
    </Container>
  );
};

export default Welcome