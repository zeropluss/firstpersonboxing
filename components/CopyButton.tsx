'use client';
import {useState} from 'react';
export default function CopyButton({code}:{code:string}) { const [label,setLabel]=useState('Copy');return <button aria-label={`Copy ${code}`} onClick={async()=>{try {await navigator.clipboard.writeText(code);setLabel('Copied');}catch {setLabel('Select and copy manually');}}}>{label}</button>; }
