import React, { useEffect } from 'react';
import { useDispatch, useSelector} from "react-redux";
import {fetchMessage} from "../redux/reducers/greetingSlice";

function Greeting() {
  const dispatch = useDispatch();
  console.log('Redux State:', useSelector((state) => state.greeting.message));
  const message = useSelector(state => state.greeting.message);

  useEffect(() => {
    dispatch(fetchMessage())
        .then((data) => {
          console.log('Fetched Data:', data);
        })
        .catch((error) => {
          console.error('Fetch Error:', error);
        });
  }, [dispatch]);

  return (
      <div>
        <h1>Random Greeting:</h1>
        <p>{message || 'Default message'}</p>
      </div>
  );
}

export default Greeting;
