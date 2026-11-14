import fs from 'fs';import {render} from '../dist-ssr/entry-server.js';
const env=fs.existsSync('.env')?Object.fromEntries(fs.readFileSync('.env','utf8').split('\n').filter(l=>l.includes('=')).map(l=>l.split('='))):{};
const site=(process.env.VITE_SITE_URL||env.VITE_SITE_URL||'https://allan.dev').replace(/\/$/,'');
let h=fs.readFileSync('dist/index.html','utf8');
if(!h.includes('<div id="root"><!--app--></div>'))throw new Error('root placeholder missing');
fs.writeFileSync('dist/index.html',h.replace('<div id="root"><!--app--></div>','<div id="root" data-prerendered="1">'+render()+'</div>'));
fs.writeFileSync('dist/robots.txt','User-agent: *\nAllow: /\n\nSitemap: '+site+'/sitemap.xml\n');
fs.writeFileSync('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"><url><loc>'+site+'/</loc><lastmod>'+new Date().toISOString().slice(0,10)+'</lastmod><changefreq>monthly</changefreq><priority>1.0</priority><image:image><image:loc>'+site+'/images/allan-hero.jpg</image:loc></image:image></url></urlset>\n');
console.log('prerendered for',site);
