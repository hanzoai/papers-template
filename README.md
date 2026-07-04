<p align="center"><img src=".github/hero.svg" alt="papers-template" width="880"></p>

# Papers Site Template

[![Deploy on Hanzo](https://hanzo.app/deploy-badge.svg)](https://hanzo.app/new?template=https://github.com/hanzoai/papers-template)

**A generalized, open-source research papers website template** usded by leading AI research labs Hanzo AI, Zoo Labs, Zen LM, and Lux Network - deployable to GitHub Pages.

## 🌟 Features

- ✨ **Multi-Brand Support**: Configure for brand with environment variables
- 📄 **Beautiful Paper Cards**: Modern, responsive design with gradient accents
- 🚀 **GitHub Pages Ready**: Automatic deployment with GitHub Actions
- 🎨 **Tailwind CSS**: Fully customizable styling with dark mode support
- ⚡ **Next.js 14**: Static export for optimal performance
- 📱 **Responsive**: Mobile-first design that works everywhere
- 🔗 **Smart Links**: Direct links to PDFs, GitHub repos, and related resources

## 🎯 Live Examples

- **Hanzo AI**: [papers.hanzo.ai](https://papers.hanzo.ai/)
- **Zoo Labs**: [papers.zoo.ngo](https://papers.zoo.ngo/)
- **Zen AI**: [papers.zenlm.ai](https://papers.zenlm.org/)
- **Lux Network**: [papers.lux.network](https://papers.lux.network/)

## 🚀 Quick Start

### 1. Fork This Template

Click "Use this template" on GitHub or fork directly:

```bash
gh repo create your-org/papers --template hanzo-apps/papers --public
cd papers
```

### 2. Configure Your Brand

Edit `.github/workflows/deploy.yml` and set repository variables:

```bash
# Set your brand (hanzo, zoo, zen, or lux)
gh variable set BRAND --body "hanzo"

# Set base path if needed (default: /papers)
gh variable set BASE_PATH --body "/papers"
```

### 3. Customize Papers

Edit `src/config/brands.ts` to add your papers:

```typescript
papers: [
  {
    id: 'my-paper',
    title: 'My Research Paper',
    subtitle: 'Solving Important Problems',
    abstract: 'This paper describes...',
    pdfUrl: 'https://github.com/org/papers/raw/main/my-paper.pdf',
    latexUrl: 'https://github.com/org/papers/blob/main/my-paper.tex',
    githubUrl: 'https://github.com/org/papers',
    date: '2025-01-15',
    authors: ['Your Name'],
    tags: ['Machine Learning', 'AI'],
    relatedLinks: [
      { label: 'Project Website', url: 'https://example.com' },
    ],
  },
]
```

### 4. Deploy to GitHub Pages

Enable GitHub Pages in your repository settings:
- Go to Settings → Pages
- Source: GitHub Actions
- Push to main branch triggers automatic deployment

## 🛠️ Development

### Local Setup

```bash
# Install dependencies
pnpm install

# Run development server
NEXT_PUBLIC_BRAND=hanzo pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm start
```

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_BRAND` | `hanzo` | Brand name: `hanzo`, `zoo`, `zen`, or `lux` |
| `NEXT_PUBLIC_BASE_PATH` | `/papers` | Base path for GitHub Pages deployment |

## 📁 Project Structure

```
papers/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page with paper grid
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Header.tsx          # Site header
│   │   ├── PaperCard.tsx       # Individual paper card
│   │   └── Footer.tsx          # Site footer
│   └── config/
│       └── brands.ts           # Brand configurations
├── next.config.js              # Next.js config for static export
├── tailwind.config.ts          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies
```

## 🎨 Customization

### Adding a New Brand

Edit `src/config/brands.ts`:

```typescript
export const brandConfigs: Record<Brand, BrandConfig> = {
  // ... existing brands
  myorg: {
    name: 'My Organization',
    fullName: 'My Organization Inc',
    description: 'Our research mission...',
    website: 'https://myorg.com',
    github: 'https://github.com/myorg',
    primaryColor: '#FF6B35',
    secondaryColor: '#004E89',
    accentColor: '#00D9FF',
    logo: '/logos/myorg-logo.svg',
    papers: [
      // Your papers here
    ],
  },
}
```

### Styling

The template uses Tailwind CSS. Customize colors in `tailwind.config.ts`:

```typescript
colors: {
  myorg: {
    primary: '#your-color',
    secondary: '#your-color',
    accent: '#your-color',
  },
}
```

## 📦 Deployment Options

### GitHub Pages (Recommended)

1. Push to main branch
2. GitHub Actions automatically builds and deploys
3. Site available at `https://your-org.github.io/papers/`

### Custom Domain

Add a `CNAME` file to `public/` directory:

```
papers.your-domain.com
```

Configure DNS:
- Add CNAME record pointing to `your-org.github.io`
- Enable "Enforce HTTPS" in GitHub Pages settings

### Other Hosts

```bash
# Build static export
pnpm build

# Deploy 'out' directory to any static host:
# - Vercel: vercel deploy
# - Netlify: netlify deploy --dir=out
# - Cloudflare Pages: wrangler pages deploy out
```

## 🤝 Contributing

Contributions are welcome! This template is maintained by the Hanzo Apps community.

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - free to use for any purpose.

## 🔗 Links

- **Template Repository**: https://github.com/hanzo-apps/papers
- **Hanzo AI**: https://hanzo.ai | https://github.com/hanzoai
- **Zoo Labs**: https://zoo.ngo | https://github.com/zooai
- **Zen AI**: https://zenlm.ai | https://github.com/zenlm
- **Lux Network**: https://lux.network | https://github.com/luxfi

## 🆘 Support

- **Issues**: https://github.com/hanzo-apps/papers/issues
- **Discussions**: https://github.com/hanzo-apps/papers/discussions
- **Email**: foundation@zoo.ai

---

**Made with ❤️ by the Hanzo Apps community**

Supporting open research and democratizing AI through beautiful, accessible papers websites.
