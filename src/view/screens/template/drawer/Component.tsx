import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';

import styles from './styles';

export interface Props {
  name: string;
}

interface State {
  name: string;
}

class Drawer extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Drawer Menu</Text>
      </SafeAreaView>
    );
  }
}

export default Drawer;
