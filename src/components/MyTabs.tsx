import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {User} from '../screens/Signed/User';
import {ShoppingCart} from '../screens/Signed/ShoppingCart';
import HomeIcon from '../assets/icons/homePage.svg';
import ShoppingCartIcon from '../assets/icons/shoppingCartIcon.svg';
import UserIcon from '../assets/icons/userIcon.svg';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => ({
          tabBarShowLabel: false,
          tabBarIcon: () => <HomeIcon />,
        })}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={() => ({
          tabBarShowLabel: false,
          tabBarIcon: () => <ShoppingCartIcon />,
        })}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={() => ({
          tabBarShowLabel: false,
          tabBarIcon: () => <UserIcon />,
        })}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
