import { defineCollection, z } from 'astro:content';


const profilesCollection = defineCollection({
    type: 'content',
    schema: z.object({
      name: z.string(),
      title: z.string(),
      faculty: z.string(),
      batch: z.string(),
      image: z.object({
        url: z.string().optional(),
        alt: z.string().optional()
      }),
      tags: z.array(z.string())
    })
});

export const collections = {
  profiles: profilesCollection,
};
