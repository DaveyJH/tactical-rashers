import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import "./api/axiosDefaults";

import { NavBarCollapseProvider } from "./contexts/NavBarCollapseContext";

import Container from "react-bootstrap/Container";
import NavBar from "./components/nav/NavBar";

import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Rules from "./pages/rules/Rules";
import Profile from "./pages/profile/Profile";
import CreateGame from "./pages/games/CreateGame";
import Game from "./pages/games/Game";
import GamesFeed from "./pages/games/GamesFeed";
import ActiveGames from "./pages/games/ActiveGames";
import CompletedGames from "./pages/games/CompletedGames";
import ErrorPage404 from "./pages/ErrorPage404";

import styles from "./assets/css/App.module.css";

function App() {
  return (
    <div className="App">
      <NavBarCollapseProvider>
        <NavBar />
      </NavBarCollapseProvider>
      <main>
        <Container className={`${styles.MainContainer} text-center`}>
          <Switch>
            <Route exact path="/" render={() => <GamesFeed />} />
            <Route path="/games/create" render={() => <CreateGame />} />
            <Route path="/games/:id" render={() => <Game />} />
            <Route path="/profiles/:id/active" render={() => <ActiveGames />} />
            <Route path="/profiles/:id/completed" render={() => <CompletedGames />} />
            <Route path="/profiles/:id" render={() => <Profile />} />
            <Route path="/rules" render={() => <Rules />} />
            <Route path="/sign-in" render={() => <SignIn />} />
            <Route path="/sign-up" render={() => <SignUp />} />
            <Route render={() => <ErrorPage404 />} />
          </Switch>
        </Container>
      </main>
    </div>
  );
}

export default App;
