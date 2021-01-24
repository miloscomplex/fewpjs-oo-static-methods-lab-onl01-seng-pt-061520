class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string) {
    if(!string) {
      return ''
    }
    let stringArr = []
    const excludeWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    stringArr = string.split(" ")
    return stringArr.map((word, index) => {
      return excludeWords.includes(word) && index!=0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
