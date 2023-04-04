
let burc;

function burcBul() {

    const gun = Number(document.getElementById("gun").value);
    const ay = document.getElementById("ay").value;

    if (gun >= 20 && ay == 1 || gun <= 18 && ay == 2) {
        burc = "kova";

    } else if (gun >= 19 && ay == 2 || gun <= 20 && ay == 3) {
        burc = "balik";

    } else if (gun >= 21 && ay == 3 || gun <= 20 && ay == 4) {
        burc = "koc";

    } else if (gun >= 21 && ay == 4 || gun <= 20 && ay == 5) {
        burc = "boga";

    } else if (gun >= 21 && ay == 5 || gun <= 20 && ay == 6) {
        burc = "ikizler";

    } else if (gun >= 21 && ay == 6 || gun <= 20 && ay == 7) {
        burc = "yengec";

    } else if (gun >= 23 && ay == 7 || gun <= 22 && ay == 8) {
        burc = "aslan";

    } else if (gun >= 23 && ay == 8 || gun <= 22 && ay == 9) {
        burc = "basak";

    } else if (gun >= 23 && ay == 9 || gun <= 22 && ay == 10) {
        burc = "terazi";

    } else if (gun >= 23 && ay == 10 || gun <= 22 && ay == 11) {
        burc = "akrep";

    } else if (gun >= 23 && ay == 11 || gun <= 21 && ay == 12) {
        burc = "yay";

    } else {
        burc = "Gecersiz";
    }

    if (burc !== "Gecersiz") {
        alert("Burcunuz: " + burc);

    } else {
        alert("Gecersiz Tarih Girdiniz.");
    }
}
