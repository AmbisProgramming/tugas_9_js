var pesawat = {
  type: "Boing77",
  bahan_bakar: "Aftur",
  harga: 143_000_000_000,
};

console.log(pesawat.type);
console.log(pesawat.bahan_bakar);
console.log(pesawat.harga);

for (let p in pesawat) {
  console.log(pesawat[p]);
}
