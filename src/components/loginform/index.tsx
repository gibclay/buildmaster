import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Grid, Icon } from 'semantic-ui-react'

export interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const navigate = useNavigate();

  return (
    <Container text textAlign='center' style={{margin: '6em'}}>
      <Grid verticalAlign='middle'>
        <Grid.Column>
          <Grid.Row style={{padding: '2em'}}>
          <Button fluid icon={<Icon l name='google' />} content='Sign in with Google' size='massive' color='black' onClick={() => navigate('/')} ></Button>
          </Grid.Row>
          <Grid.Row style={{padding: '2em'}}>
          <Button fluid icon={<Icon l name='apple' />} content='Sign in with Apple' size='massive' onClick={() => navigate('/')} ></Button>
          </Grid.Row>
          <Grid.Row style={{padding: '2em'}}>
          <Button fluid icon={<Icon l name='facebook' />} content='Sign in with Facebook' size='massive' color='facebook' onClick={() => navigate('/')} ></Button>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default LoginForm
