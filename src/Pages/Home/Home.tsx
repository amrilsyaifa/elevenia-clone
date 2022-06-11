import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'src/Hooks/useReduxHooks';

import { decrement, increment } from 'src/Store/Reducers/Auth.Reducers';
import useHome from './Hooks/useHome';

const Home = () => {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.auth.value);
  const dispatch = useAppDispatch();

  const { onFetchData } = useHome();

  useEffect(() => {
    onFetchingData();
  }, []);

  const onFetchingData = () => {
    onFetchData();
  };

  return (
    <div>
      <div>Home</div>
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
