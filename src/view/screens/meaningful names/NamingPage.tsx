import * as React from 'react';
import { SafeAreaView, Image, Text } from 'react-native';

import { connect } from 'react-redux';

import sharedStyles from '../../styles/sharedStyles';

export interface Props { }

interface State { }

const textContent = ['Names should reveal intent, seriously.',
  'Names are everywhere in software. We name and name and name. Because we do so much of it, we’d better do it well',
  'Choosing good names takes time but saves more than it takes. So take care with your names and change them when you ﬁnd better ones. Everyone who reads your code (including you) will be happier if you do.',
  ' The name of a variable, function, or class, should answer all the big questions. It should tell you why it exists, what it does, and how it is used. If a name requires a comment, then the name does not reveal its intent.',
  'int d; // elapsed time in days',
  'The name d reveals nothing. It does not evoke a sense of elapsed time, nor of days.',
  'Use Intention-Revealing Names, Make Meaningful Distinctions, Use Pronounceable Names,',
  'Use Searchable Names, Avoid Encodings, Hungarian Notation, Avoid Member Preﬁxes,',
  'Classes are Nouns, Methods are verbs,',
  'Don’t Be Cute, Pick One Word per Concept, Don’t Pun',
];

class Naming extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  render() {
    return (
      <SafeAreaView style={sharedStyles.container}>
        <Text style={sharedStyles.title}>{textContent[0]}</Text>
        <Text style={sharedStyles.connectingText}>{textContent[1]}</Text>
        <Text style={sharedStyles.text}>{textContent[2]}</Text>
        <Text style={sharedStyles.connectingText}>{textContent[3]}</Text>
          <Text style={sharedStyles.code}>{textContent[4]} </Text>
          <Text style={sharedStyles.connectingText}>{textContent[5]} </Text>
          <Text></Text>
        <Text style={sharedStyles.closingText}>{textContent[6]}</Text>
        <Text></Text>
        <Text style={sharedStyles.closingText}>{textContent[7]}</Text>
        <Text></Text>
        <Text style={sharedStyles.closingText}>{textContent[8]}</Text>
        <Text></Text>
        <Text style={sharedStyles.closingText} >{textContent[9]}</Text>
        <Image
            style={sharedStyles.image}
            resizeMode="contain"
            source={require('../../assets/images/names.png')}
          />
      </SafeAreaView>
    );
  }
}
export module Naming { }

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const namingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Naming);

export default namingContainer;
