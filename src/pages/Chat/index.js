import React from 'react';
import {FlatList} from 'react-native';
import {Wrapper, Page, PageName, Header} from '../../styles/global';
import {StatusContainer} from './styles';

// Componentes
import Icon from '../../styles/icons';
import ChatCard from '../../components/ChatCard';
import Status from '../../components/Status';

export default function Chat() {
  const fakeStatus = [
    {
      id: -1,
      user: 'Novo Status',
      isNew: true,
      url:
        'https://www.zanolliovens.com/wp-content/uploads/2016/04/default-placeholder.png',
    },
    {
      id: 2,
      user: 'ThiaGOD 💻',
      isNew: true,
      url:
        'https://avatars1.githubusercontent.com/u/22421107?s=400&u=e13d7908fa293576e964a4bc70558d3309a7bd8c&v=4',
    },
    {
      id: 3,
      user: 'Moyzes',
      isNew: true,
      url:
        'https://avatars2.githubusercontent.com/u/20179512?s=400&u=55d0cc9b4267de1f284a32ee091803a3b0a0c92a&v=4',
    },
    {
      id: 4,
      user: 'Diego 🚀🚀',
      isNew: false,
      url:
        'https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4',
    },
    {
      id: 5,
      user: 'Vinicius Barretos.',
      isNew: false,
      url:
        'https://avatars0.githubusercontent.com/u/40036992?s=400&u=77109139e64227c3f216d6ca95ccb2655455e4cc&v=4',
    },
    {
      id: 6,
      user: 'Douglão',
      isNew: false,
      url:
        'https://avatars2.githubusercontent.com/u/38235074?s=400&u=b80758d9ba4e3d93b385c70c774d7196138ea1f9&v=4',
    },
  ];

  const fakeConversation = [
    {
      id: 1,
      user: {
        online: true,
        name: 'Douglas Médio',
        picture:
          'https://avatars1.githubusercontent.com/u/44115390?s=400&u=11940bbb0cb31d212879f6c01a20a9be25c8e26f&v=4',
      },
      message: 'O que eu acho mais fácil e "ok" é, quando o usuário...',
    },
    {
      id: 2,
      user: {
        online: false,
        name: 'Moyzes',
        picture:
          'https://avatars2.githubusercontent.com/u/20179512?s=400&u=55d0cc9b4267de1f284a32ee091803a3b0a0c92a&v=4',
      },
      message: 'Se ta bem bebe ?',
    },
    {
      id: 3,
      user: {
        online: false,
        name: 'Blue 💙💙',
        picture:
          'https://scontent.fsjp4-1.fna.fbcdn.net/v/t1.0-9/100798567_3444082062288071_5227297411973513216_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=Z-0ojNpoygUAX9di79e&_nc_ht=scontent.fsjp4-1.fna&oh=09446566bd08015d21d90bfe853a18c4&oe=5F62E558',
      },
      message: 'Você vai pedir açai DE NOVO MENINO ?!',
    },
    {
      id: 4,
      user: {
        online: false,
        name: 'Jarder',
        picture:
          'https://imaginesd.com.br/imgs/jarder.jpg',
      },
      message: 'O endócrino mediu minha altura, ainda tenho 1,89 😱',
    },
    {
      id: 5,
      user: {
        online: false,
        name: 'ThiaGOD 💻',
        picture:
          'https://avatars1.githubusercontent.com/u/22421107?s=400&u=e13d7908fa293576e964a4bc70558d3309a7bd8c&v=4',
      },
      message: 'Boa noite, dorme bem.',
    },
  ];

  return (
    <Wrapper>
      <Page>
        <Header>
          <PageName>Chat</PageName>
          <Icon name="new-group" size={35} color="#5CE27F" />
        </Header>
        <StatusContainer>
          <FlatList
            horizontal
            data={fakeStatus}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({item, index}) => <Status data={item} />}
          />
        </StatusContainer>
        <FlatList
          data={fakeConversation}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) => <ChatCard data={item} />}
        />
      </Page>
    </Wrapper>
  );
}
