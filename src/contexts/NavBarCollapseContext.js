import { createContext, useContext, useEffect, useState, useRef } from "react";

const NavBarCollapseContext = createContext();
const SetNavBarCollapseContext = createContext();

export const useNavBarCollapse = () => useContext(NavBarCollapseContext);
export const useSetNavBarCollapse = () => useContext(SetNavBarCollapseContext);

/**
 * Provides the navbar collapse state to allow better UX for the navbar
 */
export const NavBarCollapseProvider = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const mainRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        expanded && // is expanded
        mainRef.current && // ref exists
        e.target.id !== "games-nav-dropdown" && // click is not the games dropdown
        (logoRef.current.contains(e.target) || // click is in logo ref OR
          !mainRef.current.contains(e.target) || // click is not in ref OR
          e.target.tagName === "A") // click is on an anchor tag
      ) {
        setExpanded(false);
      }
    };
    window.addEventListener("mouseup", handleClickOutside);
    return () => {
      window.removeEventListener("mouseup", handleClickOutside);
    };
  }, [mainRef, logoRef, expanded]);
  return (
    <NavBarCollapseContext.Provider value={{ expanded, mainRef, logoRef }}>
      <SetNavBarCollapseContext.Provider value={{ setExpanded }}>{children}</SetNavBarCollapseContext.Provider>
    </NavBarCollapseContext.Provider>
  );
};
