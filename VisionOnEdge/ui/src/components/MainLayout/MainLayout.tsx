import React, { FC } from 'react';
import { Grid, Segment, Image, Flex, Text } from '@fluentui/react-northstar';
import { NavLink } from 'react-router-dom';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <Grid
      columns="60px auto"
      rows="50px auto"
      design={{ height: '100vh' }}
      styles={{ justifyContent: 'stretch' }}
    >
      <TopNav />
      <LeftNav
        styles={{
          gridColumn: '1 / span 1',
          gridRow: '2 / span 1',
          boxShadow: '1px 0px 10px 0px rgba(0,0,0,0.75)',
          zIndex: 1,
        }}
      />
      <Segment styles={{ gridColumn: 'span 1', padding: '30px' }}>{children}</Segment>
    </Grid>
  );
};

const TopNav: FC = () => {
  return (
    <Flex
      space="between"
      vAlign="center"
      padding="padding.medium"
      styles={{
        backgroundColor: '#0094d8',
        gridColumn: '1 / span 2',
        boxShadow: '0px 1px 10px 0px rgba(0,0,0,0.75)',
        zIndex: 2,
        fontSize: '20px',
        paddingLeft: '1em',
      }}
    >
      <NavLink to={'/'} style={{ textDecoration: 'none' }}>
        <Text color="white">Vision on Edge</Text>
      </NavLink>
      <Flex vAlign="center" space="evenly" styles={{ height: '100%' }}>
        <Image styles={{ height: '100%' }} src="/icons/setting.png" />
        <Text color="white">User</Text>
      </Flex>
    </Flex>
  );
};

// const TopNav: FC = () => (
//   <Segment
//     color="brand"
//     content="Vision On Edge" // consider using Flex for the topnav
//     inverted
//     styles={{
//       gridColumn: '1 / span 2',
//       boxShadow: '0px 1px 10px 0px rgba(0,0,0,0.75)',
//       zIndex: 2,
//       padding: 0,
//       fontSize: '20px',
//       display: 'flex',
//       alignItems: 'center',
//       paddingLeft: '1em',
//     }}
//   />
// );

const LeftNav = ({ styles }): JSX.Element => {
  return (
    <Segment color="grey" inverted styles={{ ...styles, padding: 0, paddingTop: '1em' }}>
      <Flex column gap="gap.large" hAlign="center">
        <NavItem src="/icons/location.png" to="/location"></NavItem>
        <NavItem src="/icons/camera.png" to="/cameras"></NavItem>
        <NavItem src="/icons/part.png" to="/parts"></NavItem>
        <NavItem src="/icons/manual.png" to="/manual"></NavItem>
      </Flex>
    </Segment>
  );
};

const NavItem = ({ src, to }): JSX.Element => {
  return (
    <NavLink
      to={to}
      style={{ display: 'flex', justifyContent: 'center', padding: '0.8em' }}
      activeStyle={{ backgroundColor: 'rgba(250, 83, 5, 0.5)' }}
    >
      <Image src={src} design={{ width: '100%' }}></Image>
    </NavLink>
  );
};
