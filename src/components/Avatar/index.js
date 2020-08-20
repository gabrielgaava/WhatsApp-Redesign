import React from 'react';
import {AvatarShape, OnlineDot} from './styles';

export default function Avatar({url, size, online}) {
  return (
    <AvatarShape
      style={{width: size, height: size}}
      imageStyle={{borderRadius: size / 2}}
      source={{uri: url}}>
      <OnlineDot show={online}/>
    </AvatarShape>
  );
}
