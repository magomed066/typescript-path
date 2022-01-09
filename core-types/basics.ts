function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2

  if (showResult) {
    console.log(phrase + result)
  } else {
    return result
  }
}

const number1 = 6
const number2 = 4
const printResult= true
const phrase = 'The result is '

add(number1, number2, printResult, phrase)

