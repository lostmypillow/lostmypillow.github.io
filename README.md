# LostMyPillow Main Site

Repository for my main site. Soon I'll be moving this off GitHub Pages and onto my own server behind a custom domain.

## Why Vue, and not React?

I've oscillated between React and Vue for a while, and although I consider React code much more manageable for larger projects, I find Vue code WAY more readable and fun to write with. Since a portfolio site is pretty light in terms of interativity I've opted to use Vue (in extension Nuxt) for my own site.


## Recreate this Project

```bash
corepack enable && pnpm install
pnpm run dev
```

## Why PNPM?

It's faster than NPM


## Future for This Project

### 1. Docker
A Dockerfile and a Docker Compose file exists because there are plans to deploy this in Docker on my own Linux server, it has been tested...somewhat.

### 2. Firebase
Planning to move this to a simple NoSQL database such as Firebase, or if I feel like it, a self-hosted SQL server.