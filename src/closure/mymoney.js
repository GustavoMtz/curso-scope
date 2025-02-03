function money(moneda){
    let save = 0;
    save += moneda;
    console.log(`money; $${save}`);
}

money(34);
money(5);


function money() {
    let save = 0;
    function money2(moneda){
        save+=moneda;
        console.log(`money; $${save}`);
    }
    return money2;
}

const mMoney = money();

mMoney(34);
mMoney(5);

const mMoneyA = money();
mMoneyA(2);
mMoneyA(2);
mMoneyA(2);
mMoneyA(2);