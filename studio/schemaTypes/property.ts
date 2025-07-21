export default {
  name: 'property',
  title: 'Nemovitost',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Úvodní obrázek',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Název',
      type: 'string',
    },
    {
      name: 'teaser',
      title: 'Krátký popis',
      type: 'string',
      description: 'Stručný popisek, zobrazí se na kartě nemovitosti',
    },
    {
      name: 'description',
      title: 'Popis',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Cena (Kč)',
      type: 'number',
    },
    {
      name: 'isOnSale',
      title: 'Sleva',
      type: 'boolean',
    },
    {
      name: 'propertyType',
      title: 'Typ nemovitosti',
      type: 'string',
      options: {
        list: [
          {title: 'Dům', value: 'house'},
          {title: 'Byt', value: 'apartment'},
          {title: 'Pozemek', value: 'land'},
          {title: 'Komerční', value: 'commercial'},
          {title: 'Vila', value: 'villa'},
        ],
      },
    },
    {
      name: 'area',
      title: 'Plocha (m²)',
      type: 'number',
    },
    {
      name: 'rooms',
      title: 'Počet místností',
      type: 'number',
    },
    {
      name: 'location',
      title: 'Lokalita/Adresa',
      type: 'string',
    },
    {
      name: 'condition',
      title: 'Stav nemovitosti',
      type: 'string',
      options: {
        list: [
          {title: 'Novostavba', value: 'new'},
          {title: 'K rekonstrukci', value: 'toRenovate'},
          {title: 'Po rekonstrukci', value: 'renovated'},
        ],
      },
    },
    {
      name: 'energyLabel',
      title: 'Energetický štítek',
      type: 'string',
      options: {
        list: [
          {title: 'A', value: 'A'},
          {title: 'B', value: 'B'},
          {title: 'C', value: 'C'},
          {title: 'D', value: 'D'},
          {title: 'E', value: 'E'},
          {title: 'F', value: 'F'},
          {title: 'G', value: 'G'},
        ],
      },
    },
    {
      name: 'image',
      title: 'Obrázek',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'location',
    },
  },
}
