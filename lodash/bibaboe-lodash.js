var bibaboe = {
  // 将一个数组里的元素分成【size】个一组
  chunk: function (array, size = 1) {
    if (size == 1) return array
    var result = []

    for (var i = 0; i < Math.ceil(array.length / size); i++) {
      var ary = []
      for (var j = 0; j < size && i * size + j < array.length; j++) {
        ary.push(array[i * size + j])
      }
      result.push(ary)
    }

    return result
  },

  // 删除数组里的false,null,0,'',undefined和NaN
  compact: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      var a = array[i]
      if (a === false || a === null || a === 0 || a === '' || a != a) {
        continue
      }
      result.push(a)
    }
    return result
  },

  // 合并数组，返回新数组
  concat: function (array, ...values) {
    var result = array
    for (var i = 0; i < values.length; i++) {
      if (!Array.isArray(values[i])) {
        result.push(values[i])
      } else {
        for (var j = 0; j < values[i].length; j++) {
          result.push(values[i][j])
        }
      }
    }
    return result
  },

    // 把array从start下标开始，不包含end下标的元素替换成value
  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  // 把在values中存在的值排除，返回新数组
  difference: function (array, ...values) {
    var map = {}

    for (var i = 0; i < values.length; i++) {
      for (var j = 0; j < values[i].length; j++) {
        if (!(values[i][j] in map)) {
          map[values[i][j]] = 0
        }
      }
    }

    var result = []
    for (var k = 0; k < array.length; k++) {
      if (!(array[k] in map)) {
        result.push(array[k])
      }
    }

    return result
  },

  // 数组降维
  flatten: function flatten(array) {
    return array.reduce((result, it) => {
      return result.concat(it)
    },[])
  },

  // 数组多重降维
  flattenDeep: function flattenDeep(array) {
    return array.reduce((result, it) => {
      if (Array.isArray(it)) {
        return flattenDeep(it)
      }
      return result.concat(it)
    },[])
  },

  //
  // flattenDepth: function flattenDepth(array, depth = 1) {
  //   var f = 1
  //   return array.reduce((result, it) => {
  //     if (Array.isArray(it) && f < depth) {
  //       f++
  //       return flattenDepth(it)
  //     }
  //     return result.concat(it)
  //   })
  // },
  // console.log(flattenDepth([1,[2,[3,[4]],5]]))

  //从开头删除n个元素
  drop: function (array, n = 1) {
    for (var i = 0; i < n && array.length != 0; i++) {
      array.shift()
    }
    return array
  },

  //从末尾删除n个元素
  dropRight: function (array, n = 1) {
    for (var i = 0; i < n && array.length != 0; i++) {
      array.pop()
    }
    return array
  },

  //返回数组第一个元素
  head: function (array) {
    if (array.length == 0) {
      return undefined
    } else {
      return array[0]
    }
  },

  //返回数组最后一个元素
  last: function (array) {
    if (array.length == 0) {
      return undefined
    } else {
      return array[array.length - 1]
    }
  },

  // 返回数组中最小的元素
  min: function (array) {
    if (array.length == 0) return undefined
    var minNum = Infinity
    for (var i = 0; i < array.length; i++) {
      if (minNum > array[i]) {
        minNum = array[i]
      }
    }
    return minNum
  },

  // 返回数组中最大的元素
  max: function (array) {
    if (array.length == 0) return undefined
    var maxNum = -Infinity
    for (var i = 0; i < array.length; i++) {
      if (maxNum < array[i]) {
        maxNum = array[i]
      }
    }
    return maxNum
  },

  // 返回下标为n的元素，如果n为负数，则返回倒数第n个元素
  nth: function (array, n = 0) {
    if (n >= 0) {
      return array[n]
    } else {
      return array[array.length + n]
    }
  },

  //
  indexOf: function (array, value, fromIndex = 0) {
    if (fromIndex >= 0) {
      for (var i = fromIndex; i < array.length; i++) {
        if (array[i] == value) return i
      }
      return -1
    } else {
      for (var j = array.length + fromIndex; j <array.length; j++) {
        if (array[j] == value) return j
      }
      return -1
    }
  },

  // 反转数组
  reverse: function (array) {
    if (array.length == 0 || array.length == 1) return array

    var i = 0, j = array.length - 1
    while (i < j) {
      var a = array[i]
      array[i] = array[j]
      array[j] = a
    }

    return array
  },

  //连接字符串
  join: function (array, separator = ',') {
    var str = array[0]

    for (var i = 1; i < array.length; i++) {
      str = str + separator + array[i]
    }

    return str
  },

  // 返回删除最后一个元素的数组
  initial: function (array) {
    array.pop()
    return array
  },

  // 删除在values出现的元素
  pull: function (array, ...values) {
    var map = {}
    for (var i = 0; i < values.length; i++) {
      if (!(values[i] in map)) {
        map[values[i]] = 0
      }
    }

    var j = 0
    while (j < array.length) {
      if (!(array[j] in map)) {
        j++
      } else {
        array.remove(array[j])
      }
    }

    return array
  },

  // 从末尾检索数组
  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i++) {
      if (array[i] == value) return i
    }
    return -1
  },

  //数组转对象
  fromPairs: function (pairs) {
    var map = {}

    for (var i = 0; i < pairs.length; i++) {
      map[pairs[i][0]] = pairs[i][1]
    }

    return map
  },


}
