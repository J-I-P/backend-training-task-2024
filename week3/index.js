const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];

let purchaseRecords = [];

function addPurchaseRecord( member, classCount) {
    const name = member;
    const count = classCount;
    let price = count <= 10 ? 1500 : count <= 20 ? 1300 : 1100;

    const total = count * price;
    if (!members.includes(member) || typeof classCount !== "number" || classCount <= 0) {
        console.log(`輸入錯誤，請輸入有效的會員名稱和課程數量`);
        return;
    } else {
        purchaseRecords.push({ "name":name, "course":count, "price":price, "total":total });

    console.log(`新增購買記錄成功！會員 ${member} 購買 ${classCount} 堂課，總金額為 ${total} 元`)
    }
    
};


function calculateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < purchaseRecords.length; i++) {
        totalPrice += purchaseRecords[i].total;
    }
    return `目前總營業額為 ${totalPrice} 元`;
}

function filterNoPurchaseMember() {
    let noPurchaseMember = [];
    for (let i = 0; i < members.length; i++) {
        let isPurchase = false;
        for (let j = 0; j < purchaseRecords.length; j++) {
            if (members[i] === purchaseRecords[j].name) {
                isPurchase = true;
                break;
            }
        }
        if (!isPurchase) {
            noPurchaseMember.push(members[i]);
        }
    }
    return `未購買課程的會員有：${noPurchaseMember}`;
}

addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("名稱", "課程數量");
console.log(JSON.stringify(purchaseRecords, null, 2));
console.log(calculateTotalPrice());
console.log(filterNoPurchaseMember()); 