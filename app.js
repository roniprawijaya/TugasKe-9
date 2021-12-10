const { index, store, update, destroy } = require('./Controler/FruitControler.js');
const main = () => {
    console.log("\nMethod index-Menampilkan Buah");
    index();
    console.log("\nMethod store-Menambahkan Buah pisang");
    store("pisang");
    index();
    console.log("\nMethod update - data 0 menjadi kelapa");
    update(0, "kelapa");
    index();
    console.log("\nMethod destory - Menghapus data 0");
    destroy(0);
    index();


}
main();