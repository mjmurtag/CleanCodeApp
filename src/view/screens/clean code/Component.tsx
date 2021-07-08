import * as React from 'react';
import { SafeAreaView, Image, Text } from 'react-native';

import styles from './styles';

export interface Props {}

interface State {}

class CleanCode extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>The total cost of owning a mess</Text>
        <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../../assets/images/mess.png')}
          />
      </SafeAreaView>
    );
  }
}

export default CleanCode;
