import styled from 'styled-components/native';

// Header

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex: 1;
`;

export const Right = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
`;

export const Column = styled.View`
  flex-direction: column;
  padding-left: 20px;
`;

export const UserName = styled.Text`
  font-family: 'SF-Pro-Display-Bold';
  color: ${(props) => props.theme.primaryText};
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Status = styled.Text`
  font-family: 'SF-Pro-Display-Bold';
  color: ${(props) => props.theme.spanText};
  font-size: 13px;
`;

export const Action = styled.TouchableOpacity`
  padding-left: 20px;
`;

// Messages

export const ChatContainer = styled.View`
  padding-bottom: 70px;
`;

export const MessageLine = styled.View`
  flex-direction: row;
  padding: 10px 20px;
  margin-bottom: 0px;
`;

export const Message = styled.View`
  width: auto;
  max-width: 320px;
  background: ${(props) =>
    props.sent ? props.theme.blackPrimary : props.theme.lightBackground};
  padding: 15px 12px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: ${(props) => (props.sent ? '10px' : '0px')};
  border-bottom-right-radius: ${(props) => (props.sent ? '0px' : '10px')};
`;

export const MessageText = styled.Text`
  font-family: 'SF-Pro-Display-Medium';
  color: ${(props) =>
    props.sent ? props.theme.whiteText : props.theme.secundaryText};
  font-size: 16px;
  padding-right: 30px;
`;

export const MessageTime = styled.Text`
  font-family: 'SF-Pro-Display-Regular';
  color: ${(props) => props.theme.secundaryText};
  font-size: 13px;
  position: absolute;
  right: 2px;
  bottom: 2px;
`;

// Footer

export const FooterContainer = styled.View`
  position: absolute;
  bottom: 0;
  flex: 1;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const Input = styled.TextInput`
  height: 45px;
  width: 180px;
  border-radius: 200px;
  border: solid 1px ${props => props.theme.invertBackground};
  padding: 0px 20px;
  color: ${props => props.theme.primaryText};
`;

export const CircleButton = styled.TouchableOpacity`
  border: solid 1px ${props => props.theme.invertBackground};
  width: 45px;
  height: 45px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;