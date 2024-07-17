import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import axios from "axios";

import { useCurrentUser } from "../contexts/CurrentUserContext";

export const useRedirect = (authStatus) => {
  const history = useHistory();
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post("/dj-rest-auth/token/refresh/");
        if (authStatus === "redirectToProfile") {
          history.push(`/profiles/${currentUser.profile_id}`);
        }
      } catch (err) {
        if (authStatus === "loggedOut") {
          history.push("/sign-in");
        }
      }
    };
    handleMount();
  }, [history, authStatus, currentUser]);
}
