export const deskStructure = (S: any) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Nemovitosti')
        .child(S.documentTypeList('property').title('Seznam nemovitostí')),

      S.divider(),
      ...S.documentTypeListItems().filter(
        (item: any) => !['property', 'media.tag'].includes(item.getId()),
      ),
    ])
