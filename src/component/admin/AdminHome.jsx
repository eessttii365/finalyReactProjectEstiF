import { useState } from "react"
import Login from "./Login"
import BD from "./BD"
import BasicTabs from './BasicTabs';
import MeetingStore from "../../stores/meetingStore";
import { useEffect } from "react";

function AdminHome() {
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => { MeetingStore.getMeeting() }, []);

  return (
    <>
      {
        isLogin ?
          <>
            <BD isAdmin={true} />
            <BasicTabs />
          </> :
          <Login x={setIsLogin} />
      }
    </>
  )
}

export default AdminHome