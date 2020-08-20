/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, Circle, Avatar, StatusName} from './styles';
import LinearGradient from 'react-native-linear-gradient';

// Components
import Icon from '../../styles/icons';

export default function Status({data}) {
  if (data.id > 0) {
    return (
      <Container>
        {data.isNew ? (
          <LinearGradient
            colors={['#5CE27F', '#5CABE2']}
            style={{
              width: 74,
              height: 74,
              borderRadius: 40,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Avatar source={{uri: data.url}} imageStyle={{borderRadius: 40}} />
          </LinearGradient>
        ) : (
          <Circle>
            <Avatar source={{uri: data.url}} imageStyle={{borderRadius: 40}} />
          </Circle>
        )}
        <StatusName>{data.user}</StatusName>
      </Container>
    );
  } else {
    return (
      <Container>
        <LinearGradient
          colors={['#5CE27F', '#5CABE2']}
          style={{
            width: 74,
            height: 74,
            borderRadius: 40,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="plus" size={20} color="#FFF" />
        </LinearGradient>
        <StatusName>{data.user}</StatusName>
      </Container>
    );
  }
}
