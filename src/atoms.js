import { atom, selector } from "recoil"
import axios from 'axios'
export const allnotifications = atom({
    key: "allnotifications",
    default: selector({
                key: "networkAtomSelector",
                get: async () => {
                    const res = await axios.get("https://sum-server.100xdevs.com/notifications")
                    return res.data
                }
    })
})
export const allnotificationsSelector = selector({
    key: "allnotificationsSelector",
    get: ({get}) => {
        const totalnotifications = get(allnotifications);
        return totalnotifications.network + totalnotifications.jobs + totalnotifications.notifications + totalnotifications.messaging
     }

})
