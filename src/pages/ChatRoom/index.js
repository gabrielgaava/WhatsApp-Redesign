import React from 'react';
import {FlatList} from 'react-native';
import {Wrapper, Page, PageName, Header} from '../../styles/global';
import {StatusContainer} from './styles';

// Componentes
import Icon from '../../styles/icons';
import ChatCard from '../../components/ChatCard';
import Status from '../../components/Status';

export default function ChatRoom({ route }) {

  const {conversation} = route.params;

  return (
    <Wrapper>
      <Page>
        <PageName>{conversation.user}</PageName>
      </Page>
    </Wrapper>
  );
}