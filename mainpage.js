const userEmail = document.getElementById("userEmail").value;
auth.onAuthStateChanged((user) => {
    if (!user) {
        location.href = "/"
    }
    else {
        document.getElementById("userEmail").innerHTML = user.email;
        userName = user.email;
    }
})
//
const hotelDiv = document.querySelector(".itemAdded");

const addItem = () => {
    const itemName = document.querySelector(".itemName").value;
    const itemRate = document.querySelector(".itemRate").value;
    const itemNameT = document.createTextNode(itemName);
    const itemRateT = document.createTextNode(itemRate);

    const pForText = document.createElement("p");
    pForText.appendChild(itemNameT);
    const pForRate = document.createElement("p");
    pForRate.appendChild(itemRateT);

    const addingDiv = document.createElement("div");
    addingDiv.append(pForText, pForRate);
    hotelDiv.appendChild(addingDiv);

    document.querySelector(".itemName").value = "";
    document.querySelector(".itemRate").value = "";
}
const itemsCollection = document.querySelector(".itemAdded");
const arrOfItems = [];
const gettingItem = () => {
    const divsOfAddingItem = itemsCollection.getElementsByTagName("div");
    for (const divTag of divsOfAddingItem) {
        const preObj = divTag.childNodes;
        const objOfItems = {
            itemName: preObj[0].innerHTML,
            itemRate: preObj[1].innerHTML
        }
        arrOfItems.push(objOfItems)
    };
    return arrOfItems;
}
const addingDB = (user) => {
    const hotelName = document.querySelector("#hotelName").value;
    const hotelArea = document.querySelector("#hotelArea").value;
    gettingItem();
    firestore.collection("hotelUsers").doc(userName).set({
        hotelName, hotelArea, arrOfItems
    }).then(() => alert("Succeed"))
    document.querySelector(".itemAdded").innerHTML = "";
    document.querySelector("#hotelName").value = "";
    document.querySelector("#hotelArea").value = "";

}

const signOut = () => {
    auth.signOut()
}
