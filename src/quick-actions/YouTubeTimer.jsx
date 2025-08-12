import React, { useState } from 'react';
import QuickActionHeader from './QuickActionHeader';
import './qa.css';

const YouTubeTimer = () => {
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      <QuickActionHeader />
      <main className="page">
        {/* Left column */}
        <aside className="left">
          <h1>Set a Timer on Youtube</h1>

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
          <div className="resources-title">How to tutorial</div>
          <div className="resources-grid">
            <a href="https://www.youtube.com/watch?v=m8liKZx2DKs">
              <img src="./pictures/How-to-youtube-timer.png" alt="How to set a timer on YouTube" />
            </a>
          </div>

          <div className="resources-title">Resources</div>
          <div className="resources-grid">
            <a href="https://www.commonsensemedia.org/videos/ditch-the-distractions-supporting-kids-and-teens-with-phone-notifications">
              <img src="./pictures/ditch-distractions.png" alt="Ditch the distractions" />
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
                  <li>Tap your profile picture .</li>
                  <li>Tap Settings.</li>
                  <li>Tap General.</li>
                  <li>Next to Remind me to take a break, tap the switch on or off.</li>
                  <li>If switching to On, select your Reminder frequency and tap OK.</li>
                </ol>
              </div>

              <img src="./pictures/Take-break.png" alt="Take a Break" />

              <h2>Why it helps</h2>
              <p>YouTube pops a gentle pause reminder every X minutes—just 
                enough friction to stop rapid-swiping.</p>
              <h2>Tips 💬</h2>
              <p>Frame this exercise as a cool brain challenge.</p>
              <p>When you get a reminder, you can tap to keep watching a video. 
                You can tap Change break reminder to edit the reminder frequency 
                or turn the reminder on or off.</p>
              <p>Keep in mind:.</p>
              <ul>
                <li>If you close the app, sign out, switch devices, 
                  or pause a video for more than 30 minutes, the timer will reset.</li>
                <li>When watching offline videos or casting from your 
                  phone, the timer doesn't run.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default YouTubeTimer;
