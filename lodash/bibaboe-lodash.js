var bibaboe = {

  chunk: function () {

  },

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

  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },


}
