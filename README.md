# Situation in Ukraine dashboard

This project is a premium situational awareness dashboard for Ukraine emergency monitoring.

## Stack
- React + TypeScript + Vite
- Leaflet + OpenStreetMap
- Framer Motion
- Recharts

## Features
- Air-raid alert monitoring
- Weather alert and emergency status panels
- Source health monitoring
- Error handling and stale data detection
- Responsive premium dashboard UI
- Local settings persistence

## Real-data policy
This project is intentionally designed around documented external providers and does not ship fabricated alerts. Air-raid alert integrations require a valid API token from the provider and must be configured via environment variables. Weather alerts require a licensed or officially documented provider and a proper key.

## Setup
1. Install dependencies:
   npm install
2. Copy environment variables:
   cp .env.example .env
3. Fill in values for your authorized providers.
4. Run the app:
   npm run dev -- --host 0.0.0.0

## Production build
npm run build

## Environment variables
See `.env.example` for all application keys and provider settings.

## Important notes
- `VITE_ALERTS_API_BASE`, `VITE_ALERTS_API_TOKEN`, `VITE_ALERTS_API_ALERTS_PATH`, and `VITE_ALERTS_API_REGIONS_PATH` must be set for live alerts.
- Official access to alerts.in.ua is not unconditional. Requests for API access must follow the provider's documented process.
- The app exposes clear degraded/offline states instead of fake data when providers are unavailable.
