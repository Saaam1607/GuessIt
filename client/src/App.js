import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Title from './components/Title';
import HomePage from './pages/HomePage';

import ClientPage from './pages/client/ClientPage';
import WaitingRoom from './pages/client/WaitingRoom';
import ClientGame from './pages/client/ClientGame';

import HostWaitingRoom from './pages/host/HostWaitingRoom';
import HostConsole from './pages/host/HostConsole';


function App() {
  return (
    <div
      className={"d-flex flex-column align-items-center justify-content-start"}
      style={{
        minHeight: "100svh",
        height: "fit-content",
        width: "100%",
        // backgroundColor: "#b2d0f0",
        // backgroundImage: `url(${require("./assets/images/texture.png")})`,
        // backgroundSize: "50%" 
      }}
    >

      <Title />

      <div className="" style={{ minHeight: "100%", height: "84svh", width: "95%" }} >
        <Router>
          <Routes>
            <Route path="/" exact element={<HomePage />} />

            <Route path="/client" exact element={<ClientPage />} />
            <Route path="/client/game" exact element={<WaitingRoom />} />
            <Route path="/client/play" exact element={<ClientGame />} />

            <Route path="/host" exact element={<HostWaitingRoom />} />
            <Route path="/host/console" exact element={<HostConsole />} />

          </Routes>
        </Router> 
      </div>
    </div>
  );
}

export default App;
