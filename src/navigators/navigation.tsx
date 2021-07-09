/**
 * Application navigation stacks to be defined here.
 */
import { Navigation } from 'react-native-navigation';

import { SCREENS } from '../constants/screen';
import { TYPOGRAPHY } from '../view/styles/typography';

export const showSplash = () => {
  Navigation.setRoot({
    root: {
      component: { name: SCREENS.Splash },
    },
  });
};
const cleanCodeIcon = '../view/assets/images/tabbar/icons8-dispenser-50.png';
const nameIcon = '../view/assets/images/tabbar/icons8-name-tag-50.png';
const functionIcon = '../view/assets/images/tabbar/icons8-function-mac-50.png';
const classIcon = '../view/assets/images/tabbar/icons8-class-50.png';
const unitTestIcon = '../view/assets/images/tabbar/icons8-test-50.png';

export const tabbedNavigation = () =>
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: SCREENS.Drawer,
            id: 'drawerComponentId',
          },
        },
        center: {
          bottomTabs: {
            id: 'BottomTabsId',
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: SCREENS.CleanCode,
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      visible: false,
                      drawBehind: true,
                      animate: true,
                    },
                    bottomTab: {
                      text: 'Why Clean Code?',
                      fontSize: 14,
                      textColor: TYPOGRAPHY.COLOR.Primary,
                      selectedTextColor: TYPOGRAPHY.COLOR.Warning,
                      selectedIconColor: TYPOGRAPHY.COLOR.Warning,
                      icon: require(cleanCodeIcon),
                      selectedIcon: require(cleanCodeIcon),
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: SCREENS.Naming,
                        passProps: {
                          text: 'This is Home',
                        },
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      visible: false,
                      drawBehind: true,
                      animate: true,
                    },
                    bottomTab: {
                      fontSize: 14,
                      text: 'Naming',
                      textColor: TYPOGRAPHY.COLOR.Primary,
                      selectedTextColor: TYPOGRAPHY.COLOR.Warning,
                      selectedIconColor: TYPOGRAPHY.COLOR.Warning,
                      icon: require(nameIcon),
                      selectedIcon: require(nameIcon),
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: SCREENS.Functions,
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      visible: false,
                      drawBehind: true,
                      animate: true,
                    },
                    bottomTab: {
                      text: 'Functions',
                      fontSize: 14,
                      textColor: TYPOGRAPHY.COLOR.Primary,
                      selectedTextColor: TYPOGRAPHY.COLOR.Warning,
                      selectedIconColor: TYPOGRAPHY.COLOR.Warning,
                      icon: require(functionIcon),
                      selectedIcon: require(functionIcon),
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: SCREENS.Classes,
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      visible: false,
                      drawBehind: true,
                      animate: true,
                    },
                    bottomTab: {
                      text: 'Classes',
                      fontSize: 14,
                      textColor: TYPOGRAPHY.COLOR.Primary,
                      selectedTextColor: TYPOGRAPHY.COLOR.Warning,
                      selectedIconColor: TYPOGRAPHY.COLOR.Warning,
                      icon: require(classIcon),
                      selectedIcon: require(classIcon),
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: SCREENS.UnitTests,
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      visible: false,
                      drawBehind: true,
                      animate: true,
                    },
                    bottomTab: {
                      text: 'Unit Tests',
                      fontSize: 14,
                      textColor: TYPOGRAPHY.COLOR.Primary,
                      selectedTextColor: TYPOGRAPHY.COLOR.Warning,
                      selectedIconColor: TYPOGRAPHY.COLOR.Warning,
                      icon: require(unitTestIcon),
                      selectedIcon: require(unitTestIcon),
                    },
                  },
                },
              },
            ],
          },
        },
      },
    },
  });

export default tabbedNavigation;
