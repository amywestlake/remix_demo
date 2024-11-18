## Development

Create a .env file in the root and use the /api route of either your local laravel app or use the platform.sh cms api url.

```sh
REACT_APP_API_BASE_URL=http://127.0.0.1:8000/api
```

Then from your terminal:

```sh
npm run dev
```

The / route is empty but you can visit [/shows](http://localhost:5173/shows) and then /shows/show-slug.
