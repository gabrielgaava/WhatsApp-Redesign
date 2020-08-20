import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: ${(props) => props.theme.background};
  height: 100%;
`;

export const Page = styled.ScrollView``;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom-color: ${(props) => props.theme.lightBackground};
  border-bottom-width: 2px;
`;

export const PageName = styled.Text`
  color: ${(props) => props.theme.primaryText};
  font-family: 'SF-Pro-Display-Bold';
  font-weight: 500;
  font-size: 30px;
`;
