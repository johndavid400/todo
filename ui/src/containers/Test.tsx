import { useState, useEffect, useReducer, useContext } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import CountContext from '../context/CountContext';

interface state {
  num: number,
}

const exampleReducer = (state : state, action : any) => {
  switch(action.type) {
    case "increment":
      return {
        num: state.num + 1,
      };
    case "decrement":
      return {
        num: state.num - 1,
      };
    default: throw Error('Hello there');
  }
}

function ProfilePage() {
  const { id } = useParams();
}

//function Test() {
const Test = () => {
  // count uses useContext() to keep track of count/setCount instead of useState, making it keep state across page loads
  const { count, setCount } = useContext(CountContext);
  // megaCount uses useState() to keep track of value
  const [megaCount, setMegaCount] = useState(0);
  // example of using a reducer
  const [state, dispatch] = useReducer(exampleReducer, { num: 1 });

  const params = useParams();

  const value = useContext(CountContext);

  useEffect(() => {
    // only print when count is updated
    console.log('count was updated');
    console.log(value);
  }, [count]);

  // useEffect() will run only once if end array is empty
  useEffect(() => {
    console.log(params);
  }, [count]);

  return (
    <>
      <h1>Click some buttons</h1>

      <div className="card">
        <button onClick={() => dispatch({ type: 'increment'})}>
          decrement reducer
        </button>
        <button onClick={() => dispatch({ type: 'decrement'})}>
          increment reducer
        </button>
        <p>
          reducer num is {state.num}
        </p>
      </div>

      <div className="card">
        <button onClick={() => setCount(count + 20)}>
          increment count
        </button>
        <button onClick={() => setCount(count - 20)}>
          decrement count
        </button>
        <p>
          count is {count}
        </p>
      </div>

      <div className="card">
        <button onClick={() => setMegaCount((megaCount) => megaCount + 200)}>
          Increment mega count
        </button>
        <button onClick={() => setMegaCount((megaCount) => megaCount - 200)}>
          decrement mega count
        </button>
        <p>
          mega count is {megaCount}
        </p>
      </div>
    </>
  )
}

export default Test;
