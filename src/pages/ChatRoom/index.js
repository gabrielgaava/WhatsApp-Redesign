import React from 'react';
import {FlatList} from 'react-native';
import {Wrapper, Page, Header} from '../../styles/global';
import {
  Left,
  Right,
  Column,
  UserName,
  Status,
  Action,
  ChatContainer,
  RecivedMessage,
  SentMessage,
  To,
  From,
  SentText,
  RecivedText,
} from './styles';

// Componentes
import Icon from '../../styles/icons';
import Avatar from '../../components/Avatar';

export default function ChatRoom({route}) {
  const {name, picture} = route.params;

  return (
    <Wrapper>
      <Page>
        <Header>
          <Left>
            <Avatar size={45} url={picture} online={true} />
            <Column>
              <UserName>{name}</UserName>
              <Status>Online</Status>
            </Column>
          </Left>
          <Right>
            <Action>
              <Icon name="phone" size={25} color="#5CE27F" />
            </Action>
            <Action>
              <Icon name="video-camera" size={25} color="#5CE27F" />
            </Action>
          </Right>
        </Header>
        <ChatContainer>
          <SentMessage>
            <To>
              <SentText>Como você fez isso ? Eu to tentando faz alguns dias já e até agora nada ;-;</SentText>
            </To>
          </SentMessage>
          <RecivedMessage>
            <From>
              <RecivedText>Só baixei o rep de novo</RecivedText>
            </From>
          </RecivedMessage>
          <RecivedMessage>
            <From>
              <RecivedText>la do github mesmo</RecivedText>
            </From>
          </RecivedMessage>
        </ChatContainer>
      </Page>
    </Wrapper>
  );
}
