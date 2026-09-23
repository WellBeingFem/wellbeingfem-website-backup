# Configuration variable names

The following names are referenced by current source. This list contains names only, never values.

| Name | Purpose |
|---|---|
| `DATABASE_URL` | MySQL-compatible connection for Resource Requests and consent records |
| `JWT_SECRET` | Resource Request token signing/verification |
| `NODE_ENV` | Build/runtime environment mode |
| `PORT` | Node/Express listener port |
| `VITE_ANALYTICS_ENDPOINT` | Optional browser analytics endpoint |
| `VITE_ANALYTICS_WEBSITE_ID` | Optional browser analytics identifier |
| `BUILT_IN_FORGE_API_URL` | Manus development storage proxy only |
| `BUILT_IN_FORGE_API_KEY` | Manus development storage proxy only |
| `VITE_FRONTEND_FORGE_API_URL` | Optional dormant map helper |
| `VITE_FRONTEND_FORGE_API_KEY` | Optional dormant map helper |
| `VITE_OAUTH_PORTAL_URL` | Dormant Manus OAuth helper |
| `VITE_APP_ID` | Dormant Manus OAuth helper |

Store any real values in the target platform's secret/configuration manager. Do not create or commit files containing live values.
