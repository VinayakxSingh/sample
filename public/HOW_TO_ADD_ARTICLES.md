#  How to Add Articles to FERZ Website

## Overview
This guide explains how to add new articles to the FERZ website. The system automatically picks up new articles once you follow these steps.

---

##  Step-by-Step Instructions

### Step 1: Create Article Folder
1. Navigate to the `public/articles/` folder in your project
2. Create a new folder named `article-X` (replace X with the next number)
   - Example: `article-4`, `article-5`, `article-6`, etc.

### Step 2: Add Required Files
Inside your new article folder, create these 3 files:

#### 1. `metadata.json` - Article Information
Create a file named `metadata.json` with this structure:
```json
{
  "id": "article-4",
  "title": "Your Article Title",
  "description": "Brief description of your article that appears in previews",
  "author": "Author Name",
  "date": "2025-01-30",
  "category": "AI Governance",
  "tags": ["AI", "Governance", "Safety"],
  "featured": true,
  "readTime": "5 min read",
  "image": "image.jpg",
  "slug": "your-article-slug"
}
```

#### 2. `article-data.md` - Article Content
Create a file named `article-data.md` with your article content in Markdown format:
```markdown
# Your Article Title

## Introduction
Your article content goes here. You can use all standard Markdown formatting.

## Section 1
More content with **bold text** and *italic text*.

### Subsection
- Bullet points
- More bullet points
- And more

## Section 2
You can also include:
- Links: [FERZ Website](https://ferz.ai)
- Code snippets: `console.log("Hello World")`
- And more Markdown features

## Conclusion
Wrap up your article with a strong conclusion.
```

#### 3. `image.jpg` - Featured Image
Add an image file (JPG, PNG, or WebP) named `image.jpg` (or update the filename in metadata.json)

### Step 3: Update the System
1. Open `sample/src/utils/articleLoader.js`
2. Find this line: `const articleIds = ['article-1', 'article-2', 'article-3'];`
3. Add your new article ID: `const articleIds = ['article-1', 'article-2', 'article-3', 'article-4'];`

### Step 4: Done! 
- The article will automatically appear on the homepage carousel (if `featured: true`)
- It will show up on the `/articles` page
- Individual article page will be available at `/articles/your-article-slug`

---

## 📊 Metadata Fields Explained

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `id` | | Unique identifier | `"article-4"` |
| `title` | | Article title | `"AI Safety Guidelines"` |
| `description` | | Brief summary | `"Essential safety practices..."` |
| `author` | | Author name | `"Edward Meyman"` |
| `date` |  | Publication date | `"2025-01-30"` |
| `category` |  | Article category | `"AI Governance"` |
| `tags` |  | Searchable tags | `["AI", "Safety", "Guidelines"]` |
| `featured` |  | Show in carousel | `true` or `false` |
| `readTime` |  | Estimated reading time | `"5 min read"` |
| `image` |  | Image filename | `"image.jpg"` |
| `slug` |  | URL-friendly title | `"ai-safety-guidelines"` |

---

##  Styling & Formatting

### Font
- All article text automatically uses **Georgia font**
- No additional styling needed

### Images
- Supported formats: JPG, PNG, WebP
- Recommended size: 800x600 pixels
- Place image file in the article folder
- Reference it in `metadata.json` under the `image` field

### Markdown Support
Your articles support these Markdown features:
- **Headings**: `# H1`, `## H2`, `### H3`
- **Text formatting**: `**bold**`, `*italic*`, `~~strikethrough~~`
- **Lists**: `- bullet points`, `1. numbered lists`
- **Links**: `[text](url)`
- **Code**: `` `inline code` ``
- **Code blocks**: ``` ``` ```
- **Quotes**: `> blockquote`
- **Tables**: Standard Markdown tables

---

##  Example Folder Structure
```
public/articles/
├── article-1/
│   ├── metadata.json
│   ├── article-data.md
│   └── image.jpg
├── article-2/
│   ├── metadata.json
│   ├── article-data.md
│   └── image.jpg
├── article-3/
│   ├── metadata.json
│   ├── article-data.md
│   └── image.jpg
└── article-4/          ← Your new article
    ├── metadata.json
    ├── article-data.md
    └── image.jpg
```

---

##  Troubleshooting

### Article Not Showing Up?
-  Check that the article ID is added to `articleIds` array in `articleLoader.js`
-  Verify `metadata.json` has valid JSON format (use a JSON validator)
-  Ensure image file exists and is named correctly
-  Check browser console for any error messages

### Image Not Loading?
-  Make sure image file is in the article folder
-  Check that `image` field in metadata matches filename exactly
-  Verify image file is not corrupted
-  Try a different image format (JPG, PNG, WebP)

### Content Not Displaying?
-  Verify `article-data.md` file exists
-  Check Markdown syntax is correct
-  Ensure file encoding is UTF-8
-  Test with simple content first

### Carousel Not Showing Article?
-  Check that `featured: true` in metadata.json
-  Verify article ID is in the `articleIds` array
-  Refresh the page and clear browser cache

---

##  Quick Start Template

### 1. Create folder: `public/articles/article-4/`

### 2. Create `metadata.json`:
```json
{
  "id": "article-4",
  "title": "Your New Article",
  "description": "Brief description here",
  "author": "Your Name",
  "date": "2025-01-30",
  "category": "AI Governance",
  "tags": ["AI", "Technology"],
  "featured": true,
  "readTime": "3 min read",
  "image": "image.jpg",
  "slug": "your-new-article"
}
```

### 3. Create `article-data.md`:
```markdown
# Your New Article

## Introduction
Start your article here...

## Main Content
Add your content...

## Conclusion
Wrap up your article.
```

### 4. Add an image file named `image.jpg`

### 5. Update `articleLoader.js`:
```javascript
const articleIds = ['article-1', 'article-2', 'article-3', 'article-4'];
```

---

##  Need Help?

If you encounter any issues:
1. Check the troubleshooting section above
2. Verify all file names and paths are correct
3. Test with a simple article first
4. Check browser console for error messages

---

**Last Updated**: January 2025  
**Version**: 1.0 
