import React, { useState } from 'react';
import QuickActionHeader from './QuickActionHeader';
import './qa.css';

const RemoveShorts = () => {
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

          <div className="resources-title">How to</div>
          <div className="resources-grid">
            <a href="https://www.youtube.com/shorts/d_alXuTYqgw">
              <img src="./pictures/moderate.jpg" alt="How to moderate kids' content" />
            </a>
          </div>
          <div className="resources-title">Resources</div>
          <div className="resources-grid">
            <a href="https://www.commonsensemedia.org/articles/cellphones-and-devices-a-guide-for-parents-and-caregivers">
              <img src="./pictures/cellphones-and-devices.png" alt="cellphones and devices guide" />
            </a>
            <a href="https://www.commonsensemedia.org/articles/who-is-collecting-my-kids-data-and-what-are-they-doing-with-it">
              <img src="./pictures/collecting-data.png" alt="Collecting my kid's data" />
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
                  <li>On YouTube, navigate to your Home screen.</li>
                  <li>Find the Shorts section.</li>
                  <li>Click the three vertical dots.</li>
                  <li>Click Not Interested.</li>
                  <p>Time to complete: ~1 minute</p>
                </ol>
              </div>
              <h2>Why it helps</h2>
              <p>Making Shorts less accessible in the first place to 
                prevent mindlessly entering the endless loop. This 
                encourages <b>intentional viewing</b>.</p>
              <h2>Tips 💬</h2>
              <p>Have a conversation on <b>why</b> auto play is bad.</p>
            </div>
            <div className="inner">
              <p>You can say something like:<br />
                <b>"There are so many fun things in the world!"</b><br />
                Think about the last time you found something 
                interesting—maybe on the street, at school, or 
                anywhere else. It could have been watching 
                ants march in a straight line, or looking up 
                at the sky to see airplanes and imagining where they might be going.<br />
                <br />When you stay curious and look at the world with 
                playful eyes, there are endless little joys to notice. 
                (Here you can compliment your child's inherent curiosity 
                here with real examples in the past).<br />
                <br />But flashy, exciting videos are made to pull 
                our attention away. Even though they can be fun, 
                they weaken your ability to appreciate cute, fun, 
                and interesting pieces, especially in the real world! 
                YouTube can be great, but do you want it to take 
                away your curious, playful mind?<br />
                <br /><b>Let's remember how special our curiosity is, 
                and how many little treasures are waiting for 
                us when we look around. When we keep that curiosity, 
                the number of joyful moments we find can grow a hundred times over."</b></p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RemoveShorts;
