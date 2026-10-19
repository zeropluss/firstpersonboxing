import type {Style} from '@/lib/content';
import StatBar from './StatBar';
export default function StyleCard({style:s}:{style:Style}){return <article className="card"><small>{s.rarity}</small><h2>{s.name}</h2>{(['damage','speed','staminaCost','range'] as const).map(k=><StatBar key={k} label={k} value={s[k]}/>)}<p>Best for {s.bestFor} · Obtain: {s.howToGet}</p><p>{s.notes}</p><a href={s.sourceUrl}>Evidence · {s.verifiedAt}</a></article>;}
