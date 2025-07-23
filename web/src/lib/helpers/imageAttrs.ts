import { urlFor } from './imageBuilder';

export function buildImgAttrs(
  img: any,
  widths = [320, 480, 768, 1024, 1440],
  quality = 70
) {
  const base = urlFor(img).auto('format').fit('crop').quality(quality);
  const src = base.width(widths[0]).url();
  const srcset = widths.map((w) => `${base.width(w).url()} ${w}w`).join(', ');
  const sizes = '(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw';

  return { src, srcset, sizes };
}
