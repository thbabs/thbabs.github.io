# thbabs.github.io

Portfolio for Toluwase Babalola (Tolu), a techpreneur in Hull, UK.

GitHub Pages serves these static files from the root of `main` at <https://thbabs.github.io>. There is no build step.

## Preview locally

From the repository root:

```bash
python -m http.server
```

Open <http://127.0.0.1:8000>. Pages: `/`, `/about/`, `/blog/`. Unknown paths use `404.html` on GitHub Pages.

## Update the blog list

The newsletter posts in `blog/index.html` are copied by hand from the Substack RSS feed. GitHub Pages does not fetch the feed when it serves the site.

1. Open <https://tryworkwithai.substack.com/feed>.
2. Replace the newsletter list in `blog/index.html` with the latest items: title, link, date and the one-line description.
3. Skip Substack’s automatic “invite your friends” referral post.

The subscribe button points at <https://tryworkwithai.substack.com/subscribe>.

## Contact address

The public email address lives in one place: `SITE_EMAIL` at the top of `site.js`. The envelope icon and the address on the About page both read it from there.

## Publish

Pages is already set to deploy from `main` at `/ (root)`. Merging to `main` updates the live site on the next build.
