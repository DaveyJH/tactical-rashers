import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import "./api/axiosDefaults";

import Container from "react-bootstrap/Container";
import NavBar from "./components/nav/NavBar";

import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Rules from "./pages/rules/Rules";
import Profile from "./pages/profile/Profile";
import CreateGame from "./pages/games/CreateGame";
import Game from "./pages/games/Game";
import GamesFeed from "./pages/games/GamesFeed";

import styles from "./assets/css/App.module.css";
import { NavBarCollapseProvider } from "./contexts/NavBarCollapseContext";

function App() {
  return (
    <div className="App">
      <NavBarCollapseProvider>
        <NavBar />
      </NavBarCollapseProvider>
      <Container className={`${styles.MainContainer} text-center`}>
        <Switch>
          <Route exact path="/" render={() => <GamesFeed />} />
          <Route path="/games/create" render={() => <CreateGame />} />
          <Route path="/games/active" render={() => <h1>Active games</h1>} />
          <Route path="/games/completed" render={() => <h1>Completed games</h1>} />
          <Route path="/games/:id" render={() => <Game />} />
          <Route path="/profiles/:id" render={() => <Profile />} />
          <Route path="/rules" render={() => <Rules />} />
          <Route path="/sign-in" render={() => <SignIn />} />
          <Route path="/sign-up" render={() => <SignUp />} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
