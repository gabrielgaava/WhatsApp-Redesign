import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Column,
  Row,
  Avatar,
  OnlineDot,
  UserName,
  Message,
  Time,
  Dot,
  Touchable,
} from './styles';

export default function ChatCard({data}) {
  const navigation = useNavigation();

  return (
    <Touchable
      onPress={() => {
        navigation.navigate('ChatRoom', {conversation: {user: data.user.name}});
      }}>
      <Container>
        <Avatar
          source={{uri: data.user.picture}}
          imageStyle={{borderRadius: 40}}>
          <OnlineDot />
        </Avatar>
        <Column>
          <Row>
            <UserName>{data.user.name}</UserName>
            <Time>16:32</Time>
          </Row>
          <Row>
            <Message>{data.message}</Message>
            <Dot>2</Dot>
          </Row>
        </Column>
      </Container>
    </Touchable>
  );
}
