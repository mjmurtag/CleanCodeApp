import * as React from 'react';
import { SafeAreaView, Image, Text } from 'react-native';

import { connect } from 'react-redux';

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
        <Text style={styles.text}>When hand-washing was ﬁrst recommended to physicians
        by Ignaz Semmelweis in 1847, it was rejected on the basis that doctors were too
         busy and wouldn’t have time to wash their hands between patient visits.</Text>
        <Text style={styles.connectingText}>You have time to write clean code.</Text>
        <Text></Text>
        <Text style={styles.connectingText}>Bjarne Stroustrup, inventor of C++ says:</Text>
        <Text style={styles.text}>
        "I like my code to be elegant and efﬁcient. The
        logic should be straightforward to make it hard
        for bugs to hide, the dependencies minimal to
        ease maintenance, error handling complete
        according to an articulated strategy, and performance close to optimal so as not to tempt
        people to make the code messy with unprincipled optimizations. Clean code does one thing
        well." </Text>
        <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../../assets/images/mess.png')}
          />
      </SafeAreaView>
    );
  }
}
export module CleanCode{}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const cleanCodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CleanCode);

export default cleanCodeContainer;
