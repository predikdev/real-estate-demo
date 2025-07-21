import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID!,
  dataset: import.meta.env.SANITY_DATASET!,
  useCdn: true,
  apiVersion: '2025-07-21', // vždy dnešní datum alespoň
});
