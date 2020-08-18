import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: ${(props) => props.theme.background};
  height: 100%;
`;

export const PageName = styled.Text`
  color: ${props => props.theme.primaryText};
`;