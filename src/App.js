import './App.css';
import Eng from './component/Eng'
import { useState } from 'react';
import { createContext } from "react"
import Multilang from './component/Multilang';


export const maindata=createContext()
function App() {
  const [data,setData]=useState("english")
 const[state,setState] =useState(data)


  // const lang = useContext(GujLang);
    // const AppProvider = ({LangContext}) => {
    //     return(
    //         <LangContext.Provider value={GujLang}>
    //             {GujLang}
    //         </LangContext.Provider>
    //     )
    // }
  return (
   <>
    <maindata.Provider   value={[state,setState]}>

    


<Multilang/>

    </maindata.Provider>

   
    
   </>
  );
}

export default App;
