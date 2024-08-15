import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CommunityScreen from '../screens/CommunityScreen';
import MypageScreen from '../screens/MypageScreen';
import SearchBox from '../components/SearchBox';

import HomeIcon from '../assets/icon/ic_home.svg';
import CommunityIcon from '../assets/icon/ic_community.svg';
import MypageIcon from '../assets/icon/ic_mypage.svg';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName: string, focused: boolean) => {
  let IconComponent;
  let color = focused ? '#2B2972' : '#939393';

  switch (routeName) {
    case '산책 기록':
      IconComponent = HomeIcon;
      break;
    case '커뮤니티':
      IconComponent = CommunityIcon;
      break;
    case '마이페이지':
      IconComponent = MypageIcon;
      break;
    default:
      IconComponent = null;
  }

  return IconComponent ? <IconComponent width={26} height={26} color={color} /> : null;
};



function BottomTabNavigator() {
  return (
    <View style={styles.tabContainer}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => getTabBarIcon(route.name, focused),
          tabBarActiveTintColor: '#50555c',
          tabBarInactiveTintColor: '#939393',
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIconStyle: {
            marginTop: 5,
          },
        })}
      >
        <Tab.Screen 
          name="산책 기록" 
          component={HomeScreen}
          options={{
            header: () => <SearchBox />,
          }} 
        />
        <Tab.Screen name="커뮤니티" component={CommunityScreen} />
        <Tab.Screen name="마이페이지" component={MypageScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    backgroundColor: '#fff', // 배경색 설정
  },
  tabBar: {
    backgroundColor: '#fff',
    paddingBottom: 10,
    paddingTop: 10,
    height: 80,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 10,
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'inter-VariableFont_slnt,wght',
  },
  icon: {
    width: 26,
    height: 26,
  },
});

export default BottomTabNavigator;
