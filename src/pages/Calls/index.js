import React, {useContext} from 'react';
import {FlatList, Text} from 'react-native';
import {Wrapper, Page, PageName, Header} from '../../styles/global';
import {ThemeContext} from 'styled-components';
import {
  Container,
  Avatar,
  Column,
  Row,
  UserName,
  Time,
  Dot,
  Message,
} from './styles';

// Componentes
import Icon from '../../styles/icons';

function Call(data) {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <Avatar
        source={{uri: data.user.picture}}
        imageStyle={{borderRadius: 40}}
      />
      <Column>
        <Row justify="space-between">
          <UserName>{data.user.name}</UserName>
          <Time>{data.time}</Time>
        </Row>
        <Row justify="flex-start">
          <Icon name={data.icon} size={15} color={theme.secundaryText} />
          <Message>{data.status}</Message>
        </Row>
      </Column>
    </Container>
  );
}

export default function Calls() {
  const fakeCalls = [
    {
      id: 1,
      time: '02:40',
      user: {
        name: 'Douglas Médio',
        picture:
          'https://avatars1.githubusercontent.com/u/44115390?s=400&u=11940bbb0cb31d212879f6c01a20a9be25c8e26f&v=4',
      },
      status: 'Missed Call',
      icon: 'phone',
    },
    {
      id: 2,
      time: '02:11',
      user: {
        name: 'Moyzes',
        picture:
          'https://avatars2.githubusercontent.com/u/20179512?s=400&u=55d0cc9b4267de1f284a32ee091803a3b0a0c92a&v=4',
      },
      status: 'Call',
      icon: 'phone',
    },
    {
      id: 3,
      time: 'Yesterday',
      user: {
        name: 'Blue 💙💙',
        picture:
          'https://scontent.fsjp4-1.fna.fbcdn.net/v/t1.0-9/100798567_3444082062288071_5227297411973513216_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=Z-0ojNpoygUAX9di79e&_nc_ht=scontent.fsjp4-1.fna&oh=09446566bd08015d21d90bfe853a18c4&oe=5F62E558',
      },
      status: 'FaceTime',
      icon: 'video-camera',
    },
  ];

  return (
    <Wrapper>
      <FlatList
        data={fakeCalls}
        ListHeaderComponent={() => (
          <Header>
            <PageName>Calls</PageName>
            <Icon name="plus" size={20} color="#5CE27F" />
          </Header>
        )}
        renderItem={({item}) => Call(item)}
      />
    </Wrapper>
  );
}
