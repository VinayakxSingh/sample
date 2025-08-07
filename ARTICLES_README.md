# FERZ Articles Management System

This document explains how to use the automatic article management system for the FERZ website.

## 🎯 Overview

The articles system allows you to add new articles by simply creating folders and files. No code changes required! Articles are automatically loaded and displayed on the website with beautiful Georgia font styling.

## 📁 Folder Structure

```
public/articles/
├── article-1/
│   ├── image.jpg
│   ├── metadata.json
│   └── article-data.md
├── article-2/
│   ├── image.jpg
│   ├── metadata.json
│   └── article-data.md
└── ...
```

## 🚀 Quick Start: Adding a New Article

### Method 1: Using the Script (Recommended)

1. **Run the creation script:**
   ```bash
   cd sample
   node scripts/create-article.js "Your Article Title" "Brief description of the article" "Category" "tag1,tag2,tag3" "Author Name"
   ```

   **Example:**
   ```bash
   node scripts/create-article.js "AI Governance Best Practices" "Essential frameworks for deterministic AI systems" "AI Governance" "AI,Governance,Safety" "FERZ Team"
   ```

2. **The script will automatically:**
   - Create a new folder (e.g., `article-4`)
   - Generate `metadata.json` with your information
   - Create `article-data.md` with a template
   - Add a placeholder image

3. **Customize your article:**
   - Replace `image.jpg` with your article image
   - Edit `article-data.md` with your content
   - Update `metadata.json` if needed

### Method 2: Manual Creation

1. **Create a new folder** in `public/articles/` with the name `article-X` (where X is the next number)

2. **Add three files:**

   **`metadata.json`:**
   ```json
   {
     "id": "article-4",
     "title": "Your Article Title",
     "description": "Brief description of the article",
     "author": "Author Name",
     "date": "2025-01-30",
     "category": "Category Name",
     "tags": ["tag1", "tag2", "tag3"],
     "featured": false,
     "readTime": "5 min read",
     "image": "image.jpg",
     "slug": "your-article-slug"
   }
   ```

   **`article-data.md`:**
   ```markdown
   # Your Article Title

   ## Introduction

   [Write your introduction here...]

   ## Main Content

   [Write your main content here...]

   ## Conclusion

   [Write your conclusion here...]
   ```

   **`image.jpg`:** Your article image (recommended size: 800x600px)

## 📋 File Details

### metadata.json Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `id` | string | Unique article identifier | `"article-4"` |
| `title` | string | Article title | `"AI Governance Best Practices"` |
| `description` | string | Brief description | `"Essential frameworks..."` |
| `author` | string | Author name | `"FERZ Team"` |
| `date` | string | Publication date (YYYY-MM-DD) | `"2025-01-30"` |
| `category` | string | Article category | `"AI Governance"` |
| `tags` | array | Array of tags | `["AI", "Governance", "Safety"]` |
| `featured` | boolean | Show in carousel | `true` or `false` |
| `readTime` | string | Estimated reading time | `"5 min read"` |
| `image` | string | Image filename | `"image.jpg"` |
| `slug` | string | URL-friendly title | `"ai-governance-best-practices"` |

### article-data.md

- Write your content in **Markdown format**
- Use **Georgia font** (automatically applied)
- Include headings, lists, links, and images
- No file size limit

## 🎨 Styling Features

### Font
- All article text uses **Georgia font** for elegant readability
- Consistent typography across the website

### Display Options
- **Carousel**: Featured articles appear in the homepage carousel
- **Articles Page**: All articles are listed at `/articles`
- **Search & Filter**: Users can search and filter articles by category

### Responsive Design
- Articles look great on desktop, tablet, and mobile
- Images automatically resize and optimize

## 🔧 Configuration

### Making an Article Featured

To show an article in the homepage carousel, set `"featured": true` in the `metadata.json`:

```json
{
  "featured": true
}
```

### Categories

Common categories include:
- AI Governance
- AI Development
- AI Ethics
- AI Safety
- Machine Learning
- Technology

### Tags

Use relevant tags to help with search and categorization:
- AI, Governance, Safety, Ethics, Machine Learning, etc.

## 📱 Where Articles Appear

1. **Homepage Carousel** (`/`): Featured articles only
2. **Articles Page** (`/articles`): All articles with search and filter
3. **Navigation**: "Articles" link in the main menu

## 🛠️ Technical Details

### Automatic Loading
- Articles are loaded automatically when the website starts
- No server restart required for new articles
- Fallback images if article images are missing

### Performance
- Images are optimized for web
- Lazy loading for better performance
- SEO-friendly URLs and metadata

### SEO Benefits
- Structured data for search engines
- Meta descriptions and keywords
- Clean URLs with slugs

## 🐛 Troubleshooting

### Article Not Appearing
1. Check that the folder name follows the pattern `article-X`
2. Ensure `metadata.json` is valid JSON
3. Verify the image file exists and is named `image.jpg`

### Image Not Loading
1. Make sure the image file is named `image.jpg`
2. Check file permissions
3. The system will show a fallback image if needed

### Styling Issues
1. Georgia font is applied automatically
2. Check that CSS files are loading properly
3. Clear browser cache if needed

## 📈 Future Enhancements

Potential improvements:
- Markdown content rendering on individual article pages
- Article categories pages
- Related articles suggestions
- Social media sharing
- Comments system
- Article analytics

## 🆘 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify file structure and naming
3. Ensure all required files are present
4. Test with the development server first

---

**Happy writing!** 📝✨ 