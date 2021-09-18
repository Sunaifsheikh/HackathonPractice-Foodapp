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

function getMarkers() {
    firestore.collection("hotelUsers").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  }
getMarkers();
const signOut = () => {
    auth.signOut()
}