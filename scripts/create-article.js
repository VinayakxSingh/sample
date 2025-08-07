#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const ARTICLES_DIR = path.join(__dirname, '../public/articles');

// Helper function to create directory if it doesn't exist
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Helper function to get next article number
function getNextArticleNumber() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    return 1;
  }
  
  const folders = fs.readdirSync(ARTICLES_DIR)
    .filter(item => fs.statSync(path.join(ARTICLES_DIR, item)).isDirectory())
    .filter(item => item.startsWith('article-'))
    .map(item => parseInt(item.replace('article-', '')))
    .sort((a, b) => a - b);
  
  return folders.length > 0 ? Math.max(...folders) + 1 : 1;
}

// Helper function to create article files
function createArticleFiles(articleNumber, title, description, category, tags, author = 'FERZ Team') {
  const articleDir = path.join(ARTICLES_DIR, `article-${articleNumber}`);
  ensureDir(articleDir);
  
  // Create slug from title
  const slug = title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
  
  // Create metadata.json
  const metadata = {
    id: `article-${articleNumber}`,
    title: title,
    description: description,
    author: author,
    date: new Date().toISOString().split('T')[0],
    category: category,
    tags: tags,
    featured: false,
    readTime: "5 min read",
    image: "image.jpg",
    slug: slug
  };
  
  fs.writeFileSync(
    path.join(articleDir, 'metadata.json'),
    JSON.stringify(metadata, null, 2)
  );
  
  // Create article-data.md template
  const markdownTemplate = `# ${title}

## Introduction

[Write your introduction here...]

## Main Content

[Write your main content here...]

## Conclusion

[Write your conclusion here...]
`;
  
  fs.writeFileSync(
    path.join(articleDir, 'article-data.md'),
    markdownTemplate
  );
  
  // Create placeholder image (copy logo)
  const logoPath = path.join(__dirname, '../public/logo.png');
  const imagePath = path.join(articleDir, 'image.jpg');
  
  if (fs.existsSync(logoPath)) {
    fs.copyFileSync(logoPath, imagePath);
  }
  
  console.log(`✅ Article ${articleNumber} created successfully!`);
  console.log(`📁 Folder: ${articleDir}`);
  console.log(`📝 Files created:`);
  console.log(`   - metadata.json`);
  console.log(`   - article-data.md`);
  console.log(`   - image.jpg (placeholder)`);
  console.log(`\n📋 Next steps:`);
  console.log(`   1. Replace image.jpg with your article image`);
  console.log(`   2. Edit article-data.md with your content`);
  console.log(`   3. Update metadata.json if needed`);
  console.log(`   4. Set featured: true in metadata.json if you want it in the carousel`);
}

// Main function
function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 4) {
    console.log('Usage: node create-article.js "Title" "Description" "Category" "tag1,tag2,tag3" [author]');
    console.log('\nExample:');
    console.log('node create-article.js "AI Safety Best Practices" "Essential guidelines for safe AI implementation" "AI Safety" "AI,Safety,Best Practices" "FERZ Team"');
    process.exit(1);
  }
  
  const [title, description, category, tagsString, author] = args;
  const tags = tagsString.split(',').map(tag => tag.trim());
  
  console.log('🚀 Creating new article...\n');
  console.log(`Title: ${title}`);
  console.log(`Description: ${description}`);
  console.log(`Category: ${category}`);
  console.log(`Tags: ${tags.join(', ')}`);
  console.log(`Author: ${author || 'FERZ Team'}\n`);
  
  const nextNumber = getNextArticleNumber();
  createArticleFiles(nextNumber, title, description, category, tags, author);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { createArticleFiles, getNextArticleNumber }; 