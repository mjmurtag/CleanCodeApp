import * as React from 'react';
import { View, Image, SafeAreaView, Text } from 'react-native';

import { tabbedNavigation } from '../../../../navigators/navigation';
import styles from './styles';
import { BUTTON_DEFAULT } from '../../../elements/buttons';

export interface Props {
  splashLaunched: Function;
}

interface State {}

class Splash extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { splashLaunched } = this.props;
    splashLaunched();
  }

  navigateToHome = () => {
    tabbedNavigation();
  }

  render() {
    const intro = 'Spending time keeping your code clean is not just cost effective; it’s a matter of professional survival.';
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../../../assets/images/CleanCode.png')}
          />
          <Text
            style={styles.text}
          >
            {intro}
          </Text>
          <BUTTON_DEFAULT
            style={styles.enterButton}
            title="Continue To App"
            onClick={this.navigateToHome}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Splash;
