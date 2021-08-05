const kebabCase = (str: string) => {
  const tagString =
    str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
  if (tagString) return tagString.map((x) => x.toLowerCase()).join('-')
  else return str
}

export default kebabCase
