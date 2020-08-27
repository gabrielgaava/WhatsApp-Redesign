import React, {useContext, useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {ThemeContext} from 'styled-components';
import {FlatList, View} from 'react-native';

import {Wrapper, Page, Header} from '../../styles/global';
import {
  Left,
  Right,
  Column,
  UserName,
  Status,
  Action,
  ChatContainer,
  MessageLine,
  Message,
  MessageText,
  MessageTime,
  FooterContainer,
  Input,
  CircleButton,
} from './styles';

// Componentes
import Icon from '../../styles/icons';
import Avatar from '../../components/Avatar';

export default function ChatRoom({route}) {
  const {name, picture} = route.params;
  const [fakeConversation, setConversation] = useState([
    {
      id: 1,
      from: 'Gabriel',
      to: 'Douglas',
      message:
        'Como você fez isso ? Eu to tentando faz alguns dias já e até agora nada ;-;',
      time: '11:35',
      readed: true,
    },
    {
      id: 2,
      from: 'Douglas',
      to: 'Gabriel',
      message: 'Só baixei o rep de novo',
      time: '11:42',
      readed: true,
    },
    {
      id: 3,
      from: 'Douglas',
      to: 'Gabriel',
      message: 'La no GitHub mesmo',
      time: '11:42',
      readed: true,
    },
    {
      id: 4,
      from: 'Gabriel',
      to: 'Douglas',
      message: 'Ta certo. Vou dar uma olhada :D',
      time: '11:45',
      readed: true,
    },
    {
      id: 5,
      from: 'Gabriel',
      to: 'Douglas',
      message: 'Nossa, não sei como, mas deu certinho',
      time: '13:11',
      readed: true,
    },
    {
      id: 6,
      from: 'Gabriel',
      to: 'Douglas',
      message: 'Menos mal kkkkkkkkkk',
      time: '13:11',
      readed: true,
    },
    {
      id: 7,
      from: 'Douglas',
      to: 'Gabriel',
      message: 'Nice',
      time: '13:15',
      readed: true,
    },
    {
      id: 8,
      from: 'Douglas',
      to: 'Gabriel',
      message: 'kkkkkkk',
      time: '13:15',
      readed: true,
    },
  ]);

  function RenderChatLine(data) {
    var sent;
    data.from === 'Gabriel' ? (sent = true) : (sent = false);

    return (
      <MessageLine style={{justifyContent: sent ? 'flex-end' : 'flex-start'}}>
        <Message sent={sent}>
          <MessageText sent={sent}>{data.message}</MessageText>
          <MessageTime>{data.time}</MessageTime>
        </Message>
      </MessageLine>
    );
  }

  function RenderFooter() {
    const theme = useContext(ThemeContext);
    const [message, setMessage] = useState('');
    const [lastId, setLastId] = useState(9);

    return (
      <FooterContainer>
        <CircleButton>
          <Icon name="camera" color={theme.secundaryText} size={22} />
        </CircleButton>
        <KeyboardAvoidingView behavior="padding">
          <Input
            placeholder="Digite sua mensagem"
            placeholderTextColor={theme.secundaryText}
            onChangeText={(text) => setMessage(text)}
            value={message}
          />
        </KeyboardAvoidingView>
        {message ? (
          <CircleButton
            onPress={() => {
              var newConversation = [
                ...fakeConversation,
                {
                  id: lastId + 1,
                  from: 'Gabriel',
                  to: 'Douglas',
                  message: message,
                  time: '22:30',
                  readed: true,
                },
              ];
              setConversation(newConversation);
              setLastId(lastId + 1);
              console.log(message);
            }}>
            <Icon name="send" color={theme.secundaryText} size={18} />
          </CircleButton>
        ) : (
          <CircleButton>
            <Icon name="microphone" color={theme.secundaryText} size={22} />
          </CircleButton>
        )}
        <CircleButton>
          <Icon name="more" color={theme.secundaryText} size={22} />
        </CircleButton>
      </FooterContainer>
    );
  }

  return (
    <Wrapper>
      <ChatContainer>
        <FlatList
          data={fakeConversation}
          ListHeaderComponent={() => (
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
          )}
          stickyHeaderIndices={[0]}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) => RenderChatLine(item)}
        />
      </ChatContainer>
      <View>
        <RenderFooter />
      </View>
    </Wrapper>
  );
}
