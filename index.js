class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-']+/g, '')
  }

  static titleize(string) {
    const except = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let stringArr = string.split(" ")
    stringArr[0].toUpperCase()
    except.forEach( element => {
      stringArr.forEach( str => {
        if (element !== str) {
          str.toUpperCase()
        }
      })
    })
    return stringArr.join(' ')
  }
}
