//функцию, которая будет принимать любую сумму денег и разбивать ее на как можно меньшее количество купюр.
function giveChange(amount) {
    let bills = [];
    let hundredBills = Math.floor(amount/100);
    let fiftyBills = Math.floor((amount - hundredBills * 100)/50);
    let twentyBills = Math.floor((amount - hundredBills * 100 - fiftyBills * 50)/20);
    let tenBills = Math.floor((amount - hundredBills * 100 - fiftyBills * 50 - twentyBills * 20)/10);
    let fiveBills = Math.floor((amount - hundredBills * 100 - fiftyBills * 50 - twentyBills * 20 - tenBills*10)/5);
    let oneBills = Math.floor((amount - hundredBills * 100 - fiftyBills * 50 - twentyBills * 20 - tenBills*10 - fiveBills * 5));
    bills.push(oneBills, fiveBills, tenBills, twentyBills, fiftyBills, hundredBills);
    return bills;
    }