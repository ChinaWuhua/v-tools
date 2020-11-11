const Vtools = (function () {
  return {
    /*
      冒泡排序法
      传入一维数组,会得到排序后的数组
      params: []
      result: []
    */
    Bubbling (arr) {
      for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
          if(arr[j] < arr[i]){
            let tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp
          }
        }
      }
      return arr
    },

    /*
      数组扁平化
      传入嵌套了任意层级的数组，会得到一个扁平化的数组
      params: []
      result: []
    */
    Flattening (data) {
      let res = []
      if (data.constructor.name === 'Array') {
        for (let item of data) {
          res = res.concat(this.Flattening(item))
        }
      } else {
        res = res.concat(data) 
      }
      return res
    },
  }
})()

export default Vtools