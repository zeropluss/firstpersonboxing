export default function StatBar({label,value}:{label:string;value:number|null}) {return <p className="stat"><span>{label}</span><strong>{value??'—'}</strong></p>;}
