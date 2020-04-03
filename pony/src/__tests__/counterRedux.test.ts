
import { rootReducer } from '../store/rootReducer'

test('reducers', () => {
  let state;
  state = rootReducer({ counter: { count: 0 } }, { type: 'counter/increment' });
  expect(state).toEqual({ counter: { count: 1 } });
  
  state = rootReducer({ counter: { count: 1 } }, { type: 'counter/decrement' });
  expect(state).toEqual({ counter: { count: 0 } });
});
