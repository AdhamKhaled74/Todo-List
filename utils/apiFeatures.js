class APIFeature {
  // eslint-disable-next-line no-shadow
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}
module.exports = APIFeature;
