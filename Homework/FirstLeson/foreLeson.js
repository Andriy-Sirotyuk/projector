"use strict"

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
  };
  
  let updatedPriceData = {};
  
  Object.entries(priceData).forEach(([key, value]) => {
    const lowerCaseKey = key.toLowerCase();
    const price = parseFloat(value).toFixed(2);
    updatedPriceData[lowerCaseKey] = price;
  });
  
  console.log(updatedPriceData);
  