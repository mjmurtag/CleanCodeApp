import { connect } from 'react-redux';

import Component from './Component';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const cleanCodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default cleanCodeContainer;
