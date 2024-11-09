import {createRoot} from 'react-dom/client'
import './index.css'
import App from "./App.jsx";

function Overlay() {
  return (
    <div style={{position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%'}}>
      <div style={{position: 'absolute', bottom: 30, left: 30, fontSize: '13px'}}>
        Zafiro12
        <br/>
        Credit to <a href="https://pmnd.rs/" style={{fontWeight: 'bold', textDecoration: 'underline'}}>pmnd.rs</a> for
        the base code used.
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App/>
    <Overlay/>
  </>
)
