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
        <Text style={sharedStyles.title}>Classes - Small!</Text>
        <Text style={sharedStyles.text}>The ﬁrst rule of classes is that they should be small.
        The second rule of classes is they should have a SINGLE responsibility.</Text>
        <Text style={sharedStyles.connectingText}>This involves ensuring code is coherantly 
        organized so others can understand what the intent of the code was. </Text>
        <Text></Text>
        <Text style={sharedStyles.title}>Maintaining cohesion results in many small classes</Text>
        <Text style={sharedStyles.text}>Smaller functions and smaller
        classes go together. Code organization should allow future
        changes easily.</Text>
        <Text style={sharedStyles.closingText}></Text>
        <Text></Text>
        <Text style={sharedStyles.title} >Decoupling of logic promotes flexibility
        for the future. </Text>
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
