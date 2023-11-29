import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    type: z.string().optional(),
    description: z.string(),
    publishDate: z.coerce.date(),
    imgs: z.array(z.string()),
    img_alts: z.array(z.string()).optional(),
  }),
});


export const collections = {
  'project': projectCollection,
};