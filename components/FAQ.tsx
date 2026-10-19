import JsonLd from './JsonLd';
import {faq} from '@/lib/seo';
export default function FAQ({items}:{items:{q:string;a:string}[]}){return <section><h2>Questions, answered</h2>{items.map(x=><details key={x.q}><summary>{x.q}</summary><p>{x.a}</p></details>)}<JsonLd data={faq(items)}/></section>;}
