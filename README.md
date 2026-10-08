# Jeffrey de Roode

## Deploy

### Branches

| Branch | Deploy | URL |
|---|---|---|
| `main` | Productie | https://jeffreyderoode.nl |
| `staging` | Branch deploy (goedgekeurde features, nog niet live) | https://staging--jdr2024.netlify.app |
| PR's | Deploy preview | link in de PR |

Features gaan via een PR naar `staging`. Naar `main` alleen gebundelde releases (PR `staging → main`) en hotfixes. Commits met alleen documentatie (`*.md` in de root, `.github/`) starten geen build; Markdown-content in `src/content/` wel. Zie `~/Code/_standards/DEPLOY.md`.

Netlify: team All This, site [`jdr2024`](https://app.netlify.com/projects/jdr2024).
