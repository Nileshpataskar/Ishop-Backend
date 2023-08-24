class ApiFeatures {
    constructor(query, querystr) {
      this.query = query;
      this.querystr = querystr;
    }
  
    search() {
      if (this.querystr.keyword) {
        const keywordRegExp = new RegExp(this.querystr.keyword, "i"); // Case-insensitive search
        this.query = this.query.find({ name: keywordRegExp });
      }
      return this;
    }
  }
  
  module.exports = ApiFeatures;
  
// class ApiFeatures {
//   constructor(query, querystr) {
//     this.query = query;
//     this.querystr = querystr;
//   }
//   search() {
//     const keyword = this.querystr.keyword
//       ? {
//           name: {
//             $regex: this.querystr.keyword,
//             options,
//           },
//         }
//       : {};
//     this.query = this.query.find({ ...keyword });
//     return this;
//   }
// }
// module.exports = ApiFeatures;
