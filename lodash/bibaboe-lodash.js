var bibaboe = {

  chunk: function() {},

  compact: function() {},

  fill: function (array, value, start = 0, end = array.length) {
    var result = []
    for (var i = start; i < end; i++) {
      result[i] = value
    }
    return result
  },

}
