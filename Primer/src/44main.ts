// function writeValue(val?: string, ...extraInfo: string[]) {
//     console.log(`Value: ${val}, Extras: ${extraInfo}`)
//     }
//     writeValue("London", "Raining", "Cold");
//     writeValue("Paris", "Sunny");
//     writeValue("New York");
//     writeValue("");

// 
    function writeValue(val: string, ...extraInfo:(number | string)[]) {
        console.log(`Value: ${val}, Extras: ${extraInfo}`)
        }
        writeValue("London", "Raining", "Cold");
        writeValue("Paris", "Sunny");
        writeValue("New York");
        writeValue("New York", 20);
        writeValue(20); 