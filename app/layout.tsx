import type {ReactNode} from 'react';
import Link from 'next/link';
import './globals.css';
import JsonLd from '@/components/JsonLd';
import {game} from '@/lib/content';
import {siteUrl,videoGame} from '@/lib/seo';
import Analytics from '@/components/Analytics';
export default function Layout({children}:{children:ReactNode}){return <html lang="en"><body><a className="sr-only focus:not-sr-only" href="#main">Skip to content</a><header><div className="shell header"><Link className="brand" href="/">FIRST PERSON<br/><span>BOXING / FIELD MANUAL</span></Link><nav aria-label="Main">{['codes','styles','tier-list','controls','guide','discord'].map(p=><Link key={p} href={`/${p}/`}>{p.replace('-',' ').toUpperCase()}</Link>)}</nav></div></header><main id="main"><div className="shell">{children}</div></main><footer><div className="shell"><nav>{['about','privacy','contact','terms','disclaimer','updates','combos'].map(p=><Link key={p} href={`/${p}/`}>{p[0].toUpperCase()+p.slice(1)}</Link>)}</nav><p>Independent fan resource. Not affiliated with Roblox or Can You Box?. No ads, account access or downloads.</p></div></footer><JsonLd data={{'@context':'https://schema.org','@type':'WebSite',name:'First Person Boxing Field Manual',url:siteUrl}}/><JsonLd data={{'@context':'https://schema.org','@type':'Organization',name:'First Person Boxing Field Manual',url:siteUrl,logo:siteUrl+'/icon.svg'}}/><JsonLd data={videoGame(game)}/><Analytics/></body></html>;}
