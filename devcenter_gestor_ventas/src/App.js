import DashBoard from './Vistas/DashBoard';
import Login from './Vistas/Login';

import Model from './Model';

function App() {
  return (
    <div className="App">
      {
        (Model.getUser()) ? <DashBoard /> : <Login />
      }
    </div>
  );
}

export default App;
