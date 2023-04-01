import React, { useEffect, useRef, useState } from 'react'
import Time from './Time';

function Tracker({info}) {

    const [infoTracker, setInfoTracker] = useState(info);

    const infoTrackerProjetRef = useRef();
    const infoTrackerDescriptionRef = useRef();

    const takeIno = () => {
        infoTrackerProjetRef.current.value = infoTracker.projet;
        infoTrackerDescriptionRef.current.value = infoTracker.description;
    }

    const handleUpdateTracker = () => {
        setInfoTracker({
            projet: infoTrackerProjetRef.current.value,
            description : infoTrackerDescriptionRef.current.value
        })
    }

  return (
    <div>

        <div className="card row justify-content-center my-3" style={{width: '30rem', margin: 'auto'}}>
            <div className="card-body">
                <h5 className="card-title">Projet : {infoTracker.projet}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Description : {infoTracker.description}</h6>
                <h1>Timer :</h1>
            </div>
            <Time />

            {/* <!-- Button trigger modal --> */}
            <button onClick={takeIno} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModal${infoTracker.id}`}>
              Modifier l'en-tête
            </button>

        </div>

        {/* <!-- Modal --> */}
        <div className="modal fade" id={`exampleModal${infoTracker.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modifier les infos de l'en-tête</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  <input ref={infoTrackerProjetRef} className="form-control my-2" type="text" placeholder="Projet" aria-label="default input example" />
                  <input ref={infoTrackerDescriptionRef} className="form-control my-2" type="text" placeholder="Description" aria-label="default input example" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                <button onClick={handleUpdateTracker} type="button" className="btn btn-primary" data-bs-dismiss="modal">Mettre à jour</button>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Tracker