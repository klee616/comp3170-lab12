import './App.css'
import Countries from './components/Countries';
import { Outlet } from 'react-router-dom';

function App() {
  

  return (
    <>
      <div>
        <h1>World Kingdoms</h1>
        <div>
          <Countries />
          <Outlet />
        </div>
      </div>
    </>
  )
}
 
export default App
