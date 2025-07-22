import { useProperties } from '~/hooks/useProperties';
import PropertyCard from './PropertyCard';

export default function PropertyList() {
  const { data, isLoading, isError } = useProperties();
  console.log(data);

  if (isLoading) return <p>Načítám nemovitosti...</p>;
  if (isError) return <p>Chyba při načítání nemovitostí</p>;

  return (
    <div className='max-w-[1280px] m-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr'>
      {data!.map((property: any) => (
        <PropertyCard key={property._id} {...property} />
      ))}
    </div>
  );
}
