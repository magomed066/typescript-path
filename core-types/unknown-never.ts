let userInput: unknown

userInput = 6
userInput = 'str'

let userName: string

if (typeof userInput === 'string') {
	userName = userInput
}

function generateError(message: string, code: number): never {
	throw { message, statusCode: code }
}

generateError('An error occured!', 500)
