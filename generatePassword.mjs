const generatePassword = ({ includeSymbols, passwordLength }) => {
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
    if (includeSymbols) {
        characters += "!£$%^&*()?@+"
    }
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        const randomInd = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomInd);
    }
    return password
}

export default generatePassword