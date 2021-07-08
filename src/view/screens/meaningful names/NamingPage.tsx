import * as React from 'react';
import { SafeAreaView, Image, Text } from 'react-native';

import { connect } from 'react-redux';

import styles from './styles';

export interface Props { }

interface State { }

class Naming extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Names should reveal intent, seriously.</Text>
        <Text style={styles.connectingText}>Names are everywhere in software. We name and name and name.
        Because we do so much of it, we’d better do it well.</Text>
        <Text style={styles.text}>Choosing good names takes time but saves more than it takes.
          So take care with your names and change them when you ﬁnd better ones. Everyone who
          reads your code (including you) will be happier if you do.
        </Text>
        <Text style={styles.connectingText}>
          The name of a variable, function, or class, should answer all the big questions. It
          should tell you why it exists, what it does, and how it is used.
          If a name requires a comment, then the name does not reveal its intent. </Text>
          <Text style={styles.code}>int d; // elapsed time in days </Text>
          <Text style={styles.connectingText}>The name d reveals nothing.
          It does not evoke a sense of elapsed time, nor of days. </Text>
          <Text></Text>
        <Text style={styles.closingText}>Use Intention-Revealing Names, Make Meaningful
        Distinctions, Use Pronounceable Names, </Text>
        <Text></Text>
        <Text style={styles.closingText}>Use Searchable Names, Avoid Encodings,
        Hungarian Notation, Avoid Member Preﬁxes,</Text>
        <Text></Text>
        <Text style={styles.closingText}>Classes are Nouns, Methods are verbs,  </Text>
        <Text></Text>
        <Text style={styles.closingText} >Don’t Be Cute, Pick One Word per Concept,
        Don’t Pun </Text>
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
