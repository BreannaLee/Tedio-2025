import React, { useState } from 'react';
import QuickActionHeader from './QuickActionHeader';
import './qa.css';

const TimeTogether = () => {
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      <QuickActionHeader />
      <main className="page">
        {/* Left column */}
        <aside className="left">
          <h1>Time Together</h1>

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
            <a href="https://offline.kids/activities/">
              <img src="./pictures/screen-free-activities.png" alt="Offline activities" />
            </a>
            <a href="https://www.commonsensemedia.org/articles/screen-free-activities-for-kids-and-teens-to-enjoy-over-the-summer">
              <img src="./pictures/screen-free.png" alt="Resource image 1 placeholder" />
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
                  <li>Observe when your child is about to dive into screen time out of boredom or habit.</li>
                  <li>Offer a warm alternative with a smile: "Hey, let's take a silly walk to the park 
                    together," or "Want to snuggle up and watch a movie with me instead?"
                  <br />*Tip: Get kids outside as much as you can. Research shows that kids 
                  who have more physical activity and outdoor play have better relationships with peers.</li>
                  <li>Keep it specific and short-term — the activity should sound easy and fun.</li>
                  <li>Match their energy level: Choose something calm if they seem tired 
                    or something active if they're fidgety.</li>
                  <li>Celebrate the switch with affirming language: "That was fun! I'm glad we did that together."</li>
                </ol>
              </div>

              <a href="https://pathways.org/activities-for-kids-to-do-at-home">
                <img src="./pictures/time-together.png" alt="family time" />
              </a>
              <p>Image from <a href="https://pathways.org/activities-for-kids-to-do-at-home">Pathways</a></p>

              <h2>Why it helps</h2>
              <p>Research shows that when kids lead their own play—especially creative 
                or adventurous play—they build better focus, emotional control, and 
                mental health over time. But playtime is shrinking. While 70% of 
                today's parents played outside daily as kids, only 31% say their 
                own kids do the same. As children grow, play often gets pushed 
                aside for screens or packed schedules. Tweens now average 5.5 
                hours of non-school screen time daily.<br />
              <br />Kids up to age 12 (and beyond) still need lots of free, 
              tech-free playtime—not just sports or structured activities. 
              This kind of play can include art, puzzles, cooking, made-up 
              games, or kicking a ball around. Whether it's alone, with siblings, 
              or friends, unstructured play is key to healthy development—and it's worth protecting.<br />
              <br /> Source: <a href="https://sageparents.org/guidebook/">Guidebook — Sage Parents</a></p>

              <h2>Tips 💬</h2>
              <p>Kids are more likely to say "yes" to together-time if it feels genuinely fun, not like a <b>forced replacement</b>.<br />
              <br />Use small rituals — Friday movie night, walk after dinner, weekend waffles — to <b>build routines that feel special</b>. <br />
              <br />Even 15 minutes of shared time can meet a child's need for connection and 
              reduce their urge to fill space with solo screen use.<br />
              <br />Frame it as "doing something cool with you" — not "taking the screen away."</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TimeTogether;
