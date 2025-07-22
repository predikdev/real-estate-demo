import AppProvider from '../../lib/providers/appProvider';
import PropertyList from '../../components/property/PropertyList';

export default function IndexReact() {
  return (
    <AppProvider>
      <div className='grid'>
        <PropertyList />
        {/* sem klidně další React widgety */}
      </div>
    </AppProvider>
  );
}
