import useLocalStorage from './useLocalStorage';
import {useEffect} from 'react';

const useDarkMode=(initialValue)=>{
const [darkModeStatus,setDarkModeStatus]=useLocalStorage('darkmode-status',initialValue)

// Fire off effect that add/removes dark mode class
  useEffect(() => {
      const className = 'dark-mode';
      const element = window.document.body;
      if (darkModeStatus) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [darkModeStatus] // Only re-call effect when value changes
  );

return [darkModeStatus,setDarkModeStatus]
}
export default useDarkMode;