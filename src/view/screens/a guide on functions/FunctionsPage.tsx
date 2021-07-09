import * as React from 'react';
import { SafeAreaView, Image, Text } from 'react-native';

import { connect } from 'react-redux';

import sharedStyles from '../../styles/sharedStyles';

export interface Props {}

interface State {}

const textContent = ['Functions - Small!',
  'The ﬁrst rule of functions is that they should be small. The second rule of functions is they should be smaller than that. This is not an assertion that I can justify. I can’t provide any references to research that shows that very small functions are better.',
  'What experience has taught me, through long trial and error, is that functions should be very small.',
  'Do One Thing',
  'One Level of Abstraction per Function',
  'Reading Code from Top to Bottom: The Stepdown Rule: As code executes, it should ideally step down by one function at a time',
];

class Functions extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={sharedStyles.container}>
        <Text style={sharedStyles.title}>{textContent[0]}</Text>
        <Text style={sharedStyles.text}>{textContent[1]}</Text>
        <Text style={sharedStyles.connectingText}>{textContent[2]}</Text>
        <Text></Text>
        <Text style={sharedStyles.title}>{textContent[3]}</Text>
        <Text></Text>
        <Text style={sharedStyles.closingText}>{textContent[4]} </Text>
        <Text></Text>
        <Text style={sharedStyles.closingText}>{textContent[5]}</Text>
        <Image
            style={sharedStyles.image}
            resizeMode="contain"
            source={require('../../assets/images/complexity.png')}
          />
      </SafeAreaView>
    );
  }
}
export module FunctionsPage{}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const functionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Functions);

export default functionsContainer;
