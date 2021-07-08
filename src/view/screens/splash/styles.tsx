import { StyleSheet } from 'react-native';

import { TYPOGRAPHY } from '../../styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 4,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: TYPOGRAPHY.COLOR.Default,
  },
  reactImage:{
    width: '70%',
  },
  image: {
    flex: 3,
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
  },
});

export default styles;
