// Output & Dialog
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}

// Function & Aritmetika
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}
operasiDasar(9, 4);

// Seleksi Kondisi Nilai & Switch (Contoh Sesuai Modul)
const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);
if (inputNilai === null || inputNilai.trim() === "" || Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    console.log("Input nilai awal tidak valid.");
} else if (nilaiMahasiswa >= 60) {
    console.log("Status Awal: Lulus");
} else {
    console.log("Status Awal: Belum lulus");
}

const inputPilihan = prompt("Masukkan angka 1–5 (Contoh Switch):");
switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: console.log("Pilihan tidak tersedia");
}

// Cek Genap / Ganjil
function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}

// Ubah Warna Latar
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

// Checkbox Menu Makanan
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) total += Number(item.value);
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// Kalkulator Nilai Mahasiswa
function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function prosesKalkulator() {
    const inputTugas = document.getElementById("nilaiTugas").value;
    const inputUTS = document.getElementById("nilaiUTS").value;
    const inputUAS = document.getElementById("nilaiUAS").value;
    const divHasil = document.getElementById("hasilKalkulator");

    if (inputTugas.trim() === "" || inputUTS.trim() === "" || inputUAS.trim() === "") {
        divHasil.innerHTML = "<p style='color: red;'>Harap isi semua kolom nilai!</p>";
        return;
    }

    const tugas = Number(inputTugas);
    const uts = Number(inputUTS);
    const uas = Number(inputUAS);

    if (
        isNaN(tugas) || tugas < 0 || tugas > 100 ||
        isNaN(uts) || uts < 0 || uts > 100 ||
        isNaN(uas) || uas < 0 || uas > 100
    ) {
        divHasil.innerHTML = "<p style='color: red;'>Setiap nilai harus berada pada rentang 0 - 100!</p>";
        return;
    }

    const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(nilaiAkhir);
    const status = nilaiAkhir >= 60 ? "Lulus" : "Belum Lulus";

    divHasil.innerHTML = `
        <h4>Hasil Perhitungan:</h4>
        <p><strong>Nilai Akhir:</strong> ${nilaiAkhir.toFixed(2)}</p>
        <p><strong>Predikat:</strong> ${predikat}</p>
        <p><strong>Status:</strong> ${status}</p>
    `;
}

// Eksperimen Mandiri: Tabel Perkalian Angka 7
function tampilkanPerkalian() {
    const listPerkalian = document.getElementById("tabelPerkalian");
    if (listPerkalian) {
        for (let i = 1; i <= 10; i++) {
            const li = document.createElement("li");
            li.textContent = `7 x ${i} = ${7 * i}`;
            listPerkalian.appendChild(li);
        }
    }
}
tampilkanPerkalian();