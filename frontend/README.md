# Frontend README

## React + Tanstack Query Frontend

This is the frontend application built with React and Tanstack Query (React Query).

### Setup

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env if your backend is running on a different URL
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173`

### Project Structure

```
frontend/
├── src/
│   ├── api/                # API integration
│   │   ├── client.js       # Axios client
│   │   ├── items.js        # Items queries/mutations
│   │   └── users.js        # Users queries/mutations
│   ├── components/         # React components
│   │   ├── ItemsList.jsx
│   │   └── UsersList.jsx
│   ├── App.jsx             # Main application
│   ├── App.css             # Application styles
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies
└── vite.config.js          # Vite configuration
```

### Features

- **React 18** - Modern React with hooks
- **Tanstack Query** - Data fetching and caching
- **Vite** - Fast build tool and dev server
- **Axios** - HTTP client
- **ESLint** - Code linting

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```
