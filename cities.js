const arizonaCities = [
  "Alpine", "Apache Junction", "Arivaca", "Arizona City", "Avondale",
  "Bellemont", "Benson", "Bisbee", "Buckeye", "Bullhead City",
  "Bylas", "Camp Verde", "Carefree", "Casa Grande", "Catalina",
  "Cave Creek", "Chandler", "Chino Valley", "Clarkdale", "Clifton",
  "Cochise", "Congress", "Coolidge", "Cornville", "Cottonwood",
  "Dewey", "Douglas", "Eagar", "El Mirage", "Eloy",
  "Flagstaff", "Florence", "Fort Huachuca", "Fort Mohave", "Fountain Hills",
  "Gila Bend", "Gilbert", "Glendale", "Globe", "Gold Canyon",
  "Goodyear", "Grand Canyon", "Green Valley", "Hayden", "Heber",
  "Hereford", "Higley", "Holbrook", "Jerome", "Joseph City",
  "Kingman", "Lake Havasu City", "Lakeside", "Laveen", "Litchfield Park",
  "Lukeville", "Marana", "Maricopa", "Meadview", "Mesa",
  "Miami", "Morenci", "Morristown", "Munds Park", "New River",
  "Nogales", "Oracle", "Overgaard", "Page", "Paradise Valley",
  "Parker", "Parks", "Patagonia", "Paulden", "Payson",
  "Peach Springs", "Peoria", "Phoenix", "Picacho", "Pima",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < arizonaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(arizonaCities[i]);
}

module.exports = { batches };
