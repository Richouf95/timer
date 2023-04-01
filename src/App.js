import React, { useRef, useState } from 'react';
import './App.css';
import Tracker from './components/Tracker';
import {v4 as uuid} from 'uuid'

function App() {

  const [tracker, setTracker] = useState([])

  const itemRef = useRef();

  const projetRef = useRef();
  const descriptionRef = useRef();

  const handleCreer = () => {
    const newTrackerItemAdded = {
      projet: projetRef.current.value,
      description : descriptionRef.current.value,
      id: uuid()
    }
    setTracker([...tracker, newTrackerItemAdded]);
    projetRef.current.value = '';
    descriptionRef.current.value = '';
  }

  const ListingTrackers = tracker.map((item) => {
    return(
      <div ref={itemRef} id={item.id} key={item.id} style={{width: '30rem', margin: 'auto'}}>
        <Tracker info={item} />
        <button onClick={() => {
          document.getElementById(item.id).remove();
          const index = tracker.indexOf(item)
          tracker.splice(index, 1)
        }} className='btn-close bg-danger py-2 text-right' style={{position:'relative', top:'-240px', left:'200px'}}></button>
      </div>
    )
  })

  return (
    <div className="App">

      {
        ListingTrackers
      }

      {/* <!-- Button trigger modal --> */}
      <button id='0' type="button" className="btn btn-primary my-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Ajouter un Timer
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Créer un nouveau Timer</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input ref={projetRef} className="form-control my-2" type="text" placeholder="Projet" aria-label="default input example" />
              <input ref={descriptionRef} className="form-control my-2" type="text" placeholder="Description" aria-label="default input example" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
              <button onClick={handleCreer} type="button" className="btn btn-primary" data-bs-dismiss="modal">Créer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;