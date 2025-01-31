import { useState, useEffect } from "react";


//allows a string value (min-width) as props
const useMediaQuery = (query: string) => {
    //create a hook
  const [matches, setMatches] = useState(false);

  
  useEffect(() => {
    //get window width and compare with query 
    //query is from props
    //that we passed in a certain width
    //return true or false
    const media = window.matchMedia(query);

    //if return value is not equal to matches
    //set matches = return value
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    //a function that runs whenver window resize
    //when window resize set matches
    //when matches is set useeffect runs
    //when use effect runs, media value is calculated
    const listener = () => {setMatches(media.matches)};
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  //return true if window is above the query<--prop value
  //return false if window is below the query<--prop value
  return matches;
};

export default useMediaQuery;


// the main point is ==> to keep track of the window width