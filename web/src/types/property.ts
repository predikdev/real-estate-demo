export interface Property {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  mainImage?: PropertyImageRef;
  title: string;
  slug: string;
  teaser?: string;
  description?: string;
  additionalDescription?: string;
  price?: number;
  isOnSale?: boolean;
  propertyType?: PropertyType;
  offerType?: OfferType;
  availability?: AvailabilityType;
  disposition?: string;
  construction?: ConstructionType;
  constructionYear?: number;
  reconstructionYear?: number;
  livingArea?: number;
  rooms?: number;
  floor?: number;
  elevator?: boolean;
  heating?: HeatingType;
  equipment?: EquipmentType;
  balcony?: boolean;
  cellar?: boolean;
  parking?: ParkingType;
  condition?: ConditionType;
  location?: string;
  energyLabel?: EnergyLabelType;
  images?: PropertyImage[];
  street?: string;
  streetNumber?: number;
  city?: string;
  zip?: number;
}

export type PropertyImageRef = {
  _type: 'image';
  asset: { _ref?: string; _type?: 'reference'; url?: string };
};

export type PropertyImage = {
  _type: 'image';
  asset: { _ref?: string; _type?: 'reference'; url?: string };
  alt?: string;
};

export type EnergyLabelType = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export type PropertyType = 'Dům' | 'Byt' | 'Vila' | 'Pozemek' | 'Komerční';

export type OfferType = 'Prodej' | 'Pronájem';

export type AvailabilityType = 'Ihned' | 'Na dotaz' | 'Dohodou' | 'Rezervováno';

export type ConstructionType = 'Cihla' | 'Kámen' | 'Panel';

export type HeatingType =
  | 'Ústřední topení'
  | 'Plynový kotel'
  | 'Elektrické vytápění'
  | 'Tepelné čerpalo'
  | 'Podlahové vytápění'
  | 'Krb / Kamna'
  | 'Solární vytápění'
  | 'Jiné';

export type EquipmentType =
  | 'Bez vybavení'
  | 'Částečně vybaveno'
  | 'Plně vybaveno';

export type ConditionType =
  | 'new'
  | 'renovated'
  | 'original'
  | 'to-reconstruct'
  | 'other';

export type ParkingType =
  | 'Bez parkování'
  | 'Parkování na ulici'
  | 'Vyhrazené parkovací stání'
  | 'Kryé stání'
  | 'Kryté stání'
  | 'Garážové stání'
  | 'Soukromá garáž'
  | 'Možnost dokoupit';
