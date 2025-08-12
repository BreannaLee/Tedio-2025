import React, { useState } from 'react';
import QuickActionHeader from './QuickActionHeader';
import './qa.css';

const PauseAndPredict = () => {
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      <QuickActionHeader />
      <main className="page">
        {/* Left column */}
        <aside className="left">
          <h1>Pause and Predict</h1>

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
            <img src="" alt="Resource image 1 placeholder" />
            <img src="" alt="Resource image 2 placeholder" />
          </div>
        </aside>

        {/* Right column */}
        <section className="right">
          <div className="outer">
            <div className="overlay">
              <h2>How to do it</h2>
              <div className="bullets">
                <ol>
                  <li>Read the title aloud (with parents' help depending on the age)</li>
                  <li>What is this video probably about?</li>
                  <li>Why do I want to click on this video?</li>
                  <li>Do I see any sign of untrustworthiness or danger from the Thumbnail or the creator?</li>
                </ol>
              </div>
            </div>
            <div className="inner">
              <h3>Subheading Inside White Box</h3>
              <img src="" alt="Illustrative image inside rounded box placeholder" />
              <ol>
                <li>Numbered item one.</li>
                <li>Numbered item two.</li>
                <li>Numbered item three.</li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PauseAndPredict;
