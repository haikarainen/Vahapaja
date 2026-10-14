/* Vahapaja Ski Shop: sijainti Google Mapsissa. Tämä tiedosto on erillinen, jotta config.js:ää ei tarvitse muuttaa.
   Täytä vähintään "query". Ilman sitä karttaa ei näytetä. */
window.VAHAPAJA_PLACE = {
  /* Mitä Google Maps hakee: yrityksen nimi ja osoite, esim. "vahapaja, Esimerkkikatu 1, Espoo" */
  query: "",
  /* Valinnainen: Place ID (sama kuin reviews.js:ssä), tarkentaa pinnin */
  placeId: "",
  /* Valinnainen: oma Maps-linkki (Maps → Jaa → Kopioi linkki), jos haluat sen napin osoitteeksi */
  mapsUrl: "",
  /* Valinnainen: ohje perille, esim. "Autotallin ovi pihan puolella, soita kun olet perillä." */
  note: ""
};
