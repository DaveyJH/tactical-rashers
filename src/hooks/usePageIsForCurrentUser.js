import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

import { useCurrentUser } from "../contexts/CurrentUserContext";

/**
 * Redirects the user to the home page if they are not permitted to view the page
 */
export const usePageIsForCurrentUser = () => {
  const currentUser = useCurrentUser();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = () => {
      if (currentUser?.profile_id && id) {
        currentUser.profile_id !== parseInt(id) && history.push("/");
      }
    };
    handleMount();
  }, [currentUser, id, history]);
};
