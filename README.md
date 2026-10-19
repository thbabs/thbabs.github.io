# thbabs.github.io

Portfolio for Tolu Babs (Toluwase Babalola), a techpreneur.

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
2. Replace the post list in `blog/index.html`. Group posts by year. Each item is the title, the link, and the one-line description from the feed.
3. Skip Substack’s automatic “invite your friends” referral post. The Towards Data Science article stays under its own year.

The subscribe button points at <https://tryworkwithai.substack.com/subscribe>.

## YouTube

The YouTube icon reads `SITE_YOUTUBE` in `site.js`, currently `https://www.youtube.com/@thbabs_yt`. Change that constant to update the icon.

## Publish

Pages is already set to deploy from `main` at `/ (root)`. Merging to `main` updates the live site on the next build.
