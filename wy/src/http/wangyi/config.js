export default {
  name:"seller",
  api:{
    getSearchInitData:{
      url:"/xhr/search/init.json",
      method:"get",
      corsUrl:"/wangyi"
    },
    getSearchData:{
      url:"/xhr/search/searchAutoComplete.json",
      method:"get",
      corsUrl:"/wangyi"
    }
  }
}
