export let capitalize = (string) => {
  let firstLetter = string[0]
  let theRest = string.slice(1)
  return firstLetter.toUpperCase() + theRest
}
