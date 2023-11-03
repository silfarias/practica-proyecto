import { useState } from "react"
import { Modal } from "./components/Modal";
function App() {
  const [modal, setModal] = useState(false);
  const Toggle = () => {
    setModal(!modal);
  }
  return ( 
    <div className="Modal">
      <button onClick={() => Toggle()}>Modal</button>
      <Modal show={modal} close={Toggle} title="Reservar Cancha">
        ¿Estas Seguro que quieres reservar a las 10:00 pm?
      </Modal>
    </div>
  )
}

export default App
