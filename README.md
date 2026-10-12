# Clispy Solutions website

Static site: plain HTML, CSS and a small script. Open `index.html` in a browser, or upload the folder to any host (Netlify, Vercel, cPanel).

```
index.html          home: hero with project tracker, why it matters, services, selected work, process,
                    pricing table and guarantees, testimonials, about, free review form, FAQ
work.html           all 12 projects with filters; each opens the case study (a bottom sheet on phones)
websites-for-*.html  industry pages for search: moving companies, real estate, schools and colleges.
                    Built from the same header and footer as work.html. Add each new page to sitemap.xml
css/site.css        all styles: same design language as the MTA dashboard (glass panels, thin borders,
                    bento grids, mono numbers), violet accent, light and dark mode
js/site.js          menu, light/dark switch, scroll reveals, form, WhatsApp message, filters, popup
js/motion.js        animations only (headline reveals, hero tilt, counters, parallax, cursor light,
                    magnetic buttons). Delete its script tag to turn all animation off.
images/work/        screenshots of each client's live site (1440 × 900)
images/             logo.png (nav and footer), logo-512.png (structured data), og-image.png (link previews),
                    favicon.png and apple-touch-icon.png
robots.txt          lets search engines in and points to the sitemap
sitemap.xml         the two pages search engines should index. Add a line here whenever you add a page.
```

Search tags (title, description, canonical, link-preview image and structured data) sit in the `<head>` of each page.

## Still to add

| What | Where | How |
|---|---|---|
| Founder photo | About section | Save as `images/jake.jpg` and replace the `JA` initials with `<img src="images/jake.jpg" alt="Jake Asare, founder of Clispy Solutions">`. |
| Form email delivery | `#contact-form` | The form confirms on screen, and "Send on WhatsApp instead" already works. For email delivery, set the form's `action` to a form service such as Formspree. |

## Light and dark mode

The site follows the visitor's phone or computer setting. The sun/moon button in the menu bar switches it and remembers the choice.

## Effects lab

Eight signature effects live in `js/fx.js` (styles under "Signature effects" in `css/site.css`): opening sequence, smooth scrolling, scroll into the screen, 3D globe, horizontal project reel, stacking process cards, custom cursor and scrambling text.

- **Try them:** open `index.html#lab`. A panel appears bottom-left with a switch for each effect. Tick, press Apply, and the page reloads with your mix. "Replay intro" shows the opening sequence again.
- **Make it permanent:** in the small script in the `<head>` of both pages, set an effect to 0 in the `on` list to turn it off for everyone (the lab only changes your own browser).
- They load GSAP and Lenis from a CDN. If those fail to load, the site falls back to the normal layout.

## Animations

All animation lives in `js/motion.js` and the "Motion layer" block at the end of `css/site.css`. It switches itself off for visitors who turn on "reduce motion" on their device, and the cursor effects only run with a mouse. The screenshot-into-popup effect needs a recent Chrome, Edge or Safari; other browsers simply open the popup.

## Screenshots

Taken from each client's live site. Amonu shows its shop section and Prime JB the section below its video. Replace any of them with your own images using the same file names.

## Please confirm before publishing.

- **Guarantees:** "Revisions until you love it" (within agreed pages and features) and "On time, or 10% off" (the date moves if waiting on the client).
- **Hero project tracker:** it is labelled "Example" and shows how a project moves through the five steps. The shop orders, ad chart and care log in Services are illustrations too.
- **Free review turnaround:** 48 hours.
- **LinkedIn link:** `linkedin.com/company/jerome-asare`.
