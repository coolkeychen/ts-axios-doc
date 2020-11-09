function printLabel(labelValueObj : {label : string}) {
  console.log(labelValueObj.label);
}

let myObj = { size: 10 , label: 'Size 10 Object'}
printLabel(myObj)