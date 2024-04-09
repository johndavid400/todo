import { useState, useEffect, useReducer, useContext } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import AppContext from '../components/AppContext';

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
  //const [count, setCount] = useState(0);
  const [megaCount, setMegaCount] = useState(0);

  const [state, dispatch] = useReducer(exampleReducer, { num: 1 });

  const params = useParams();

  const value = useContext(AppContext);

  const { count, updateCount } = useContext(AppContext);

  useEffect(() => {
    // only print when count is updated
    console.log('count was updated');
    console.log(value);
  }, [count]);

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
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div className="card">
        <button onClick={() => updateCount(count + 20)}>
          increment count
        </button>
        <button onClick={() => updateCount(count - 20)}>
          decrement count
        </button>
        <p>
          count is {count}
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
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
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default Test;
