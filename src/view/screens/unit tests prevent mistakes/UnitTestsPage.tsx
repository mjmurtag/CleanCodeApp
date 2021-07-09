import * as React from 'react';
import { SafeAreaView, Image, Text } from 'react-native';

import { connect } from 'react-redux';

import sharedStyles from '../../styles/sharedStyles';

export interface Props {}

interface State {}

class UnitTestsPage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={sharedStyles.container}>
        <Text style={sharedStyles.title}>The Three Laws of TDD</Text>
        <Text></Text>
        <Text style={sharedStyles.title}>First Law</Text>
        <Text style={sharedStyles.text}>You may not write production code unitl you
        have written a failing unit test.</Text>
        <Text style={sharedStyles.title}>Second Law</Text>
        <Text style={sharedStyles.text}>You may not write more of a unit test than is
        sufficient to fail, and not compiling is failing.</Text>
        <Text style={sharedStyles.title}>Third Law</Text>
        <Text style={sharedStyles.text}>You may not write more production code than
        is sufficient to pass the currently failing test</Text>
        <Text></Text>
        <Text style={sharedStyles.title}>Keep Tests Clean</Text>
        <Text></Text>
        <Text style={sharedStyles.closingText}>What makes a clean test?
        Three things. Readability, readability, and readability. Read-
        ability is perhaps even more important in unit tests than it is in production code.</Text>
      </SafeAreaView>
    );
  }
}
export module UnitTestsPage{}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const unitTestsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnitTestsPage);

export default unitTestsPageContainer;
