import styled from 'styled-components/native';

export const StatusContainer = styled.View`
  padding-left: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom-color: ${(props) => props.theme.lightBackground};
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
