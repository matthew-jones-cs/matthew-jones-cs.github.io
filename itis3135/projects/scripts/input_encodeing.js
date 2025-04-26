const inputObj = document.getElementById("name");
const submitButton = document.getElementById("submit");

function encode()
{
    console.log("hi");
    const dangerCharacters = ["<", ">", "\"", "\\", "\`", "\&", ".", "\$"];
    let temp = "";
    for (character of inputObj.innerText)
    {
        if (dangerCharacters.indexOf(character) >= 0)
        {
            temp += "%" + dangerCharacters.indexOf(character);
        }
        else
        {
            temp += character;
        }
    }
    const encodedInput = temp;
    console.log(encodedInput);
    return encodedInput;
}

submitButton.addEventListener("click", encode);