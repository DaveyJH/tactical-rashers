import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import Container from "react-bootstrap/Container";
import NavBar from "./components/nav/NavBar";

import "./api/axiosDefaults";

import Logo from "./assets/images/logo512.png";
import styles from "./assets/css/App.module.css";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Rules from "./pages/rules/Rules";
import { useProfileData } from "./contexts/ProfileDataContext";

function App() {
  console.log(useProfileData())
  return (
    <div className="App">
      <NavBar />
      <Container className={`${styles.MainContainer} text-center`}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <header className={styles.AppHeader}>
                <img src={Logo} className={styles.AppLogo} alt="logo" />
                <p>In development! Please come back later.</p>
              </header>
            )}
          />
          {/* <Route
            exact
            path="/"
            render={() => <h1>Game feed</h1>}
          /> */}
          <Route path="/games/create" render={() => <h1>Create game</h1>} />
          <Route path="/games/active" render={() => <h1>Active games</h1>} />
          <Route path="/games/completed" render={() => <h1>Completed games</h1>} />
          <Route path="/games/:id" render={() => <h1>Game details</h1>} />
          <Route path="/profiles/:id" render={() => <h1>Player details</h1>} />
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
