import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
	type: 'content', // v2.5.0 and later
	schema: z.object({
		title: z.string(),
		duration: z.number(),
		director: z.string(),
		production: z.string(),
		release: z.number(),
		role: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		imgs: z.array(z.string()),
		img_alts: z.array(z.string()).optional(),
		type: z.string().optional(),
	}),
});

export const collections = {
	projects: projectCollection,
};
