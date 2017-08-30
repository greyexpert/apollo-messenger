import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getCount } from '../../reducers';
import { increment } from '../../actions';

import Counter from './Counter';

const mapStateToProps = createStructuredSelector({
  count: getCount
});

const mapDispatchToProps = {
  increment
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);