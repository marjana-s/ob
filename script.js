const object = {
    key1: "value1",
    key2: "value2",
    key3:  "value3"
}

function toString(obj){
    let string = "";
    const keys = Object.keys(obj)

    keys.forEach((value, index) => {
        string = string + value + " = " + obj[value] + " "
    })
    console.log(string)
}

toString(object)