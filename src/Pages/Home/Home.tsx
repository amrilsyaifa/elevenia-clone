import React from 'react';
import { useAppSelector, useAppDispatch } from 'src/Hooks/useReduxHooks';
import { decrement, increment } from 'src/Store/Reducers/Auth.Reducers';
import { API_KEY } from 'src/Reusables/Constants';

const Home = () => {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.auth.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>Home, {API_KEY}</div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Home;
