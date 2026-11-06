import {
    increment,
    decrement,
    incrementByAmount,
    reset,
} from '../../features/counter/counterSlice';

import {
    useAppDispatch,
    useAppSelector
} from '../../hooks/reduxHooks';

function Redux() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div className="text-center">
      <p>{count}</p>
      <div className="flex gap-2 justify-center m-2 p-2">
        <button className="btn" onClick={() => dispatch(increment())}>Increment</button>
        <button className="btn" onClick={() => dispatch(decrement())}>Decrement</button>
        <button className="btn" onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
        <button className="btn" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Redux
