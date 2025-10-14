# instructionmanuel

Manny Silva's portfolio and blog - a Docusaurus site showcasing technical writing and engineering work.

## About

This site features:

- Portfolio pages for Docs as Tests book, Doc Detective tool, and conference talks
- Blog for sharing insights on documentation testing and developer experience
- Professional homepage with bio and project highlights

## Development

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The site is configured to publish to www.instructionmanuel.com.

## Content

- **Homepage** (`src/pages/index.tsx`): Main landing page with bio and portfolio cards
- **Blog** (`blog/`): Blog posts in Markdown/MDX format
- **Pages** (`src/pages/`):
  - `book.md` - Docs as Tests book information
  - `doc-detective.md` - Doc Detective tool details
  - `talks.md` - Conference talks and presentations

## License

Copyright © 2025 Manny Silva
