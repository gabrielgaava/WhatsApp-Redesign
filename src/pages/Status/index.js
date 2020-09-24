import React from 'react';
import {View, Text} from 'react-native';
import {Image, Bar, UserName} from './styles';

export default function Status({params}) {
  return (
    <View>
      <Bar />
      <Text>Página de Status</Text>
      <Image />
      <UserName>UserName Here</UserName>
      <Text>Legenda aqui .... </Text>yar
    </View>
  );
}
