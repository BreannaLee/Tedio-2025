import React, { useState } from 'react';
import QuickActionHeader from './QuickActionHeader';
import './qa.css';

const BuildWatchlist = () => {
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      <QuickActionHeader />
      <main className="page">
        {/* Left column */}
        <aside className="left">
          <h1>Build a Watchlist</h1>

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
            <a href="https://www.commonsensemedia.org/articles/how-to-find-quality-kids-videos-online">
              <img src="./pictures/quality-kids-videos.png" alt="Quality kids videos" />
            </a>
            <a href="https://www.commonsensemedia.org/articles/educational-videos-that-actually-teach">
              <img src="./pictures/educational-videos.png" alt="Educational videos" />
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
                  <li>Sit down with your child and discuss what types of content they enjoy</li>
                  <li>Research and curate a list of 10-15 high-quality videos or channels</li>
                  <li>Include a mix of educational, entertaining, and age-appropriate content</li>
                  <li>Save these to a playlist or favorites folder</li>
                  <li>Agree that screen time is limited to this pre-approved content</li>
                </ol>
              </div>

              <img src="./pictures/build-watchlist.png" alt="Build a Watchlist" />

              <h2>Why it helps</h2>
              <p>Eliminates the endless scrolling and decision fatigue that leads to excessive screen time. 
                When content is pre-selected, kids can enjoy their screen time without getting lost in the algorithm.</p>
              
              <h2>Tips 💬</h2>
              <p>Involve your child in the selection process to give them ownership and excitement about the content.<br />
              <br />Regularly update the watchlist with new content to keep it fresh and engaging.<br />
              <br />Use this as an opportunity to introduce educational content that feels fun and engaging.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BuildWatchlist;
