import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const NOTES_DIR = path.join(process.cwd(), 'content/notes');

export interface NoteMetadata {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

export function getNotes(): NoteMetadata[] {
  if (!fs.existsSync(NOTES_DIR)) return [];
  
  const files = fs.readdirSync(NOTES_DIR);
  const notes = files
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(NOTES_DIR, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      return {
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        slug: filename.replace('.mdx', ''),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return notes;
}

export function getNoteBySlug(slug: string) {
  const filePath = path.join(NOTES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    metadata: {
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      slug,
    },
    content,
  };
}