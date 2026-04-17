# Emo-Key API

Key generator API for Emobies ecosystem.

## Endpoint

```
GET /api/generate?name=YourName
```

## Response

```json
{ "success": true, "key": "emo_abc12345" }
```

## Environment Variables

Add these in Vercel dashboard:

```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Deploy

Connect this repo to Vercel and add environment variables.
