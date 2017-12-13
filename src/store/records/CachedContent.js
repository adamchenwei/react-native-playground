import content from './content';
export default class CachedContent {
  constructor(
    recordId,
  ) {
    return {
      content: content[recordId] || '',
      collectedByUserId: '',
      collectedTime: 0,
    } || {
      content: '',
      collectedByUserId: '',
      collectedTime: 0,
    }
  }
};