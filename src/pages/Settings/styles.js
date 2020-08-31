import styled from 'styled-components/native';

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: 20px;
`;

export const Status = styled.Text`
  font-family: 'SF-Pro-Display-Regular'
  font-size: 15px;
  font-weight: 300;
  color: ${(props) => props.theme.spanText};
`;

export const SettingsRow = styled.TouchableOpacity`
  padding: 20px 20px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SettingsName = styled.Text`
  font-family: 'SF-Pro-Display-Bold';
  color: ${(props) => props.theme.primaryText};
  font-size: 20px;
`;

export const Description = styled.Text`
  font-family: 'SF-Pro-Display-Regular';
  color: ${(props) => props.theme.spanText};
  font-size: 15px;
`;