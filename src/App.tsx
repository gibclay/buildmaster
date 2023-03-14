import 'semantic-ui-css/semantic.min.css'

import { Navbar } from './components/navbar';
import { routes } from './config';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar route_list={routes} />
      <Routes>
        {routes.map((elem) => { return (<Route path={elem.path} element={<elem.component />} />)})}
      </Routes>
    </div>
  );
}

export default App;
