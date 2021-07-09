import * as React from 'react';
import { SafeAreaView, Image, Text } from 'react-native';

import { connect } from 'react-redux';

import sharedStyles from '../../styles/sharedStyles';

export interface Props {}

interface State {}

const textContent = ['The Three Laws of TDD',
  'First Law',
  'You may not write production code unitl you have written a failing unit test.',
  'Second Law',
  'You may not write more of a unit test than is sufficient to fail, and not compiling is failing.',
  'Third Law',
  'You may not write more production code than is sufficient to pass the currently failing test',
  'Keep Tests Clean',
  'What makes a clean test? Three things. Readability, readability, and readability. Read- ability is perhaps even more important in unit tests than it is in production code.',
  '“Complexity kills. It sucks the life out of developers,it makes products difficult to plan, build, and test.” —Ray Ozzie, CTO, Microsoft Corporation',
];

class UnitTestsPage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={sharedStyles.container}>
        <Text style={sharedStyles.title}>{textContent[0]}</Text>
        <Text style={sharedStyles.closingText}>{textContent[1]}</Text>
        <Text style={sharedStyles.text}>{textContent[2]}</Text>
        <Text style={sharedStyles.closingText}>{textContent[3]}</Text>
        <Text style={sharedStyles.text}>{textContent[4]}</Text>
        <Text style={sharedStyles.closingText}>{textContent[5]}</Text>
        <Text style={sharedStyles.text}>{textContent[6]}</Text>
        <Text style={sharedStyles.closingText}>{textContent[7]}</Text>
        <Text style={sharedStyles.text}>{textContent[8]}</Text>
        <Text style={sharedStyles.closingText}>{textContent[9]}</Text>
        <Image
            style={sharedStyles.image}
            resizeMode="contain"
            source={require('../../assets/images/comments.png')}
          />
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
