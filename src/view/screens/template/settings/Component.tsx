import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';

import styles from './styles';

export interface Props {}

interface State {}

class Settings extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Settings</Text>
      </SafeAreaView>
    );
  }
}

export default Settings;
