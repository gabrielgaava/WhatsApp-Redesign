import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {Wrapper, PageName, Header} from '../../styles/global';
import {StatusContainer, Status, StatusName, Column} from './styles';

import Icon from '../../styles/icons';

const RenderStatus = ({ item }) => {
  return (
    <Column>
      <Status />
      <StatusName>{item.user}</StatusName>
    </Column>
  );
}

export default function Chat() {

  const fakeStatus = [
    {id: 1, user: 'Novo Status', url: 'https://www.zanolliovens.com/wp-content/uploads/2016/04/default-placeholder.png'},
    {id: 2, user: 'Jader ❤', url: 'https://www.zanolliovens.com/wp-content/uploads/2016/04/default-placeholder.png'},
    {id: 3, user: 'Moyzes', url: 'https://www.zanolliovens.com/wp-content/uploads/2016/04/default-placeholder.png'},
    {id: 4, user: 'Bluee', url: 'https://www.zanolliovens.com/wp-content/uploads/2016/04/default-placeholder.png'},
    {id: 5, user: 'Gabriel P.', url: 'https://www.zanolliovens.com/wp-content/uploads/2016/04/default-placeholder.png'},
    {id: 6, user: 'Amanda Nunes', url: 'https://www.zanolliovens.com/wp-content/uploads/2016/04/default-placeholder.png'},
  ];

  return (
    <Wrapper>
      <Header>
        <PageName>Chat</PageName>
        <Icon name="new-group" size={35} color="#5CE27F" />
      </Header>
      <StatusContainer>
        <FlatList
          horizontal
          data={fakeStatus}
          keyExtractor={item => item.id}
          renderItem={RenderStatus}
        />
      </StatusContainer>
    </Wrapper>
  );
}
