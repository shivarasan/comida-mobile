import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import AuthScreen from "./src/screens/Auth/Auth";

const navigator = createStackNavigator(
  {
    Auth: AuthScreen,
  },
  {
    initialRouteName: "Auth",
    defaultNavigationOptions: {
      title: "Comida 5G",
    },
  }
);

export default createAppContainer(navigator);
