import styled from 'styled-components/native';

export const AvatarShape = styled.ImageBackground`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

export const OnlineDot = styled.View`
  opacity: ${(props) => (props.show ? 1 : 0)};
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 11px;
  background: ${(props) => props.theme.primary};
  right: -5px;
  bottom: -5px;
  border: solid 5px ${(props) => props.theme.background};
`;
