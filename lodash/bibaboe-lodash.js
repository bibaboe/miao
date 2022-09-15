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

  // 数组无限重降维
  flattenDeep: function flattenDeep(array) {
    return array.reduce((result, it) => {
      if (Array.isArray(it)) {
        return result.concat(flattenDeep(it))
      }
      return result.concat(it)
    },[])
  },

  //数组多重降维
  flattenDepth: function flattenDepth(array, depth = 1) {
    if (depth == 0) return array
    var result = []

    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && depth >= 1) {
        result = result.concat(flattenDepth(array[i],depth - 1))
      } else {
        result.push(array[i])
      }
    }

    return result
  },

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
      i++
      j--
    }

    return array
  },

  //连接字符串
  join: function (array, separator = ',') {
    var str ='' + array[0]

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
      if (array[j] in map) {
        array.splice(j,1)
      } else {
        j++
      }
    }

    return array
  },

  //
  pullAll: function (array, values) {
    var map = {}
    for (var i = 0; i < values.length; i++) {
      if (!(values[i] in map)) {
        map[values[i]] = 0
      }
    }

    var j = 0
    while (j < array.length) {
      if (array[j] in map) {
        array.splice(j,1)
      } else {
        j++
      }
    }

    return array
  },

  // 从末尾检索数组
  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    var i = fromIndex >= 0 ? fromIndex : fromIndex + array.length
    for ( ; i >= 0; i--) {
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

  // 返回交集元素
  intersection: function (...arrays) {
    var result = []
    var map = {}
    for (var i = 0; i < arrays.length; i++) {
      for (var j = 0; j < arrays[i].length; j++) {
        if (!(arrays[i][j] in map)) {
          map[arrays[i][j]] = 0
        }
        map[arrays[i][j]]++
      }
    }

    for (var key in map) {
      if (map[key] > 1) {
        result.push(+key)
      }
    }

    return result
  },

  // 返回value插入数组的下标
  sortedIndex: function (array, value) {
    if (array.length == 0 || array[0] >= value) return 0
    if (array[array.length - 1] < value) return array.length

    var low = 0
    var high = array.length - 1

    while (low <= high) {
      var mid = Math.floor((low + high) / 2)
      if (array[mid] >= value && array[mid - 1] < value) {
      return mid
      } else if (array[mid] < value) {
        low = mid + 1
      } else if (array[mid] >= value) {
        high = mid - 1
      }
    }
  },

  //对升序数组从头找value，返回下标或-1
  sortedIndexOf: function (array, value) {
    var low = 0, high = array.length - 1

    while (low <= high) {
      var mid = Math.floor((low + high) / 2)
      if (array[mid] == value && array[mid - 1] < value || array[mid] == value && mid == 0) {
        return mid
      } else if (array[mid] < value) {
        low = mid + 1
      } else if (array[mid] >= value) {
        high = mid - 1
      }
    }

    return -1
  },

  // 对升序数组从末尾找value，返回下标或-1
  sortedLastIndexOf: function (array, value) {
    var low = 0, high = array.length - 1

    while (low <= high) {
      var mid = Math.floor((low + high) / 2)
      if (array[mid] == value && array[mid + 1] > value || array[mid] == value && mid == array.length - 1) {
        return mid
      } else if (array[mid] <= value) {
        low = mid + 1
      } else if (array[mid] > value) {
        high = mid - 1
      }
    }

    return -1
  },

  //返回从末尾数第value个下标的元素
  sortedLastIndex: function (array, value) {
    var low = 0, high = array.length - 1

    while (low <= high) {
      var mid = Math.floor((low + high) / 2)
      if (mid == array.length - value) {
        return array[mid]
      } else if (mid < array.length - value) {
        low = mid + 1
      } else if (mid > array.length - value) {
        high = mid - 1
      }
    }
  },

  //返回唯一元素的数组
  sortedUniq: function (array) {
    var newAry = []
    var map = {}

    for (var i = 0; i < array.length; i++) {
      if (!(array[i] in map)) {
        map[array[i]] = 0
        newAry.push(array[i])
      }
    }

    return newAry
  },

  // 返回经过iteratee函数后唯一元素的数组
  sortedUniqBy: function (array, iteratee) {
    var newAry = []
    var map = {}

    for (var i = 0; i < array.length; i++) {
      if (!(iteratee(array[i]) in map)) {
        map[iteratee(array[i])] = 0
        newAry.push(array[i])
      }
    }

    return newAry
  },

  // 返回除第一个元素之外的所有元素
  tail: function (array) {
    array.shift()
    return array
  },

  //返回从头数n个元素的数组
  take: function (array, n = 1) {
    var newAry = []

    for (var i = 0; i < array.length && i < n; i++) {
      newAry.push(array[i])
    }

    return newAry
  },

  // 返回从末尾数n个元素的数组
  takeRight: function (array, n = 1) {
    var newAry = []

    for (var i = array.length - 1; i >= 0 && i >= array.length - n; i--) {
      newAry.unshift(array[i])
    }

    return newAry
  },

  //返回所有数组里出现过的元素组成的新数组，出现多次只取一个
  union: function (...arrays) {
    var map = {}
    var uniqAry = []

    for (var i = 0; i < arrays.length; i++) {
      for (var j = 0; j < arrays[i].length; j++) {
        if (!(arrays[i][j] in map)) {
          map[arrays[i][j]] = 0
          uniqAry.push(arrays[i][j])
        }
      }
    }

    return uniqAry
  },

  // 返回array里出现过的元素组成的新数组，出现多次只取一个
  uniq: function (array) {
    var map = {}
    var uniqAry = []

    for (var i = 0; i < array.length; i++) {
      if (!(array[i] in map)) {
        map[array[i]] = 0
        uniqAry.push(array[i])
      }
    }

    return uniqAry
  },

  // 解压数组
  unzip: function (array) {
    var newAry = []

    for (var i = 0; i < array[0].length; i++) {
      var ary = []
      for (var j = 0; j < array.length; j++) {
        ary.push(array[j][i])
      }
      newAry.push(ary)
    }

    return newAry
  },

  // 返回没有在values里出现过的元素组成的数组
  without: function (array, ...values) {
    var map = {}
    for (var i = 0; i < values.length; i++) {
      if (!(values[i] in map)) {
        map[values[i]] = 0
      }
    }

    var newAry = []
    for (var j = 0; j < array.length; j++) {
      if (!(array[j] in map)) {
        newAry.push(array[j])
      }
    }

    return newAry
  },

  // 压缩数组
  zip: function(...arrays) {
    var newAry = []

    for (var i = 0; i < arrays[0].length; i++) {
      var ary = []
      for (var j = 0; j < arrays.length; j++) {
        ary.push(arrays[j][i])
      }
      newAry.push(ary)
    }

    return newAry
  },

  //
  countBy: function (collection, iteratee = identity) {

  },
}
