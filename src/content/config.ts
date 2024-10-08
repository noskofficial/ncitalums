import { defineCollection, z } from 'astro:content';

const profilesCollection = defineCollection({
    type: 'content',
    schema: z.object({
      name: z.string(),
      program: z.string(), // faculty or department 
      batch: z.string(),
      image: z.object({
        url: z.string().optional(),
        alt: z.string().optional()
      }),
      tags: z.array(z.string()),
      history: z.array(z.object({
        year: z.string(),
        position: z.string(),
        company: z.string()
      })),
      social: z.object({
        linkedin: z.string().optional(),
        github: z.string().optional(),
        twitter: z.string().optional(),
      }).optional(),
      slogan: z.string().optional()
    })
});

export const collections = {
  profiles: profilesCollection,
};
