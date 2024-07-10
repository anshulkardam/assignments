import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { allnotifications, allnotificationsSelector } from "./atoms"
import { useEffect } from "react"
import axios from 'axios'

function App() {

    return <RecoilRoot>
     <MainApp />
     </RecoilRoot>

}
function MainApp() {
      const [allnotificationst, setallnotificationst] = useRecoilState(allnotifications)
      const totalnotificationsCount = useRecoilValue(allnotificationsSelector)

    
      return  <>
       <button>Home</button>
       <button>My Network ({allnotificationst.network >= 100 ? "99+" : allnotificationst.network })</button>
       <button>Jobs ({allnotificationst.jobs})</button>
       <button>Messaging ({allnotificationst.messaging})</button>
       <button>Notifications ({allnotificationst.notifications})</button>
       <button>Me ({totalnotificationsCount})</button>
             </>

}

export default App
