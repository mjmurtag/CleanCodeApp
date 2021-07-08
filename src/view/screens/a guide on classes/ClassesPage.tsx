import * as React from 'react';
import { SafeAreaView, Image, Text } from 'react-native';

import { connect } from 'react-redux';

import sharedStyles from '../../styles/sharedStyles';

export interface Props {}

interface State {}

class Classes extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={sharedStyles.container}>
        <Text style={sharedStyles.title}>Small!</Text>
        <Text style={sharedStyles.text}>The ﬁrst rule of functions is that they should be small.
        The second rule of functions is they should be smaller than that.
        This is not an assertion that I can justify. I can’t provide
        any references to research that shows that very small functions are better.</Text>
        <Text style={sharedStyles.connectingText}>What experience has taught me, through long trial
        and error, is that functions should be very small.</Text>
        <Text></Text>
        <Text style={sharedStyles.title}>Do One Thing</Text>
        <Text style={sharedStyles.connectingText}>One Level of Abstraction per Function </Text>
        <Text style={sharedStyles.closingText}>Reading Code from Top to Bottom: The Stepdown Rule:
        As code executes, it should ideally step down by one function at a time </Text>
        <Text style={sharedStyles.closingText} >Discover. Teach. Adcovate. </Text>
      </SafeAreaView>
    );
  }
}
export module ClassesPage{}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const classesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Classes);

export default classesContainer;
