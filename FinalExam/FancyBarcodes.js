function fancyBarcodes(arr) {

    let regex = /[@][#]{1,}[A-Z][a-zA-Z0-9]{4,}[A-Z][@][#]{1,}/gm
    let regexForDig = /\d/g;
    let barcodeCount = Number(arr.shift());

    for (let i = 0; i < barcodeCount; i++) {
        let barcode = arr[i];
        let match = barcode.match(regex);
        let productGroup = "00";

        if (match) {
            let dig = barcode.match(regexForDig);
            if (dig) {
                productGroup = dig.join("");
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log(`Invalid barcode`);
        }

    }

}
fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])