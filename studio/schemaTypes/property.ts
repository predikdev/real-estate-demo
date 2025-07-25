export default {
  name: 'property',
  title: 'Nemovitost',
  type: 'document',
  fieldsets: [
    {name: 'informations', title: 'Informace o nemovitosti'},
    {name: 'details', title: 'Detaily o nemovitosti'},
    {name: 'address', title: 'Adresa'},
  ],
  fields: [
    {
      name: 'street',
      title: 'Ulice',
      type: 'string',
      fieldset: 'address',
    },
    {
      name: 'streetNumber',
      title: 'Číslo popisné',
      type: 'string',
      fieldset: 'address',
    },
    {
      name: 'city',
      title: 'Město',
      type: 'string',
      fieldset: 'address',
    },
    {
      name: 'zip',
      title: 'PSČ',
      type: 'number',
      fieldset: 'address',
    },
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
    {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}},
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
      name: 'additionalDescription',
      title: 'Doplňující informace',
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
      initialValue: false,
    },

    {
      name: 'propertyType',
      title: 'Typ nemovitosti',
      type: 'string',
      fieldset: 'informations',
      options: {
        list: [
          {title: 'Dům', value: 'Dům'},
          {title: 'Byt', value: 'Byt'},
          {title: 'Vila', value: 'Vila'},
          {title: 'Pozemek', value: 'Pozemek'},
          {title: 'Komerční', value: 'Komerční'},
        ],
      },
    },
    {
      name: 'offerType',
      title: 'Typ nabídky',
      type: 'string',
      fieldset: 'informations',
      options: {
        list: [
          {title: 'Prodej', value: 'Prodej'},
          {title: 'Pronájem', value: 'Pronájem'},
        ],
      },
    },
    {
      name: 'availability',
      title: 'Dostupnost',
      type: 'string',
      fieldset: 'informations',
      options: {
        list: [
          {title: 'Ihned', value: 'Ihned'},
          {title: 'Na dotaz', value: 'Na dotaz'},
          {title: 'Dohodou', value: 'Dohodou'},
          {title: 'Rezervováno', value: 'Rezervováno'},
        ],
      },
    },
    {
      name: 'disposition',
      title: 'Dispozice',
      type: 'string',
      fieldset: 'informations',
    },
    {
      name: 'construction',
      title: 'Konstrukce budovy',
      type: 'string',
      fieldset: 'informations',
      options: {
        list: [
          {title: 'Cihla', value: 'Cihla'},
          {title: 'Kámen', value: 'Kámen'},
          {title: 'Panel', value: 'Panel'},
        ],
      },
    },
    {
      name: 'constructionYear',
      title: 'Rok výstavby',
      type: 'number',
      fieldset: 'informations',
    },
    {
      name: 'reconstructionYear',
      title: 'Rok rekonstrukce',
      type: 'number',
      fieldset: 'informations',
    },
    {
      name: 'livingArea',
      title: 'Užitná plocha (m²)',
      type: 'number',
      fieldset: 'details',
    },
    {
      name: 'rooms',
      title: 'Počet místností',
      type: 'number',
      fieldset: 'details',
    },
    {
      name: 'floor',
      title: 'Podlaží',
      type: 'number',
      fieldset: 'details',
    },
    {
      name: 'elevator',
      title: 'Výtah',
      type: 'boolean',
      fieldset: 'details',
    },
    {
      name: 'heating',
      title: 'Vytýpění',
      type: 'string',
      fieldset: 'details',
      options: {
        list: [
          {title: 'Ústřední topení', value: 'Ústřední topení'},
          {title: 'Plynový kotel', value: 'Plynový kotel'},
          {title: 'Elektrické vytápění', value: 'Elektrické vytápění'},
          {title: 'Tepelné čerpadlo', value: 'Tepelné čerpadlo'},
          {title: 'Podlahové vytápění', value: 'Podlahové vytápění'},
          {title: 'Krb / Kamna', value: 'Krb / Kamna'},
          {title: 'Solární vytápění', value: 'Solární vytápění'},
          {title: 'Jiné', value: 'Jiné'},
        ],
      },
    },
    {
      name: 'equipment',
      title: 'Vybavení',
      type: 'string',
      fieldset: 'details',
      options: {
        list: [
          {title: 'Bez vybavení', value: 'Bez vybavení'},
          {title: 'Částečne vybaveno', value: 'Částečne vybaveno'},
          {title: 'Plně vybaveno', value: 'Plně vybaveno'},
        ],
      },
    },
    {
      name: 'balcony',
      title: 'Balkon / Terasa',
      type: 'boolean',
      fieldset: 'details',
      initialValue: false,
    },
    {
      name: 'cellar',
      title: 'Sklep',
      type: 'boolean',
      fieldset: 'details',
      initialValue: false,
    },
    {
      name: 'parking',
      title: 'Garáž / Parkování',
      type: 'string',
      fieldset: 'details',
      options: {
        list: [
          {title: 'Bez parkování', value: 'Bez parkování'},
          {title: 'Parkování na ulici', value: 'Parkování na ulici'},
          {title: 'Vyhrazené venkovní stání', value: 'Venkovní stání'},
          {title: 'Kryté stání', value: 'Kryté stání'},
          {title: 'Garážové stání', value: 'Garážové stání'},
          {title: 'Soukromá garáž', value: 'Soukromá garáž'},
          {title: 'Možnost dokoupit', value: 'Možnost dokoupit'},
        ],
      },
    },
    {
      name: 'condition',
      title: 'Stav nemovitosti',
      type: 'string',
      fieldset: 'details',
      options: {
        list: [
          {title: 'Před rekonstrukcí', value: 'Před rekonstrukcí'},
          {title: 'Původní stav', value: 'Původní stav'},
          {title: 'Novostavba', value: 'Novostavba'},
          {title: 'Po rekonstrukci', value: 'Po rekonstrukci'},
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
      name: 'images',
      title: 'Obrázky',
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
