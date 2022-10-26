// function writeValue(val: string | null) {
//     console.log(`Value: ${val ?? "Fallback value"}`)
//     }
//     writeValue("London");
//     writeValue(null);




    // Default value hole dey na error

    
    function writeValue(val: string | null ="Dhaka") {
        console.log(`Value: ${val ?? "Fallback value"}`)
        }
        writeValue("London");
        writeValue(null);
        writeValue();