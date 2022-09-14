var bibaboe = {
  // 将一个数组里的元素分成【size】个一组
  chunk: function (array, size = 1) {
    if (size == 1) return array
    var result = []

    for (var i = 0; i < Math.ceil(array.length / size); i++) {
      var ary = []
      for (var j = 0; j < size; j++) {
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

    // 把array从start下标开始，不包含end下标的元素替换成value
  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  // 把在values中存在的值排除，返回新数组
  difference: function (array, values) {
    var map = {}
    for (var i = 0; i < values.length; i++) {
      map[values[i]] = 0
    }

    var result = []
    for (var j = 0; j < array.length; j++) {
      if (!(array[j] in map)) {
        result.push(array[j])
      }
    }

    return result
  },

  // 数组降维
  flatten: function flatten(array) {
    return array.reduce((result, it) => {
      return result.concat(it)
    })
  },

  // 数组多重降维
  flattenDeep: function flattenDeep(array) {
    return array.reduce((result, it) => {
      if (Array.isArray(it)) {
        return flattenDeep(it)
      }
      return result.concat(it)
    })
  },
}
