import * as eva from "@eva-design/eva";
import { View, SafeAreaView } from "react-native";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
  BottomNavigation,
  BottomNavigationTab,
} from "@ui-kitten/components";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import MapScreen from "./screens/MapScreen";
import FeedScreen from "./screens/FeedScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import StatsScreen from "./screens/StatsScreen";
import ProfileScreen from "./screens/ProfileScreen";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="MAP" />
    <BottomNavigationTab title="FEED" />
    <BottomNavigationTab title="ADD" />
    <BottomNavigationTab title="STATS" />
    <BottomNavigationTab title="PROFILE" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
    tabBar={(props) => <BottomTabBar {...props} />}
  >
    <Screen name="Map" component={MapScreen} />
    <Screen name="Feed" component={FeedScreen} />
    <Screen name="Add" component={CreatePostScreen} />
    <Screen name="Stats" component={StatsScreen} />
    <Screen name="Profile" component={ProfileScreen} />
  </Navigator>
);

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Layout style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
              <TabNavigator />
            </NavigationContainer>
          </SafeAreaView>
        </Layout>
      </ApplicationProvider>
    </>
  );
}
