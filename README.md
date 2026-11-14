# allan

Personal site of Allan Simiyu Waliaulah: machine learning expert, back end developer and tutor.

```
npm install
npm run dev      # develop at localhost:5173
npm run build    # builds, then pre-renders static HTML for SEO into dist/
```

Set your real domain in `.env` (`VITE_SITE_URL`). It feeds the canonical link, Open Graph tags, structured data, `sitemap.xml` and `robots.txt`.
Deploy `dist/` on Vercel, Netlify or Cloudflare Pages. Content lives in `src/App.jsx`.
