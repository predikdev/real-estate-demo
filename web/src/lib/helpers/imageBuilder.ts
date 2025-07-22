import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from '../sanityClient';

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder
    .image(source)
    .auto('format') // webp, jpg podle prohlížeče
    .fit('crop') // nebo .fit('min')
    .quality(70) // komprese na 70 %
    .url();
}
