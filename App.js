import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import AuthScreen from "./src/screens/Auth/Auth";
import HomeScreen from "./src/screens/Home/Home";
import CartScreen from "./src/screens/Card/Card";

const navigator = createStackNavigator(
  {
    Auth: AuthScreen,
    Home: HomeScreen,
    Cart: CartScreen,
  },
  {
    initialRouteName: "Auth",
    defaultNavigationOptions: {
      title: "",
    },
  }
);

export default createAppContainer(navigator);
