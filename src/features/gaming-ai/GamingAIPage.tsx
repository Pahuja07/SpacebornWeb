import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Bot, BrainCircuit, Gamepad2, GitBranch, ScanLine, ShieldCheck, Swords } from 'lucide-react';
import '../neural-ai/neural-ai-v4.css';
import './gaming-ai.css';

type VisualType = 'wave' | 'grid' | 'path' | 'compare';
const stages = [
  ['world', 'WORLD STATE', 'The game world becomes a live, inspectable state.', 'Geometry, cover, entities, objectives, and events are combined into the context available to an agent.', 'grid'],
  ['memory', 'MEMORY', 'Agents remember what changed and why it matters.', 'Persistent memory connects current decisions to encounters, player habits, objectives, and unresolved events.', 'wave'],
  ['planning', 'PLANNING', 'Goals and tactics are selected for the situation at hand.', 'A bounded planning layer scores moves, anticipates intent, and balances challenge, fairness, and character identity.', 'path'],
  ['execution', 'EXECUTION', 'The agent acts through the same controls a player would use.', 'Low-latency execution turns intent into replayable input while respecting engine and designer boundaries.', 'compare'],
] as const;

const capabilities = [
  ['WORLD', 'WORLD MODEL', 'Level Understanding', 'Geometry, Cover & Navigation', 'Reads the playable space and builds a usable world model without hand-authored scripts for every situation.', ScanLine, 'grid'],
  ['ENTITIES', 'ENTITY CONTINUITY', 'Player & Entity Tracking', 'Identity Through Occlusion', 'Maintains consistent identities through movement, respawns, and changing visibility.', Bot, 'path'],
  ['MEMORY', 'PERSISTENT MEMORY', 'World State', 'Encounters That Persist', 'Remembers meaningful events so routines, dialogue, and tactics respond to actual play history.', BrainCircuit, 'wave'],
  ['TACTICS', 'PREDICTIVE PLAY', 'Tactics & Prediction', 'Anticipate, Adapt, Respond', 'Plans flanks, retreats, timing, and cooperation around what players are likely to try next.', Swords, 'compare'],
] as const;

function MiniVisual({ type }: { type: VisualType }) {
  if (type === 'wave') return <svg viewBox="0 0 160 60" fill="none" aria-hidden="true"><path d="M8 32C28 4 42 56 66 30S104 8 152 31" stroke="#c084fc" strokeWidth="3" strokeLinecap="round" /></svg>;
  if (type === 'path') return <svg viewBox="0 0 160 60" fill="none" aria-hidden="true"><path d="M14 45 48 16l38 28 60-31" stroke="#a855f7" strokeWidth="3" /><circle cx="14" cy="45" r="5" fill="#c084fc" /><circle cx="48" cy="16" r="5" fill="#c084fc" /><circle cx="86" cy="44" r="5" fill="#c084fc" /><circle cx="146" cy="13" r="7" fill="#fff" stroke="#c084fc" strokeWidth="2" /></svg>;
  if (type === 'compare') return <svg viewBox="0 0 160 60" fill="none" aria-hidden="true"><path d="M18 18h124M18 42h124" stroke="rgba(255,255,255,.22)" strokeWidth="2" /><circle cx="58" cy="18" r="6" fill="#e9d5ff" /><circle cx="106" cy="42" r="6" fill="#a855f7" /><path d="M58 10v40M106 10v40" stroke="rgba(192,132,252,.45)" strokeDasharray="3 3" /></svg>;
  return <svg viewBox="0 0 160 60" fill="none" aria-hidden="true">{Array.from({ length: 12 }).map((_, i) => <rect key={i} x={18 + (i % 6) * 23} y={10 + Math.floor(i / 6) * 23} width="15" height="15" rx="3" fill={i === 2 || i === 8 ? 'rgba(168,85,247,.48)' : 'rgba(255,255,255,.06)'} stroke={i === 2 || i === 8 ? '#c084fc' : 'rgba(168,85,247,.25)'} />)}</svg>;
}

function GamingHeroAnimation() {
  useEffect(() => {
    const scene = document.createElement('script');
    scene.src = '/gaming/DERYK_Gaming_AI.js';
    document.body.appendChild(scene);
    return () => {
      scene.remove();
    };
  }, []);

  return <div id="c" className="gaming-ai-hero-animation" role="img" aria-label="Animated DERYK game controller, terrain, orbiting nodes, and cart" />;
}

export function GamingAIPage() {
  const [activeStage, setActiveStage] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const stage = stages[activeStage];

  return <div className="neural-v4-root gaming-ai-root" id="top">
    <div className="neural-v4-atmosphere" /><div className="neural-v4-grid-overlay" />
    <section className="neural-v4-hero gaming-ai-hero" aria-labelledby="gaming-hero-heading">
      <div className="neural-v4-hero-content"><span className="gaming-ai-kicker">DERYK / GAMING SYSTEMS</span><h1 id="gaming-hero-heading" className="neural-v4-title">Gaming <span className="accent">AI</span></h1><p className="neural-v4-tagline">Intelligence in every game.</p><p className="neural-v4-description">Building agents that understand the world, remember what happened, and adapt to how players actually play.</p><div className="neural-v4-hero-actions"><a href="#question" className="neural-v4-btn-primary">Explore the system <ArrowRight size={16} /></a><a href="#pipeline" className="neural-v4-btn-secondary">Inspect the pipeline <ArrowDownRight size={16} /></a></div></div>
      <div className="neural-v4-hero-visual-card gaming-ai-mascot-card"><div className="gaming-ai-scanline" /><GamingHeroAnimation /></div>
    </section>

    <section className="neural-v4-section gaming-ai-world-section" id="question"><div className="neural-v4-section-header"><h2 className="neural-v4-section-title">A game world should feel like it remembers you.</h2><p className="neural-v4-section-lead">The best moments in a game are not just scripted surprises. They come from places, characters, and encounters that respond to the way you play.</p></div><div className="gaming-ai-world-grid"><div className="gaming-ai-world-story"><span className="gaming-ai-kicker">A LIVING WORLD</span><h3>Every choice leaves a trace.</h3><p>Take a different route. Help one faction. Return to a place after the battle. The world can carry those moments forward so the next scene feels connected to the last.</p><p>That means allies who remember trust, rivals who change their tactics, and spaces that feel different because you were there.</p><a href="#pipeline" className="neural-v4-btn-secondary">See how the world connects <ArrowDownRight size={16} /></a></div><div className="gaming-ai-world-panel"><div className="gaming-ai-world-orbit"><Gamepad2 size={30} /><span>PLAYER TRACE</span></div><div className="gaming-ai-world-event"><span>RECENT EVENT</span><strong>You protected the northern gate.</strong><small>Memory carried into the next encounter</small></div><div className="gaming-ai-world-event"><span>WORLD RESPONSE</span><strong>Scouts now reinforce that route.</strong><small>Behavior changes without a new script branch</small></div><div className="gaming-ai-world-event"><span>DESIGN CONTROL</span><strong>Rules stay in the hands of the team.</strong><small>Fairness, difficulty, and boundaries remain tunable</small></div></div></div></section>

    <section className="neural-v4-section" id="pipeline"><div className="neural-v4-section-header"><h2 className="neural-v4-section-title">From game state to intelligent action.</h2><p className="neural-v4-section-lead">A four-stage architecture connects perception, memory, planning, and execution while keeping every boundary inspectable.</p></div><div className="neural-v4-pipeline-canvas"><div className="neural-v4-pipeline-nav" role="tablist" aria-label="Gaming AI pipeline stages">{stages.map((item, i) => <button type="button" key={item[0]} role="tab" aria-selected={activeStage === i} className={`neural-v4-pipeline-stage-btn ${activeStage === i ? 'active' : ''}`} onClick={() => setActiveStage(i)}><div className="neural-v4-stage-top-meta"><span>{item[1]}</span></div><span className="neural-v4-stage-name">{item[1]}</span><span className="neural-v4-stage-sub">{item[2]}</span></button>)}</div><div className="neural-v4-pipeline-detail-card"><div className="neural-v4-pipeline-detail-left"><div className="neural-v4-stage-mini-visual"><MiniVisual type={stage[4]} /></div><h3>{stage[2]}</h3><p>{stage[3]}</p><ul><li>Game state stays player-visible and inspectable</li><li>Decisions remain bounded by designer rules</li><li>Actions can be replayed and debugged</li></ul></div><div className="neural-v4-pipeline-detail-right"><div className="neural-v4-inspector-header"><span>LIVE INSPECTOR</span><span className="gaming-ai-status-dot">ACTIVE</span></div>{['Input: Engine Telemetry', `Layer: ${stage[1]}`, 'Boundary: Designer Controlled'].map((item) => <div className="neural-v4-inspector-row" key={item}><span>{item.split(': ')[0]}</span><strong>{item.split(': ')[1]}</strong></div>)}<div className="neural-v4-pipeline-checkpoints"><span className="neural-v4-checkpoint-item"><ShieldCheck size={15} /> Designer bounds</span><span className="neural-v4-checkpoint-item"><GitBranch size={15} /> Replayable decisions</span></div></div></div></div></section>

    <section className="neural-v4-section" id="capabilities"><div className="neural-v4-section-header"><h2 className="neural-v4-section-title">Foundational capabilities for believable play.</h2><p className="neural-v4-section-lead">Connected capabilities turn raw engine state into behavior players can feel and designers can control.</p></div><div className="neural-v4-areas-grid">{capabilities.map((item, i) => { const Icon = item[5]; return <article className="neural-v4-area-card gaming-ai-capability-card" key={item[0]}><div className="neural-v4-area-meta"><span>{item[0]}</span><span>{item[1]}</span></div><div className="neural-v4-area-visual"><MiniVisual type={item[6]} /></div><h3 className="neural-v4-area-title">{item[2]}</h3><div className="gaming-ai-subtitle">{item[3]}</div><p className="neural-v4-area-copy">{item[4]}</p>{expanded === i && <div className="neural-v4-area-expanded-details"><strong>System boundary:</strong> Game rules, input limits, and performance budgets remain active.</div>}<div className="neural-v4-area-footer"><button type="button" className="neural-v4-expand-btn" onClick={() => setExpanded(expanded === i ? null : i)}>{expanded === i ? 'Collapse scope −' : 'Expand scope +'}</button><Icon size={16} /></div></article>; })}</div></section>

    <section className="neural-v4-section" id="status"><div className="neural-v4-section-header"><h2 className="neural-v4-section-title">Clear about what is being built.</h2><p className="neural-v4-section-lead">Gaming AI is an architectural research direction: adaptive, auditable agents that fit inside real game systems.</p></div><div className="neural-v4-status-grid"><article className="neural-v4-status-card"><div className="neural-v4-status-header"><span className="neural-v4-status-badge-panel investigating">INVESTIGATING</span><Bot size={16} /></div><h3>What we are exploring</h3><p>World models, persistent memory, player modeling, tactical prediction, and low-latency execution.</p><div className="neural-v4-status-note">FOCUS: Believable adaptation within authored boundaries.</div></article><article className="neural-v4-status-card"><div className="neural-v4-status-header"><span className="neural-v4-status-badge-panel validated">DESIGN PRIORITY</span><ShieldCheck size={16} /></div><h3>What stays controlled</h3><p>Information access, difficulty, action permissions, dialogue tone, and runtime budgets remain configurable.</p><div className="neural-v4-status-note">RULE: Adaptive does not mean uncontrolled.</div></article><article className="neural-v4-status-card"><div className="neural-v4-status-header"><span className="neural-v4-status-badge-panel boundary">BOUNDARY</span><Gamepad2 size={16} /></div><h3>What this is not</h3><p>This is a research direction, not a downloadable model, public SDK, or shipping game integration.</p><div className="neural-v4-status-note">STATUS: Experimental system design.</div></article></div></section>

    <section className="neural-v4-closing gaming-ai-closing"><span className="neural-v4-section-kicker">DERYK GAMING AI RESEARCH</span><h2>Better agents. Richer worlds. More intentional play.</h2><p>Explore how DERYK connects game understanding, memory, planning, and execution into a single gaming intelligence layer.</p><div className="neural-v4-closing-actions"><a href="#pipeline" className="neural-v4-btn-primary">Inspect the pipeline <ArrowRight size={16} /></a><Link to="/deryk" className="neural-v4-btn-secondary">Return to DERYK overview <ArrowUpRight size={16} /></Link></div></section>
  </div>;
}

export default GamingAIPage;
