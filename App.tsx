import { Dispatch, SetStateAction, useState, } from 'react';
import { 
  ScreensSlider1, ScreensSlider2, ScreensSlider3, ScreensSlider4,
} from "./src/screens" 
export default function App() {
  const [page, setPage, ] = useState(1)
  switch (page) {
    case 1: 
    return <ScreensSlider1 setPageI={setPage} />
    break;
    case 2: 
    return <ScreensSlider2 setPageI={setPage} />
    break;
    case 3: 
    return <ScreensSlider3 setPageI={setPage} />
    break;
    case 4: 
    return <ScreensSlider4 setPageI={setPage} />
    break;
  }
}
