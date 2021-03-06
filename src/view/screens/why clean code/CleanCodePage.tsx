import * as React from 'react';
import { SafeAreaView, Image, Text } from 'react-native';

import { connect } from 'react-redux';

import sharedStyles from '../../styles/sharedStyles';

export interface Props {}

interface State {}

const textContent = ['The total cost of owning a mess',
  'When hand-washing was ﬁrst recommended to physicians by Ignaz Semmelweis in 1847, it was rejected on the basis that doctors were too busy and wouldn’t have time to wash their hands between patient visits.',
  'You have time to write clean code',
  'Bjarne Stroustrup, inventor of C++ says:',
  '"I like my code to be elegant and efﬁcient. The logic should be straightforward to make it hard for bugs to hide, the dependencies minimal to ease maintenance, error handling complete according to an articulated strategy, and performance close to optimal so as not to tempt people to make the code messy with unprincipled optimizations. Clean code does one thing well."',
  'Without Clean Code, your teams\' productivity will suffer eventually.',
  'Discover. Teach. Adcovate.',
];

class CleanCode extends React.PureComponent<Props, State> {
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
        <Text style={sharedStyles.connectingText}>{textContent[2]}.</Text>
        <Text></Text>
        <Text style={sharedStyles.closingText}>{textContent[3]}</Text>
        <Text style={sharedStyles.text}>{textContent[4]}</Text>
        <Image
            style={sharedStyles.image}
            resizeMode="contain"
            source={require('../../assets/images/mess.png')}
          />
        <Text style={sharedStyles.closingText}>{textContent[5]}</Text>
        <Text style={sharedStyles.closingText}>{textContent[6]} </Text>
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
