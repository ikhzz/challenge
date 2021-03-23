function solve(a,b){
  const result = []
  for(let i = 0; i < b.length; i++){
    let num = 0
    for(let j = 0; j< a.length; j++ ){
      if(b[i] == a[j]){
        num += 1
      }
      console.log(num)
    }
    result.push(num)
  }
  return result
}