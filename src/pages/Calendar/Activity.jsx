import React, { useState } from 'react';
import DateProgress from './DateProgress';

export default function Activity({ activity }) {
  const [tab, setTab] = useState(0);

  function selectTab(value) {
    return tab === value ? "tab-active " : null
  }

  function renderParticipants() {
    let participants = [];

    activity.participants.forEach(participant => {
      participants.push(
      <>
        <strong>Participante:</strong> {participant.name}
        <br />
      </>)
    })

    return participants;
  }

  return (
    <>
      <input type="checkbox" id={activity.id} className="modal-toggle" />
      <label htmlFor={activity.id} className="modal cursor-pointer">
        <label className="modal-box relative w-11/12 max-w-xl">
          <div>
            <h2 className="text-xl font-bold text-center">{activity.name}</h2>
            <DateProgress startDate={activity.startDate} endDate={activity.endDate} />
            <div className="tabs tabs-boxed">
              <a className={selectTab(0) + "tab tab-bordered justify-end"} onClick={() => setTab(0)}>Geral</a> 
              <a className={selectTab(1) + "tab tab-bordered justify-end"} onClick={() => setTab(1)}>Participantes</a> 
            </div>
          </div>
          <div>
            {tab === 0 
              ? (<p className="my-4 text-slate-500 text-lg leading-relaxed">
                  <strong>Local:</strong> {activity.location}
                  <br />
                  <strong>Dificuldade:</strong> {activity.difficulty}
                  <br />
                  <strong>Descrição:</strong> {activity.description}
                </p>) 
              : (<p className="my-4 text-slate-500 text-lg leading-relaxed">
                  {renderParticipants()}
                </p>)}
          </div>
        </label>
      </label>
    </>
  );
}
