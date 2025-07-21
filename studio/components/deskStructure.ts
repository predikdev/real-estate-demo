export const deskStructure = (S: any) =>
  S.list()
    .title('Base')
    .items([
      S.listItem().title('Nemovitosti').child(S.documentTypeList('property').title('Nemovitosti')),

      S.divider(),
      ...S.documentTypeListItems().filter(
        (item: any) => !['property', 'page'].includes(item.getId()),
      ),
    ])
