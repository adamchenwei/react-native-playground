class DetailCache {
  constructor(cache) {
    this.cache = cache;
  }
  set(cache) {
    this.cache = cache;
  }

  get() {
    return this.cache || {};
  }
}

export default new DetailCache();