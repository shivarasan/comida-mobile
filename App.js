import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import AuthScreen from "./src/screens/Auth/Auth";
import HomeScreen from "./src/screens/Home/Home";

const navigator = createStackNavigator(
  {
    Auth: AuthScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: "Auth",
    defaultNavigationOptions: {
      title: "",
    },
  }
);

export default createAppContainer(navigator);
