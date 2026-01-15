import { defineCollection, z } from 'astro:content';

const mixesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    coverImage: z.string(),
    platform: z.enum(['soundcloud', 'youtube']),
    embedUrl: z.string(),
    genre: z.string().optional(),
    duration: z.string().optional(),
    tracklist: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'mixes': mixesCollection,
};
