export interface Property {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;

  title: string;
  slug: string;
  teaser?: string;
  description?: string;
  price?: number;
  location?: string;
  area?: number;
  rooms?: number;
  propertyType?: PropertyType;
  condition?: Condition;
  energyLabel?: EnergyLabel;
  mainImage?: PropertyImageRef;
  images?: PropertyImage[];
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

export type EnergyLabel = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
export type PropertyType =
  | 'house'
  | 'apartment'
  | 'land'
  | 'commercial'
  | 'other';
export type Condition =
  | 'new'
  | 'renovated'
  | 'original'
  | 'to-reconstruct'
  | 'other';
