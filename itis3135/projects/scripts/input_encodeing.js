const inputObj = document.getElementById("name");
const inputMessage = document.getElementById("message");
const submitButton = document.getElementById("submit");

function encode()
{
    const dangerCharacters = ["<", ">", "\"", "\\", "\`", "\&", ".", "\$"];
    let temp = "";
    for (character of inputObj.value)
    {
        if (dangerCharacters.indexOf(character) >= 0)
        {
            temp += "%" + dangerCharacters.indexOf(character) + "%";
        }
        else
        {
            temp += character;
        }
    }
    inputObj.value = temp;
    temp = "";
    for (character of inputMessage.value)
    {
        if (dangerCharacters.indexOf(character) >= 0)
        {
            temp += "%" + dangerCharacters.indexOf(character) + "%";
        }
        else
        {
            temp += character;
        }
    }
    inputMessage.value = temp;
}

submitButton.addEventListener("click", encode);