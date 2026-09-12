# KineLuma

Scroll-driven 3D website built with Next.js 16, TypeScript, React Three Fiber, Three.js, GSAP ScrollTrigger and Lenis.

## Production stack

- Node.js 22
- Next.js 16.3.5 using Webpack for production builds
- React 19.2.1
- Three.js + React Three Fiber + Drei
- GSAP ScrollTrigger
- Lenis smooth scrolling
- cPanel / Passenger deployment via `server.js`

## cPanel deployment

This repository includes `.cpanel.yml`. The cPanel-managed Git checkout should live outside the Node application directory. Deployment copies the tracked application files into:

`/home/kinecccp/kineluma-app/`

It then activates the existing Node 22 virtual environment, installs production dependencies, builds Next.js with Webpack and touches `tmp/restart.txt` so Passenger reloads the app.

## Important hosting constraint

The current shared host has an older glibc, so native Next.js SWC/Turbopack bindings cannot be used reliably. The `build` script intentionally uses `next build --webpack`, which has already been proven to work on this host via the WASM fallback.
