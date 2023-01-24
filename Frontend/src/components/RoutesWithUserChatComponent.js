import { Outlet } from "react-router-dom";
import UserChatComponent from "./user/UserChatComponent";

const RoutesWithUserChatComponent=()=>{
    return (<><UserChatComponent/> <Outlet/></>); 
}
export default RoutesWithUserChatComponent ; 