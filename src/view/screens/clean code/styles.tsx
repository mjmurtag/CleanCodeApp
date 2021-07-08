import { StyleSheet } from 'react-native';

import { TYPOGRAPHY } from '../../styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'column',
    display: 'flex',
    backgroundColor: TYPOGRAPHY.COLOR.Default,
  },
  title:{
    textAlign: 'center',
    fontSize : 20,
    margin: '5%',
  },
  image:{
    flex: 3,
    width: '100%',
    marginLeft: '3%',
  }
});

export default styles;
