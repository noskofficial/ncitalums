import { defineCollection, z } from 'astro:content';

export const collections = {
	profiles: defineCollection({
		type: 'content',
		schema: z.object({
            name: z.string(),
			title: z.string(),
			faculty: z.string(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};