import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {Wrapper, PageName, Header, Page} from '../../styles/global';
import {
  Row,
  Column,
  Status,
  SettingsRow,
  SettingsName,
  Description,
  From,
  Facebook,
} from './styles';

import Avatar from '../../components/Avatar';
import Icon from '../../styles/icons';

export default function Settings() {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header>
        <Row>
          <Avatar
            url="https://avatars0.githubusercontent.com/u/31636577?s=460&u=ed5942559f26a469f0532e1b89649d5760fd33ef&v=4"
            size={70}
          />
          <Column>
            <PageName>Gabriel Gava</PageName>
            <Status>Your settings</Status>
          </Column>
          <Icon name="qrcode" size={20} color={theme.secundaryText} />
        </Row>
      </Header>
      <Page>
        <SettingsRow>
          <Icon name="user" size={30} color={theme.spanText} />
          <Column>
            <SettingsName>Your Account</SettingsName>
            <Description>Privacy, security, change password</Description>
          </Column>
        </SettingsRow>
        <SettingsRow>
          <Icon name="conversation" size={30} color={theme.spanText} />
          <Column>
            <SettingsName>Conversations</SettingsName>
            <Description>Theme, wallpapers, history</Description>
          </Column>
        </SettingsRow>
        <SettingsRow>
          <Icon name="notification" size={30} color={theme.spanText} />
          <Column>
            <SettingsName>Notifications</SettingsName>
            <Description>Messages, ringtones and calls</Description>
          </Column>
        </SettingsRow>
        <SettingsRow>
          <Icon name="pie-chart" size={30} color={theme.spanText} />
          <Column>
            <SettingsName>Data usage and storage</SettingsName>
            <Description>Network usage, automatic downloads</Description>
          </Column>
        </SettingsRow>
        <SettingsRow>
          <Icon name="help" size={30} color={theme.spanText} />
          <Column>
            <SettingsName>Help</SettingsName>
            <Description>FAQ, talk with us, policy</Description>
          </Column>
        </SettingsRow>
        <From>from</From>
        <Facebook>FACEBOOK</Facebook>
      </Page>
    </Wrapper>
  );
}
