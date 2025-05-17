# Exotic Home Furnitures - Project Structure

## Tech Stack
- **Frontend**: Next.js with TypeScript
- **Styling**: Tailwind CSS with custom theme
- **CMS**: Sanity.io (Headless CMS)
- **State Management**: React Context API + SWR for data fetching
- **Payment Processing**: Stripe
- **Deployment**: Vercel
- **Analytics**: Google Analytics, Facebook Pixel

## Directory Structure
```
exotic-furniture-site/
├── public/                 # Static assets
│   ├── images/             # Product and brand images
│   ├── icons/              # UI icons
│   └── fonts/              # Custom fonts
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── page.tsx        # Homepage
│   │   ├── layout.tsx      # Root layout
│   │   ├── products/       # Product catalog pages
│   │   │   ├── [category]/ # Category pages
│   │   │   └── [slug]/     # Product detail pages
│   │   ├── cart/           # Shopping cart
│   │   ├── checkout/       # Checkout flow
│   │   ├── blog/           # Blog/Inspiration section
│   │   └── account/        # User account pages
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # Basic UI elements
│   │   ├── layout/         # Layout components
│   │   ├── product/        # Product-related components
│   │   ├── cart/           # Cart components
│   │   └── checkout/       # Checkout components
│   ├── lib/                # Utility functions and libraries
│   │   ├── sanity/         # Sanity CMS client
│   │   ├── stripe/         # Stripe integration
│   │   └── analytics/      # Analytics integrations
│   ├── hooks/              # Custom React hooks
│   ├── context/            # React Context providers
│   └── types/              # TypeScript type definitions
├── sanity/                 # Sanity CMS schema and config
├── tailwind.config.js      # Tailwind CSS configuration
├── next.config.js          # Next.js configuration
└── package.json            # Project dependencies
```

## Key Features
1. **Responsive Design**: Mobile-first approach with optimized layouts for all devices
2. **Performance Optimization**: 
   - Image optimization with Next.js Image component
   - Code splitting and lazy loading
   - Server-side rendering for SEO
3. **E-commerce Functionality**:
   - Product catalog with filtering and sorting
   - Shopping cart with persistent state
   - Secure checkout process
4. **CMS Integration**:
   - Content management for products, categories, and blog posts
   - Real-time updates with GROQ queries
5. **Social Media Integration**:
   - TikTok feed integration (@multiple_empire)
   - Social sharing capabilities
6. **Customer Support**:
   - WhatsApp integration for instant support
   - Contact form with email notifications
7. **SEO Optimization**:
   - Structured data markup
   - Sitemap generation
   - Meta tags and Open Graph support
8. **Analytics**:
   - User behavior tracking
   - Conversion tracking
   - A/B testing capabilities