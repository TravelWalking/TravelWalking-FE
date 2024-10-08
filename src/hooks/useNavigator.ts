// useNavigator.ts
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackParamList } from '../navigation/StackNavigator';
import { TabParamList } from '../navigation/BottomTabNavigator';

const useNavigator = () => {
  const stackNavigation = useNavigation<NavigationProp<StackParamList>>();
  const tabNavigation = useNavigation<NavigationProp<TabParamList>>();

  return { stackNavigation, tabNavigation };
};

export default useNavigator;
