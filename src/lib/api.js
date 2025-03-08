import matter from 'gray-matter';
import { join } from 'path';
import fs from 'fs';

import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { timeToRead } from './utils';

const postsDirectory = join(process.cwd(), 'content', 'posts');
const talksDirectory = join(process.cwd(), 'content', 'talks');

function getContentBySlug(dir, slug) {
  if (!slug) return null;

  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Verifica se a data existe antes de tentar formatar
  let date = "Data não disponível";
  if (data.date) {
    try {
      const dateObj = parseISO(data.date);
      if (!isNaN(dateObj)) {
        date = format(dateObj, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
      }
    } catch (error) {
      console.error("Erro ao formatar data:", data.date, error);
    }
  }

  return {
    slug: realSlug,
    date: data.date ? data.date.toString() : null, // Retorna null se não houver data
    frontmatter: { ...data, date },
    content,
    timeToRead: timeToRead(content)
  };
}

export function getPostBySlug(slug) {
  if (!slug) return null;
  return getContentBySlug(postsDirectory, slug);
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs.map(slug => getPostBySlug(slug));

  return posts.sort((post1, post2) => {
    if (!post1.date) return 1; // Post sem data vai para o final
    if (!post2.date) return -1;
    return new Date(post1.date) > new Date(post2.date) ? -1 : 1;
  });
}

export function getTalkBySlug(slug) {
  if (!slug) return null;
  return getContentBySlug(talksDirectory, slug);
}

export function getAllTalks() {
  const slugs = fs.readdirSync(talksDirectory);
  const posts = slugs.map(slug => getTalkBySlug(slug));

  return posts.sort((post1, post2) => {
    if (!post1.date) return 1;
    if (!post2.date) return -1;
    return new Date(post1.date) > new Date(post2.date) ? -1 : 1;
  });
}