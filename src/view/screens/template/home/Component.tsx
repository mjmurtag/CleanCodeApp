import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { StyleSheet, SafeAreaView, TouchableOpacity, Image, Dimensions, View, Text } from 'react-native';

import router from '../../../../navigators/router';
import { BUTTON_DEFAULT } from '../../../elements/buttons';
import styles from './styles';

export interface Props {
  name: string;
  componentId: string;
}

interface State {
  name: string;
}

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      name: props.name || 'Redux + TypeScript + React Native Navigation',
    };
  }

  componentDidMount() { }

  showBurgerMenu() {
    Navigation.mergeOptions('drawerComponentId', {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  }

  showPushScreen = () => {
    const { componentId } = this.props;
    router.showPushScreen({
      componentId,
      passProps: {
        dummyText: 'Hello from Home !!!',
      },
    });
  }

  render() {

    const { name } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={this.showBurgerMenu}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../../../assets/images/burger-menu.png')}
          />
        </TouchableOpacity>
        <Text>{name}</Text>
        <BUTTON_DEFAULT onClick={this.showPushScreen} title={'Push Screen'} style={styles.button} />
      </SafeAreaView>
    );
  }
}
export default Home;
