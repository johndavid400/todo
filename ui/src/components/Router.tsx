import { Routes, Route, Navigate } from 'react-router-dom';
import Test from '../containers/Test';
import Lists from '../containers/Lists';
import List from '../containers/List';

const Router = () => {
  return (
    <Routes>
      <Route path="/lists">
         <Route index element={<Lists />} />
         <Route path={':listId'} element={<List />} />
      </Route>
      <Route path="/test" element={<Test />} />
      <Route path="/nottest" element={<>Goodbye there</>} />
      <Route path="*" element={<Navigate to="/test" />} />
    </Routes>
  )
}

export default Router;
