import { StyleSheet } from 'react-native';

import { TYPOGRAPHY } from '../../styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: TYPOGRAPHY.COLOR.Default,
  },
  image: {
    flex: 4,
    flexDirection: 'column',
    width: '70%',
    marginTop: '10%',
  },
  enterButton: {
    marginBottom: '10%',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    margin: '5%'
  }
});

export default styles;
