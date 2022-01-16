export let capitalize = (streng) => {
  let firstLetter = streng[0]
  let theRest = streng.slice(1)
  return firstLetter.toUpperCase() + theRest
}
