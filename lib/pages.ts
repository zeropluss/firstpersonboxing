import {month} from './seo';
const entry=(title:string,h1:string,description:string,index=true)=>({title,h1,description,index,verifiedAt:'2026-10-19',updatedAt:'2026-10-19'});
export const pages:Record<string,ReturnType<typeof entry>>={
codes:entry(`First Person Boxing Codes (${month()})`,'First Person Boxing Codes','Reported code strings, rewards, redemption instructions and clear third-party verification status.'),
styles:entry('First Person Boxing Playstyles & Fighting Approach','Find your fighting approach','Choose an editorial counter-focused, pressure or observation-led approach without invented style statistics.'),
 'tier-list':entry('First Person Boxing Training Priorities','What should you practice first?','An editorial learning order covering controls, defense, fatigue and counters. No unsupported style rankings.',false),
controls:entry('First Person Boxing Controls & Platform Setup','Controls & platform setup','Prepare for PC, mobile or console and understand attacks, slips, guards, counters and stamina.'),
combos:entry('First Person Boxing Counters & Exchange Guide','Build a better exchange','Learn an editorial observe, defend, respond and reset routine based on developer-described mechanics.'),
defense:entry('First Person Boxing Guards, Slips & Stamina','Defense wins the next exchange','Understand head and body guards, slip practice and the officially described fatigue slowdown.'),
knockouts:entry('First Person Boxing Knockdowns & Replay Guide','Learn from the final exchange','Use cinematic knockdowns and replays to choose an observable practice goal.'),
guide:entry('First Person Boxing Beginner Guide: How to Play','Your first rounds, with a plan','Start with AI practice, platform preparation and a saved checklist for your next practice session.'),
discord:entry('First Person Boxing Discord & Official Links','Find the right corner','Official Roblox experience and creator community with an attributed third-party Discord invitation.'),
updates:entry('First Person Boxing Source Reviews & Site Updates','The ringside notebook','Separate description reviews, website changes and developer announcement sources.')
};
