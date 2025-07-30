# MDS - myDelivery Services Co. Website

A modern, fast, and fully responsive website for myDelivery Services Co., built with Next.js 14 and TypeScript.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with perfect responsiveness
- **Interactive Elements**: Smooth animations and hover effects
- **Blog System**: JSON-based blog management
- **Service Pages**: Individual pages for each service category
- **Contact Forms**: Integrated contact and quote request forms
- **SEO Optimized**: Server-side rendering for better search rankings

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mds-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
```bash
npm run build
npm run start
```

## 📝 Content Management

### Adding Blog Posts
Edit `/src/data/blog/posts.json` to add new blog posts:

```json
{
  "id": "unique-id",
  "title": "Post Title",
  "slug": "url-friendly-slug",
  "excerpt": "Brief description",
  "content": "Full article content",
  "category": "Category Name",
  "tags": ["tag1", "tag2"],
  "date": "DD MMM YYYY",
  "readTime": "X min read",
  "author": "Author Name",
  "gradient": "from-blue-500 to-purple-600"
}
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── services/          # Service pages
│   ├── technology/        # Technology page
│   └── page.tsx           # Home page
├── components/            # Reusable components
├── data/                  # Content data
└── lib/                   # Utility functions
```

## 🎨 Customization

- **Colors**: Edit `tailwind.config.ts` for color scheme changes
- **Content**: Update JSON files in `/src/data/`
- **Styling**: Modify Tailwind classes in components
- **Images**: Add images to `/public/assets/`

## 📞 Contact Information

- **Phone**: +971-4-584-0628
- **Email**: info@mdsco.ae
- **Address**: Office 2304 The Prime Tower, Burj Khalifa Blvd, Business Bay Dubai UAE

## 📄 License

© 2024 myDelivery Services Co. All rights reserved.
