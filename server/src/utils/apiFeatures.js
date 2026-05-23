class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  // search
  search() {
    const keyword = this.queryString.keyword
      ? {
          name: {
            $regex: this.queryString.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });

    return this;
  }

  // filter
  filter() {
    const queryCopy = { ...this.queryString };

    // remove special fields
    const removeFields = ["keyword", "page", "limit"];

    removeFields.forEach((key) => delete queryCopy[key]);

    // advanced filter
    let queryStr = JSON.stringify(queryCopy);

    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (key) => `$${key}`
    );

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
  if (this.queryString.sort) {
    const sortBy = this.queryString.sort.split(",").join(" ");

    this.query = this.query.sort(sortBy);
  } else {
    this.query = this.query.sort("-createdAt");
  }

  return this;
}

  // pagination
  pagination(resultPerPage) {
    const currentPage = Number(this.queryString.page) || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);

    return this;
  }
}

module.exports = APIFeatures;