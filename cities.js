const arizonaCities = [
  "Pine", "Pinedale", "Pinetop", "Prescott", "Prescott Valley",
  "Queen Creek", "Rimrock", "Rio Rico", "Rio Verde", "Sacaton",
  "Safford", "Sahuarita", "Saint David", "Saint Michaels", "San Tan Valley",
  "Scottsdale", "Sedona", "Sells", "Show Low", "Sierra Vista",
  "Snowflake", "Sonoita", "Sun City", "Sun City West", "Surprise",
  "Tempe", "Thatcher", "Tolleson", "Tonopah", "Tuba City",
  "Tubac", "Tucson", "Vail", "Waddell", "Wellton",
  "Whiteriver", "Wickenburg", "Wikieup", "Willcox", "Williams",
  "Window Rock", "Winslow", "Wittmann", "Yarnell", "Youngtown",
  "Yuma",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < arizonaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(arizonaCities[i]);
}

module.exports = { batches };
