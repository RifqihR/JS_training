//dalam javascript sudah ada built-in class (seperti library), misal Date, Object, Array, Math, dan String. dapat digunakan untuk memanipulasi data
//#1 tanpa parameter, berisi tanggal dan waktu saat ini
const myDate = new Date();

//# dengan bentuk string, "januari 01, 2021"
const yoursdate = new Date(dateString);

// #3 parameter dalam bentuk number, misal 87400000
const herDate = new Date(miliseconds); 
 
// #4 parameter tanggal dalam bentuk number (7 parameter), [hour,minute,second,millisecond] bersifat opsional
const hisDate = new Date(year,month,date,hour,minute,second,millisecond);

//terdapat beberapa cara penggunaan Date. bisa dilihat di internet
//contoh penggunaan

const myAge = birthday => {
    const birtday = new Date(birthday);
    const today = Date.now(); // today menghasilkan nilai miliseconds saat ini
    
    const diff_ms = today - birtday.getTime(); // menghitung selisih nilai miliseconds hari ini dan tanggal lahir
    const diffDate = new Date(diff_ms);
    
    return diffDate.getFullYear() - 1970; // 1970 adalah representasi 0 dari miliseconds
  };
  
  console.log(myAge('2000-01-22')); // 21 tahun