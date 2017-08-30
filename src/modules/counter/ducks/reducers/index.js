import { NAME } from '../../constants';
import reducer, * as counterSelectors from './counter';

const local = selector => (state, ...args) => selector(state[NAME], ...args);

// Global selectors
export const getCount = local(counterSelectors.getCount);

// Root reducer
export default reducer;