# Estimé website

The product site of Estimé (EN: Estimate), Newco Studio's tender-analysis app: the explainer video, the four modules
(takeoff, specification analysis, pricing, bid), the knowledge base, the assistant, the disciplines, adapting Estimé to
your field, and a contact call to action. Static HTML, CSS and JavaScript in the app's dark theme, bilingual (French by
default, English), served by GitHub Pages.

The Newco Studio site is a separate, independent repository (`newco-studio/newco-studio.github.io`). The two sites
share no files; the only link between them is one outbound link each way, set in [`config.js`](config.js).

## Pages

| File | What |
|---|---|
| `index.html` | The whole product page, in sections: hero, video, modules, knowledge base, assistant, disciplines, your field, contact |
| `404.html` | Page not found |

## Structure

```
config.js          the one setting that names another site (NEWCO_URL)
app.js             language switch, menu, outbound links, video, tabs, lightbox
styles.css         the app's dark-theme tokens (Studio UI kit) and layout
images/            Estimé icon, favicons, Newco wordmark, og-image.jpg, shots/ (screenshots, -fr and -en)
videos/            the explainer videos (see below); empty in the repository for now
.nojekyll          GitHub Pages serves the files as they are
```

All paths are relative, so the site works under `/estime/` today and at a domain root later.

## Languages

Every text exists in both languages in the HTML (`<span class="fr">` / `<span class="en">`); `body[data-lang]` shows
one. The choice comes from `?lang=fr|en`, then the visitor's last choice (`localStorage`), else French. Attributes that
change with the language carry the French value and a `data-<attribute>-en` value, listed in `data-i18n`. The product
is named "Estimé" in French and "Estimate" in English, as in the app.

## Videos

The video section plays `videos/estime-fr.mp4` or `videos/estime-en.mp4` by language. Until the file exists, the poster
shows and play says "Video coming soon". To add them, copy the MP4 files (H.264 + AAC, `+faststart`) into `videos/`
and push; no code change. Keep each file under GitHub's 100 MB limit (prefer under 50 MB).

## Images

`images/shots/` holds screenshots of the app in French and English: most are from a real tender package whose project,
firm and people names were replaced; a few (the dark workspace, the bid summary) show fictitious demo data. Never add a
screenshot that shows a real client, project or person. Screenshots open full size on click.

## Local preview

```bash
python3 -m http.server 8000      # then open http://localhost:8000/
```

## Deployment

GitHub Pages, from the `main` branch, root folder (Settings › Pages). This repository, `estime`, is a project site of
the `newco-studio` organisation: it serves `https://newco-studio.github.io/estime/`.

## Link to the Newco Studio site

`config.js` holds the Newco Studio site's address:

```js
window.SITE_CONFIG = {
  NEWCO_URL: 'https://newco-studio.github.io/'
};
```

Every Newco link (`data-ext="NEWCO_URL"`, with `data-ext-path` for a page such as `contact.html?topic=estime`) reads
it at load time and adds `?lang=` so the visitor keeps their language. Nothing else in this repository names the Newco
site.

## Move to a custom domain

Example: `estime.ca` (apex) or `estime.newco-studio.com` (subdomain) for this site. Two files change: `CNAME` here,
and `config.js` in the Newco Studio repository.

1. **Add a `CNAME` file** at the root of this repository containing only the domain, for example `estime.ca` or
   `estime.newco-studio.com`, commit and push.
2. **Create the DNS records** at the domain's DNS provider:
   - apex domain (`estime.ca`): four `A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
     `185.199.111.153`, and four `AAAA` records `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`,
     `2606:50c0:8003::153`, plus a `www` `CNAME` to `newco-studio.github.io` if `www.estime.ca` should work too;
   - subdomain (`estime.newco-studio.com`): one `CNAME` record to `newco-studio.github.io` (not to
     `newco-studio.github.io/estime`: DNS takes no path).
3. **Recommended:** verify the domain for the organisation (organisation Settings › Pages › Verified domains, a `TXT`
   record) so nobody else can claim it on GitHub Pages.
4. **In this repository's Settings › Pages**, enter the custom domain (it should match `CNAME`), wait for the DNS check
   to pass, then tick **Enforce HTTPS**.
5. **Update the link on the other site:** in the Newco Studio repository, set `ESTIME_URL` in `config.js` to the new
   address (for example `https://estime.ca/`), push.
6. Check: open the new address, switch languages, follow the Newco Studio links and back.

The site then lives at the domain root instead of `/estime/`; nothing else changes, since every path is relative.

## Licence

Content, images and code © 2026 Newco Studio (9546-1935 Québec inc.). All rights reserved. The Inter typeface is served
by Google Fonts under the SIL Open Font License.
