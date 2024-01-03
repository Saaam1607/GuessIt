import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Title from './components/Title';
import HomePage from './pages/HomePage';

import ClientPage from './pages/client/ClientPage';
import JoinGamePage from './pages/client/JoinGamePage';
import CreateGamePage from './pages/client/CreateGamePage';
import WaitingRoom from './pages/client/WaitingRoom';
import ClientGame from './pages/client/ClientGame';

import HostWaitingRoom from './pages/host/HostWaitingRoom';
import HostConsole from './pages/host/HostConsole';


function App() {
  return (
    <div
      className={"d-flex flex-column align-items-center justify-content-center"}
      style={{
        height: "100svh",
        width: "100%",
        backgroundColor: "rgb(218, 234, 242)",
      }}
    >

      <Title />

      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <Router>
          <Routes>

            <Route path="/" exact element={<HomePage />} />

            <Route path="/client" exact element={<ClientPage />} />
            <Route path="/client/join" exact element={<JoinGamePage />} />
            <Route path="/client/create" exact element={<CreateGamePage />} />
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
