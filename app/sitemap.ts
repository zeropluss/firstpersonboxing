import type {MetadataRoute} from 'next';
import {pages} from '@/lib/pages';
import {game} from '@/lib/content';
import {siteUrl} from '@/lib/seo';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return [{url:siteUrl+'/',lastModified:game.updatedAt},...Object.entries(pages).filter(([,p])=>p.index).map(([slug,p])=>({url:`${siteUrl}/${slug}/`,lastModified:p.updatedAt}))];}
