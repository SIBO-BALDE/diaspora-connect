import React from 'react'

export default function GestionMaison() {
  return (
    <div>
           <div>
           <table className="table">
              <thead className="table-light" id='hearder-color'>
                <tr>
                <th>Profile</th>
                <th>Prenom</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Téléphone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Icon</td>
                  <td>Moussa</td>
                  <td>Bass</td>
                  <td>bass@gmail.com</td>
                  <td>778529967</td>
                </tr>
    
              </tbody>
            </table>
           </div>
           <div>
            <div></div>
            <div>
             <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
             <div className="progress-bar" style={{width:'0%'}}></div>
             </div>
            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{width:'25%'}}></div>
            </div>
            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{width:'50%'}}></div>
            </div>
            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{width:'75%'}}></div>
            </div>
            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{width:'100'}}></div>
            </div>
            </div>
           </div>
    </div>
  )
}
