import React, { useState } from 'react';
import QuickActionHeader from './QuickActionHeader';
import './qa.css';

const Downtime = () => {
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      <QuickActionHeader />
      <main className="page">
        {/* Left column */}
        <aside className="left">
          <h1>Schedule Downtime</h1>

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
            <a href="https://www.commonsensemedia.org/articles/how-to-create-a-family-media-plan">
              <img src="./pictures/family-media-plan.png" alt="Family media plan" />
            </a>
            <a href="https://www.commonsensemedia.org/articles/screen-free-week-activities">
              <img src="./pictures/screen-free-week.png" alt="Screen free week" />
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
                  <li>Choose specific times when screens are completely off-limits</li>
                  <li>Common downtime periods: meal times, bedtime routine, first hour after school</li>
                  <li>Make downtime activities fun and engaging</li>
                  <li>Stick to the schedule consistently</li>
                  <li>Use visual cues or timers to signal downtime beginning and end</li>
                </ol>
              </div>

              <img src="./pictures/downtime.png" alt="Downtime" />

              <h2>Why it helps</h2>
              <p>Creates predictable breaks from screens that allow for family connection, 
                physical activity, and other important developmental activities. Regular downtime 
                helps reset attention spans and reduces screen dependency.</p>
              
              <h2>Tips 💬</h2>
              <p>Start with shorter downtime periods and gradually increase them as your family adjusts.<br />
              <br />Plan fun activities during downtime so kids look forward to it rather than dread it.<br />
              <br />Be consistent - kids thrive on routine and predictability.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Downtime;
