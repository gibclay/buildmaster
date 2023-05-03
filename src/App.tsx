import 'semantic-ui-css/semantic.min.css'

import { Navbar } from './components/navbar';
import { routes } from './config';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      {routes.map((elem) => { 
        return (
          <Route path={elem.path} 
          element={<>{elem.hasNavBar? (<Navbar route_list={routes} />): <></>}
          <elem.component /></>} />
        )
      })}
    </Routes>
  );
}

export default App;
