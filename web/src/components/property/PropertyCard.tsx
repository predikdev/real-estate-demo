import { urlFor } from '../../lib/helpers/imageBuilder';
import { formatPrice } from '~/lib/helpers/formatPrice';
import type { Property } from '../../types/property';
import { useProperties } from '~/hooks/useProperties';

import { Bed, BedDouble, Expand } from 'lucide-react';

function PropertyCard(property: Property) {
  const { isLoading, isError } = useProperties();

  function roomsLabel(count: number) {
    if (count === 0) return 'žádné';
    if (count === 1) return 'pokoj';
    if (count >= 2 && count <= 4) return 'pokoje';
    if (count >= 5) return 'pokojů';
    return `${count} pokojů`;
  }

  return (
    <div className='flex h-full flex-col min-w-0'>
      {isLoading ? (
        <p>Načítám nemovitosti...</p>
      ) : (
        <div className=''>
          <img
            src={urlFor(property.mainImage)}
            alt={property.teaser}
            className='rounded-lg'
          />
          <div className='flex justify-between items-center py-2'>
            <h1 className='font-bold text-md'>{property.title}</h1>
            <h2 className='font-bold'>
              {property.price !== undefined ? formatPrice(property.price) : ''}
            </h2>
          </div>
          <p className='py-2 text-zinc-500 text-sm m-h-[4.5rem]'>
            {property.teaser}
          </p>
          <span className='block h-[1px] bg-zinc-500 mt-auto'></span>
          <div className='py-2 flex justify-between text-zinc-500 text-sm'>
            <div className='flex items-center gap-1'>
              <BedDouble className='w-4 h-4 text-zinc-500' aria-hidden='true' />
              {property.rooms} {roomsLabel(property.rooms ?? 0)}
            </div>
            <div className='flex items-center gap-1'>
              <Expand className='w-4 h-4 text-zinc-500' aria-hidden='true' />
              {property.area} m<sup>2</sup>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyCard;
