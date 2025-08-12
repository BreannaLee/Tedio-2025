import React, { useState } from 'react';
import QuickActionHeader from './QuickActionHeader';
import './qa.css';

const RemoveDevices = () => {
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      <QuickActionHeader />
      <main className="page">
        {/* Left column */}
        <aside className="left">
          <h1>Remove Devices from Bedroom</h1>

          <div className="card">
            <div className="checkbox-row">
              <input 
                type="checkbox" 
                id="doneCheckbox" 
                checked={isDone}
                onChange={(e) => setIsDone(e.target.checked)}
              />
              <label htmlFor="doneCheckbox">Done?</label>
            </div>
          </div>

          <div className="resources-title">Resources</div>
          <div className="resources-grid">
            <a href="https://www.commonsensemedia.org/articles/how-to-create-a-tech-free-bedroom">
              <img src="./pictures/tech-free-bedroom.png" alt="Tech free bedroom" />
            </a>
            <a href="https://www.commonsensemedia.org/articles/bedtime-routines-for-kids">
              <img src="./pictures/bedtime-routines.png" alt="Bedtime routines" />
            </a>
          </div>
        </aside>

        {/* Right column */}
        <section className="right">
          <div className="outer">
            <div className="overlay">
              <h2>How to do it</h2>
              <div className="bullets">
                <ol>
                  <li>Designate a central charging station outside the bedroom</li>
                  <li>Set a "device curfew" 30-60 minutes before bedtime</li>
                  <li>Create a relaxing bedtime routine without screens</li>
                  <li>Use an alarm clock instead of phone alarm</li>
                  <li>Keep the bedroom as a screen-free sanctuary</li>
                </ol>
              </div>

              <img src="./pictures/remove-devices.png" alt="Remove Devices" />

              <h2>Why it helps</h2>
              <p>Removes the temptation to check devices late at night, which can interfere with sleep quality. 
                Creates a clear boundary between active time and rest time, improving both sleep and mental health.</p>
              
              <h2>Tips 💬</h2>
              <p>Make the charging station attractive and convenient so kids don't feel like they're being punished.<br />
              <br />Replace screen time with calming activities like reading, gentle music, or quiet conversation.<br />
              <br />Lead by example - parents should also follow the device curfew.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RemoveDevices;
