import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

export const Circle = styled.View`
  width: 74px;
  height: 74px;
  border-radius: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.ImageBackground`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background: ${(props) => props.theme.red};
  border: solid 4px ${(props) => props.theme.background};
`;

export const StatusName = styled.Text`
  color: ${(props) => props.theme.spanText};
  font-family: 'SF-Pro-Display-Regular';
  font-weight: 500;
  font-size: 13px;
  text-align: center;
  margin-top: 10px;
`;
