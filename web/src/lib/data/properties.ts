import { sanityClient } from '../sanityClient';
import type { Property } from '~/types/property';

const QUERY = `*[_type == "property"]{
  ...,
  "slug": slug.current,
  "mainImageUrl": mainImage.asset->url
}`;

export async function getProperties(): Promise<Property[]> {
  return sanityClient.fetch<Property[]>(QUERY);
}
