import React, { useState } from 'react';
import QuickActionHeader from './QuickActionHeader';
import './qa.css';

const BlockChannel = () => {
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      <QuickActionHeader />
      <main className="page">
        {/* Left column */}
        <aside className="left">
          <h1>Block a Channel</h1>

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
            <a href="https://www.commonsensemedia.org/articles/how-to-block-inappropriate-content-on-youtube">
              <img src="./pictures/block-inappropriate.png" alt="Block inappropriate content" />
            </a>
            <a href="https://www.commonsensemedia.org/articles/parental-controls-on-youtube">
              <img src="./pictures/parental-controls.png" alt="Parental controls" />
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
                  <li>Go to the channel you want to block</li>
                  <li>Click on the channel name or avatar</li>
                  <li>Click the three dots (⋮) next to the Subscribe button</li>
                  <li>Select "Block user" or "Don't recommend channel"</li>
                  <li>Confirm the action</li>
                </ol>
              </div>

              <img src="./pictures/block-channel.png" alt="Block Channel" />

              <h2>Why it helps</h2>
              <p>Prevents inappropriate or unwanted content from appearing in recommendations. 
                Gives you control over what content your child might encounter while browsing YouTube.</p>
              
              <h2>Tips 💬</h2>
              <p>Use this feature for channels that consistently produce content that doesn't align with your family's values.<br />
              <br />Combine with other safety features like Restricted Mode for comprehensive protection.<br />
              <br />Regularly review and update blocked channels as your child's interests and needs change.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlockChannel;
