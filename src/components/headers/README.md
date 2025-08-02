# FERZ Navigation Component

Minimal, deterministic navigation bar for ferzconsulting.com.

## Install

```bash
npm install lucide-react
```

## Use

```jsx
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        {/* Content */}
      </main>
    </div>
  );
}
```

## Files

- `Navbar.jsx` - Component
- `Navbar.css` - Styles  
- `sitemapData.js` - Navigation data

## Features

- Full-screen overlay
- Search functionality
- Responsive design
- Keyboard navigation (ESC to close)
- Clean, minimal styling

## Customize

Update `sitemapData.js` for your navigation structure.
Replace `handleLinkClick` function with your routing logic.

---

*FERZ Consulting*

