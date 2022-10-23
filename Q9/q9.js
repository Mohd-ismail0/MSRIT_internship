let btnAdd = document.querySelector('#add');
let btnCal = document.querySelector('#calculate');
let table = document.querySelector('table');
let nameInput = document.querySelector('#name');
let qtyInput = document.querySelector('#qty');
let codeInput = document.querySelector('#code');
let priceInput = document.querySelector('#price');
btnAdd.addEventListener('click', () => {
    let name= nameInput.value;
    let qty= qtyInput.value;
    let code= codeInput.value;
    let price=priceInput.value;
    let tvalue=parseInt(qtyInput.value)*parseInt(priceInput.value);
    let template= `<tr>
    <td>${name}</td>
    <td>${qty}</td>
    <td>${code}</td>
    <td>${price}</td>
    <td>${tvalue}</td></tr>`;
    table.innerHTML+=template;
    }
);
btnCal.addEventListener('click', () => {
    let sum=0;
    for(i=1;i<mytab.rows.length;i++){
        var obj = mytab.rows.item(i).cells;
        sum+=parseInt(obj.item(4).innerHTML);
        info.innerHTML="Total Value of Inventory is: "+sum+'<br>';
    }
})
