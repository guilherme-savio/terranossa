import React, { useState } from 'react';
import DateProgress from './DateProgress';

export default function Activity({ currentActivity }) {
  const [tab, setTab] = useState(0);
  const hasActivity = currentActivity != null;

  function selectTab(value) {
    return tab === value ? "tab-active " : null
  }

  function renderParticipants() {
    let participants = [];

    currentActivity.participants.forEach(participant => {
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
      {hasActivity 
        ? <div className="calendar-header mb-4 col-span-2">
            <div>
              <h2 className="text-xl font-bold text-center">{currentActivity.name}</h2>
              <DateProgress startDate={currentActivity.startDate} endDate={currentActivity.endDate} />
              <div className="tabs tabs-boxed">
                <a className={selectTab(0) + "tab tab-bordered justify-end"} onClick={() => setTab(0)}>Geral</a> 
                <a className={selectTab(1) + "tab tab-bordered justify-end"} onClick={() => setTab(1)}>Participantes</a> 
              </div>
            </div>
            <div>
              {tab === 0 
                ? (<p className="my-4 text-slate-500 text-lg leading-relaxed">
                    <strong>Local:</strong> {currentActivity.location}
                    <br />
                    <strong>Dificuldade:</strong> {currentActivity.difficulty}
                    <br />
                    <strong>Descrição:</strong> {currentActivity.description}
                  </p>) 
                : (<p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {renderParticipants()}
                  </p>)}
            </div>
          </div> 
        : null}
    </>
  );
}
