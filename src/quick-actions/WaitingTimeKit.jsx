import React, { useState } from 'react';
import QuickActionHeader from './QuickActionHeader';
import './qa.css';

const WaitingTimeKit = () => {
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      <QuickActionHeader />
      <main className="page">
        {/* Left column */}
        <aside className="left">
          <h1>Make a Waiting Time Kit</h1>

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
            <a href="https://www.parents.com/kids/development/intellectual/play-ideas-to-keep-kids-busy-while-working-from-home/">
              <img src="./pictures/WFH-kids-busy.png" alt="Keep your kid busy" />
            </a>
            <a href="https://www.commonsensemedia.org/articles/how-to-raise-a-reader">
              <img src="./pictures/raise-reader.png" alt="How to raise a reader" />
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
                  <li>Grab a small pouch, ziplock bag, or mini tote that your 
                    child can carry or keep in your car/purse.</li>
                  <li>Pick 3–5 lightweight, screen-free items: a tiny puzzle, 
                    a pop-it toy, small book, crayons + paper, stickers, or a scavenger list.</li>
                  <li>Customize based on your child's interests — rotate items 
                    every few weeks so the kit feels fresh.</li>
                  <li>Add one "slow-down" item: like a calming audio playlist, 
                    gratitude prompts, or coloring pages about emotions.</li>
                  <li>Keep it handy for idle moments like waiting in line, 
                    at restaurants, doctor's offices, or in the car.</li>
                </ol>
              </div>

              <img src="./pictures/waiting-time-kit.png" alt="Waiting Time Kit" />
              <p>Image from Connie Park</p>

              <h2>Why it helps</h2>
              <p>Gives children an offline alternative during micro-idle moments. 
                Best for ages 3–8, but can be adjusted for older kids 
                (e.g., with books or drawing pads).</p>
              <h2>Tips 💬</h2>
              <p>Make it a shared activity: Let your child help "build" their kit. 
                It gives them a sense of control and ownership.<br />
                <br />Pair the kit with a habit cue — for example, say: 
                "We pull this out while we wait!" This builds a replacement habit for defaulting to screens.<br />
                <br />Normalize boredom: Remind kids (and yourself!) 
                that <b>micro-boredom is okay</b>. These kits gently teach 
                patience and imagination without overstimulation.<br />
                <br />For older kids, consider a small journal, 
                trivia cards, or pocket sketchbook instead of toys.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WaitingTimeKit;
