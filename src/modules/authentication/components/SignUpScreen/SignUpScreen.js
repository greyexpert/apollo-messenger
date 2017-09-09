import React, { Component } from 'react';
import { Container, Content, View, Text, Button, H1 } from 'native-base';
import styled from 'styled-components/native';

import SignUpForm from '../SignUpForm';

const Wraper = styled(View)`
  
`;

const Head = styled(View)`
  height: 145px;
  align-items: center;
  justify-content: center;
`;

const Form = styled(SignUpForm)`
  margin-bottom: 60px;
  width: 280px;
  align-self: center;
`;

const Buttons = styled(View)`
  align-self: center;
`;

const ButtonItem = styled(Button)`
  margin-bottom: 10px;
  width: 180px;
  align-self: center;
  justify-content: center;
`;


export default class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Sign Up',
  };

  render() {
    const { submitForm } = this.props;

    return (
      <Container>
        <Content>
          <Wraper>
            <Head>
              <H1>
                Please sign up
              </H1>
            </Head>

            <Form onSubmit={(values) => {
              console.log(values);
            }} />

            <Buttons>
              <ButtonItem onPress={submitForm}>
                <Text>
                  Sign up
                </Text>
              </ButtonItem>

            </Buttons>
          </Wraper>
        </Content>
      </Container>
    );
  }
}