# Exotic Home Furnitures - E-commerce Website

A modern e-commerce website for Exotic Home Furnitures, specializing in premium imported Turkish doors, high-quality mattresses, modern sofas, luxury chandeliers, and elegant interior furniture.

## Tech Stack

- **Frontend**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API + SWR for data fetching
- **CMS**: Headless CMS (Sanity.io recommended)
- **Payment Processing**: Stripe integration
- **Deployment**: Vercel

## Features

- Responsive design optimized for mobile and desktop
- Product catalog with categories and filtering
- Dynamic product detail pages with image carousels
- Shopping cart and checkout flow
- WhatsApp integration for customer support
- Blog/Inspiration section for interior design tips
- TikTok and social media integration
- SEO optimization

## Project Structure

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
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/exotic-furniture-site.git
   cd exotic-furniture-site
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The site can be easily deployed on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure environment variables
4. Deploy

## CMS Integration

For content management, we recommend setting up Sanity.io:

1. Create a Sanity project
2. Define schemas for products, categories, blog posts
3. Connect the Next.js app to Sanity using their client library

## Next Steps

- Set up Stripe payment integration
- Configure WhatsApp Business API
- Implement TikTok feed integration
- Set up analytics and tracking
- Configure SEO metadata and sitemaps

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact [your-email@example.com](mailto:your-email@example.com).