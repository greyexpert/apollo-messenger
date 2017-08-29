import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getCount, increment } from '../../store';
import Counter from './Counter';

const mapStateToProps = createStructuredSelector({
  count: getCount
});

const mapDispatchToProps = {
  increment
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);