//1. Time out
//line yang ada didalam setTimeour() akan didelay untuk 3000 ms atau sesuai angka yang dimasukkan dan langsung
//diteruskna pada line berikutnya tanpa menunggu timeout selesai

console.log("Selamat datang!");

setTimeout(() => {
  console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);

console.log("Ada yang bisa dibantu?");