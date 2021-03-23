function evenNumbers(array, number) {
  // good luck
  const result = []
  for(let i = array.length; i >= 0 && result.length < number ; i--){
    if(array[i] % 2 == 0){
      result.unshift(array[i])
    }
  }
  return result
}