// Sistem Perdagangan

// Masukan nama
const name = prompt("Input your name ! ")
alert("Hello " + name)

// Menu untuk customer ingin membeli atau tidak
const question = prompt("Are you want buy something ? Answer(Y = Yes, N = No)")

/* jika customer ingin membeli sesuatu maka akan 
   ditampilkan menu makanan dan minuman */

if (question == "Y" || "Yes") {
    // Menampilkan
    // Daftar Makanan
    // - Roti    301
    // - Coklat  302

    // Daftar Minuman
    // - Air Mineral 401
    // - Air Ion 402

    const list = prompt("List Food :\n - Bread [30] \n - Chocolate [32]\n\n List Drink :\n - Mineral Water [40]\n - Mineral Ion[42]\n\n What are you choose ? ")
    parseInt(list)
    let money = prompt("your money = ")

    // Percabangan ketika customer memilih salah item dan memberikan ouput total harga
    switch (list) {
        case "Bread" || "bread":
            alert("You choose bread. price bread : 30");
            alert("now your money is " + (money - 30));
            break;
        case "Chocolate" || "chocolate":
            alert("You choose chocolate. price chocolate : 32")
            alert("now your money is " + (money - 32))
            break;
        case "Mineral water" || "mineral water":
            alert("You choose mineral water. price mineral water : 40")
            alert("now your money is " + (money - 40))
            break;
        case "Mineral Ion" || "mineral ion":
            alert("You choose ion. price mineral water : 42")
            alert("now your money is " + (money - 42))
            break;

    }

}