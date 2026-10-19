import Link from 'next/link';
import JsonLd from './JsonLd';
import {breadcrumb} from '@/lib/seo';
export default function Breadcrumb({name,path}:{name:string;path:string}){return <><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>{name}</span></nav><JsonLd data={breadcrumb([{name:'Home',path:'/'},{name,path}])}/></>;}
