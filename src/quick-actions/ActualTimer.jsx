import React, { useState } from 'react';
import QuickActionHeader from './QuickActionHeader';
import './qa.css';

const ActualTimer = () => {
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      <QuickActionHeader />
      <main className="page">
        {/* Left column */}
        <aside className="left">
          <h1>Set an Actual Timer</h1>

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
            <a href="https://www.commonsensemedia.org/articles/how-to-help-kids-manage-their-own-screen-time">
              <img src="./pictures/manage-screen-time.png" alt="Manage screen time" />
            </a>
            <a href="https://www.commonsensemedia.org/articles/screen-time-guidelines-for-big-kids">
              <img src="./pictures/screen-time-guidelines.png" alt="Screen time guidelines" />
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
                  <li>Before starting any screen activity, set a visible timer (phone, kitchen timer, etc.)</li>
                  <li>Agree on the time limit together with your child</li>
                  <li>Place the timer where both of you can see it</li>
                  <li>When the timer goes off, screens go off immediately</li>
                  <li>Celebrate successful completion of the time limit</li>
                </ol>
              </div>

              <img src="./pictures/actual-timer.png" alt="Actual Timer" />

              <h2>Why it helps</h2>
              <p>Creates a clear, visual boundary for screen time that both parent and child can see. 
                The external timer removes the parent from being the "bad guy" and makes the limit feel fair and objective.</p>
              
              <h2>Tips 💬</h2>
              <p>Start with shorter time limits and gradually increase as your child builds trust with the system.<br />
              <br />Use a timer that makes a clear sound so there's no confusion about when time is up.<br />
              <br />Frame it positively: "Let's see how much fun we can have in 30 minutes!" rather than "You only get 30 minutes."</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ActualTimer;
