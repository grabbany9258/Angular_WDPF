// function composeString(val: string) : string {
//     return `Composed string: ${val}`;
//     }
//     function writeValue(val?: string) {
//     console.log(composeString(val ?? "Fallback value"));
//     }
//     writeValue("London");
//     writeValue();

    //  number diye kora

    function composeString(val: number) : string {
        return `Composed string: ${val}`;
        }
        function writeValue(val?: number) {
        console.log(composeString(val ?? 100));
        }
        writeValue("London");
        writeValue();

        