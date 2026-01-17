import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'thoughts |> html',
    description: 'Things about the life of software developer Ryan Whitmire.',
    site: context.site,
    items: sortedPosts.map((post) => {
      // Extract date from filename to avoid timezone issues
      const filename = post.id;
      const dateMatch = filename.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);

      let year, month, day, slug;
      if (dateMatch) {
        [, year, month, day, slug] = dateMatch;
        slug = slug.replace(/\.md$/, '');
      } else {
        // Fallback to using the date object
        const date = post.data.date;
        year = String(date.getFullYear());
        month = String(date.getMonth() + 1).padStart(2, '0');
        day = String(date.getDate()).padStart(2, '0');
        slug = filename.replace(/\.md$/, '');
      }

      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description || '',
        link: `/${year}/${month}/${day}/${slug}/`,
      };
    }),
  });
}
