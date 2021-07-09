import * as React from 'react';
import { SafeAreaView, Image, Text } from 'react-native';

import { connect } from 'react-redux';

import sharedStyles from '../../styles/sharedStyles';

export interface Props {}

interface State {}

const textContent = ['Classes - Small!',
  'The ﬁrst rule of classes is that they should be small. The second rule of classes is they should have a SINGLE responsibility.',
  'This involves ensuring code is coherantly organized so others can understand what the intent of the code was.',
  'Maintaining cohesion results in many small classes',
  'Smaller functions and smaller classes go together. Code organization should allow future changes easily.',
  'Decoupling of logic promotes flexibility for the future.',
];

class Classes extends React.PureComponent<Props, State> {
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
        <Text style={sharedStyles.text}>{textContent[4]}</Text>
        <Text style={sharedStyles.closingText}></Text>
        <Text></Text>
        <Text style={sharedStyles.title}>{textContent[5]}</Text>
        <Image
            style={sharedStyles.image}
            resizeMode="contain"
            source={require('../../assets/images/classes.png')}
          />
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
