import Route from "./component/Route"
import "./App.css"
import { observer } from 'mobx-react';
import { useEffect } from "react"
import serviceStore from "./stores/serviceStore"
import Header from "./component/Header"


const App = (observer(() => {
  useEffect(() => { serviceStore.getServices() }, []);

  return (
    <>
      <Header />
      <div style={{ 'marginTop': '8%' }}>
        <Route />

      </div>
    </>
  )
}))

export default App
