import { useState, useEffect, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';

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

function App() {
  const [count, setCount] = useState(0);
  const [megaCount, setMegaCount] = useState(0);

  const [state, dispatch] = useReducer(exampleReducer, { num: 1 });

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    // only print when count is updated
    console.log('run once');
  }, []);

  useEffect(() => {
    // only print when count is updated
    console.log('count was updated');
  }, [count]);

  useEffect(() => {
    console.log(params);
  }, [count]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <button onClick={() => navigate("/test")}>Test</button>
      <button onClick={() => navigate("/nottest")}>Not Test</button>

      <Routes>
        <Route path="/test" element={<>Hello there</>} />
        <Route path="/foo/:id" element={<ProfilePage />} />
        <Route path="/nottest" element={<>Goodbye there</>} />
        <Route path="*" element={<Navigate to="/test" />} />
      </Routes>

      <h1>Vite + React</h1>

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
        <button onClick={() => setCount((count) => count + 20)}>
          increment count
        </button>
        <button onClick={() => setCount((count) => count - 20)}>
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

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
