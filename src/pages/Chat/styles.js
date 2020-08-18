import styled from 'styled-components/native';

export const StatusContainer = styled.View`
  padding-left: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom-color: ${props => props.theme.lightBackground};
  border-bottom-width: 2px;
`;

export const Column = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-right: 20px;
`;

export const Status = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background: ${props => props.theme.lightBackground};
  margin-bottom: 10px;
`;

export const StatusName = styled.Text`
  color: ${(props) => props.theme.spanText};
  font-family: 'SF-Pro-Display-Regular';
  font-weight: 500;
  font-size: 13px;
  text-align: center;
`;