import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';

import styles from './styles';

export interface Props {
  dummyText: string;
  componentId: string;
}

interface State {
  name: string;
}

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { dummyText } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <Text>This Screen has been pushed over Home screen</Text>
        <Text>Prop passed: {dummyText}</Text>
      </SafeAreaView>
    );
  }
}

export default Home;
