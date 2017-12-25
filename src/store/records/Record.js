import AppRoute from './AppRoute';
import Reference from './Reference';
import CollectedBy from './CollectedBy';
import CachedContent from './CachedContent';

export default class Record {
  constructor(
    id='0',
    title='',
    appRouteCustom='',
    appRouteDefault='',
    tags=[],
    references=[],
    collectionInfo=[],
  ) {
    const referencesInstance = references.map(
      (reference) => new Reference(reference.url, reference.note))
    ;
    const collectionInfoInstance = collectionInfo.map(
      (collectedBy) => new CollectedBy(collectedBy.userId, collectedBy.date));
    return {
      id,
      content: {
        title,
        appRoute: new AppRoute(appRouteCustom, appRouteDefault),
        tags: tags,
        references: referencesInstance,
        collectionInfo: collectionInfoInstance,
        cachedContent: {
          content: '',
          collectedByUserId: '',
          collectedTime: 0,
        }, //new CachedContent(id)
      }
    }
  };
};