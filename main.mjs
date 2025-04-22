import generatePassword from "./generatePassword.mjs"

const settings = {
    includeSymbols: true,
    passwordLength: 16
}

const passwordLengthInput = document.getElementById("password-length")
const includeSymbolsInput = document.getElementById("include-symbols")
const passwordElement = document.getElementById("password")
const generatePasswordButton = document.getElementById("generate-password-button")
const copyButton = document.getElementById("copy-button")

passwordLengthInput.value = settings.passwordLength
includeSymbolsInput.checked = settings.includeSymbols
passwordElement.innerText = generatePassword(settings)

generatePasswordButton.addEventListener("click", () => {
    passwordElement.innerText = generatePassword(settings)
})

includeSymbolsInput.addEventListener("change", () => {
    settings.includeSymbols = includeSymbolsInput.checked
})

passwordLengthInput.addEventListener("change", () => {
    settings.passwordLength = passwordLengthInput.value
})

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordElement.innerText)
    alert("Copied password!")
})





