import { useQuery } from '@tanstack/react-query';
import { sanityClient } from '../lib/sanityClient';

const fetchProperties = async () => {
  const query = `*[_type == "property"]{ ..., "slug": slug.current, "mainImageUrl": mainImage.asset->url, }`;
  return sanityClient.fetch(query);
};

export function useProperties() {
  return useQuery({
    queryKey: ['properties'],
    queryFn: fetchProperties,
    staleTime: 1000 * 60 * 5,
  });
}
