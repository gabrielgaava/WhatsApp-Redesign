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
  flex: 1;
  padding-top: 10px;
`;

export const SentMessage = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px 20px;
`;

export const RecivedMessage = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 20px;
`;

export const To = styled.View`
  flex: 1;
  max-width: 320px;
  justify-content: flex-end;
  background: ${(props) => props.theme.primary};
  padding: 15px 30px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const From = styled.View`
  flex: 1;
  max-width: 320px;
  background: ${(props) => props.theme.lightBackground};
  padding: 15px 20px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const SentText = styled.Text`
  font-family: 'SF-Pro-Display-Medium';
  color: ${(props) => props.theme.whiteText};
  font-size: 16px;
`;

export const RecivedText = styled.Text`
  font-family: 'SF-Pro-Display-Medium';
  color: ${(props) => props.theme.secundaryText};
  font-size: 16px;
`;