import * as React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { SCREENS } from '../../constants/screen';

import * as Splash from './template/splash';
import * as Home from './template/home';
import * as Settings from './template/settings';
import * as Drawer from './template/drawer';
import * as Dummy from './template/dummy';
import * as CleanCodePage from './why clean code/CleanCodePage';
import * as NamingPage from './meaningful names/NamingPage';
import * as FunctionsPage from './a guide on functions/FunctionsPage';
import * as ClassesPage from './a guide on classes/ClassesPage';
import * as UnitTestsPage from './unit tests prevent mistakes/UnitTestsPage';

const registerComponentWithRedux = (redux: any) => (
  name: string,
  screen: any,
) => {
  Navigation.registerComponent(
    name,
    () => (props: any) => (
      <Provider store={redux.store}>
        <screen.default {...props} />
      </Provider>
    ),
    () => screen.default);
};

export function registerScreens(redux: any) {
  registerComponentWithRedux(redux)(SCREENS.Splash, Splash);
  registerComponentWithRedux(redux)(SCREENS.Home, Home);
  registerComponentWithRedux(redux)(SCREENS.Settings, Settings);
  registerComponentWithRedux(redux)(SCREENS.Drawer, Drawer);
  registerComponentWithRedux(redux)(SCREENS.Dummy, Dummy);
  registerComponentWithRedux(redux)(SCREENS.CleanCode, CleanCodePage);
  registerComponentWithRedux(redux)(SCREENS.Naming, NamingPage);
  registerComponentWithRedux(redux)(SCREENS.Functions, FunctionsPage);
  registerComponentWithRedux(redux)(SCREENS.Classes, ClassesPage);
  registerComponentWithRedux(redux)(SCREENS.UnitTests, UnitTestsPage);
}
