import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screen/home/Home';
import {Blank} from '../screen/blank/Blank';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from '../theme/theme';

const Tab = createBottomTabNavigator();

export const RootRouter = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => {
          return {
            headerShown: false,
            tabBarActiveTintColor: theme.colors.mainBlue,
            tabBarInactiveTintColor: theme.colors.darkGray,
            tabBarBadgeStyle: {
              backgroundColor: theme.colors.mediumRed,
              color: theme.colors.whiteText,
            },
            tabBarIcon: ({color, size}) => {
              let iconName = 'Home';
              let IconComp = Ionicons;

              if (route.name === 'Home') {
                iconName = 'home-outline';
              } else if (route.name === 'Portfolio') {
                iconName = 'pie-chart-outline';
              } else if (route.name === 'Invest') {
                IconComp = Feather;
                iconName = 'arrow-down-circle';
              } else if (route.name === 'Wallet') {
                iconName = 'wallet-outline';
              } else if (route.name === 'More') {
                iconName = 'ellipsis-horizontal-outline';
              }

              return <IconComp name={iconName} size={size} color={color} />;
            },
          };
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Portfolio" component={Blank} />
        <Tab.Screen name="Invest" component={Blank} />
        <Tab.Screen name="Wallet" component={Blank} />
        <Tab.Screen name="More" component={Blank} options={{tabBarBadge: 1}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
