import {Button, Text} from 'native-base';
import React from 'react';
import { Auth } from './auth/Auth';

export const Login = (props: any) => {
  const {navigation} = props;

  return (
    <>
      {/* <Text>Iniciar Sesion</Text>
      <Button onPress={() => navigation.navigate('Signed')}>Go signed</Button> */}
      <Auth />
    </>
  );
};
