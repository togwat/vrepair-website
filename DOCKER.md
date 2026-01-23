# Dockerizing vrepair-website

## Production (build + nginx)
Build image:

```bash
docker build -t vrepair-website .
```

Run container (port 80, web only):

```bash
docker run --rm -p 8081:80 vrepair-website
```

Or with docker-compose (web + API):

```bash
docker compose up --build
```

## Email API (separate container)

The email API runs in its own container. The repo includes `Dockerfile.api` which builds the TypeScript file `api/sendEmail.ts` to JavaScript and runs it with Node 24.

Build and start both services (web + API):

```bash
docker compose up --build
```

Start only the API service:

```bash
docker compose up --build email-api
```

The API reads credentials and allowed origins from an environment file. Create a `.env` with at least:

- `EMAIL_USER`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_REFRESH_TOKEN`
- `CORS_ORIGIN_DEV`
- `CORS_ORIGIN_PROD`
- (optional) `PORT` — defaults to `3001` inside the container
