import { sanityClient } from '../sanityClient';
import type { Property } from '~/types/property';

const QUERY = `*[_type == "property"]{
  ...,
  "slug": slug.current,
  "mainImageUrl": mainImage.asset->url,
  "images": images[].asset->url
}`;

// // Cache pro optimalizaci - načte se jednou a použije se všude
// let propertiesCache: Property[] | null = null;

export async function getProperties(): Promise<Property[]> {
  // if (propertiesCache === null) {
  //   propertiesCache = await sanityClient.fetch<Property[]>(QUERY);
  // }
  const allProperties = await sanityClient.fetch<Property[]>(QUERY);
  return allProperties;
}
