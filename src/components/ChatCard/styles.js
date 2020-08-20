import styled from 'styled-components/native';

export const Touchable = styled.TouchableNativeFeedback``;

export const Container = styled.View`
  border-bottom-color: ${(props) => props.theme.lightBackground};
  border-bottom-width: 2px;
  padding: 20px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.View`
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
  flex: 1;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Avatar = styled.ImageBackground`
  width: 80px;
  height: 80px;
`;

export const OnlineDot = styled.View`
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 11px;
  background: ${(props) => props.theme.primary};
  right: 0px;
  bottom: 0px;
  border: solid 5px ${(props) => props.theme.background};
`;

export const UserName = styled.Text`
  font-family: 'SF-Pro-Display-Bold';
  color: ${(props) => props.theme.primaryText};
  font-size: 16px;
`;

export const Message = styled.Text`
  font-family: 'SF-Pro-Display-Regular';
  font-size: 16px;
  color: ${(props) => props.theme.spanText};
  max-width: 210px;
`;

export const Time = styled.Text`
  font-family: 'SF-Pro-Display-Regular';
  font-size: 14px;
  color: ${(props) => props.theme.spanText};
  text-transform: uppercase;
`;

export const Dot = styled.Text`
  background: ${(props) => props.theme.primary};
  width: 22px;
  height: 22px;
  font-family: 'SF-Pro-Display-Bold';
  font-size: 14px;
  text-align: center;
  line-height: 20px;
  color: ${(props) => props.theme.whiteText};
  border-radius: 11px;
`;
