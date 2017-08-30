import { NAME } from '../../constants';
import reducer, * as counterSelectors from './counter';

const global = selector => (state, ...args) => selector(state[NAME], ...args);

// Global selectors
export const getCount = global(counterSelectors.getCount);

// Root reducer
export default reducer;