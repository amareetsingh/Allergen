export function convertDate(dateTime, formatType = 0) {
  let monthName = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date = new Date(dateTime);

  if (formatType === 0) {
    return (
      date.getDate() +
      " " +
      monthName[date.getMonth()] +
      " " +
      date.getFullYear()
    );
  } else {
    return (
      date.getFullYear() +
      "-" +
      ("0" + [date.getMonth() + 1]).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2)
    );
  }
}

export function getDateInDDMMYYYYFormat(dateString) {
  const parts = dateString.split(" ")[0].split("-");
  const day = parts[2];
  const month = parts[1];
  const year = parts[0];
  return `${day}-${month}-${year}`;
}

// row and prepared vlaue

function customNumberFormatter(numberStr) {
  const formattedNumberStr = numberStr && numberStr.replace(",", ".");
  return parseFloat(formattedNumberStr);
}
export const getRowNutritionalVal = (
  recipeItems,
  totalWeight,
  nutritionalType,
  reductionFactor = 1
) => {
  if (reductionFactor === "" || reductionFactor === 0) {
    reductionFactor = 1;
  }

  const nutritionalValArr = {
    energy_kcal: 0.0,
    energy_kj: 0.0,
    fat_gram: 0.0,
    sat_fat_gram: 0.0,
    carbs_gram: 0.0,
    sugar_gram: 0.0,
    protein_gram: 0.0,
    salt_gram: 0.0,
  };

  const totalWeightRaw = totalWeight;
  const totalWeightPrepared = totalWeight * reductionFactor;

  recipeItems &&
    recipeItems.forEach((recipeItem) => {
      const nutriValues = recipeItem["nutri-values"];
      nutritionalValArr["energy_kcal"] += nutriValues["energy"]["kcal"]
        ? customNumberFormatter(nutriValues["energy"]["kcal"])
        : 0.0;
      nutritionalValArr["energy_kj"] += nutriValues["energy"]["kj"]
        ? customNumberFormatter(nutriValues["energy"]["kj"])
        : 0.0;
      nutritionalValArr["carbs_gram"] += nutriValues["carbs"]["gramm"]
        ? customNumberFormatter(nutriValues["carbs"]["gramm"])
        : 0.0;
      nutritionalValArr["protein_gram"] += nutriValues["protein"]["gramm"]
        ? customNumberFormatter(nutriValues["protein"]["gramm"])
        : 0.0;
      nutritionalValArr["fat_gram"] += nutriValues["fat"]["gramm"]
        ? customNumberFormatter(nutriValues["fat"]["gramm"])
        : 0.0;

      nutritionalValArr["sugar_gram"] += nutriValues["sugar-gram"]
        ? customNumberFormatter(nutriValues["sugar-gram"])
        : 0.0;
      nutritionalValArr["salt_gram"] += nutriValues["salt-gram"]
        ? customNumberFormatter(nutriValues["salt-gram"])
        : 0.0;
      nutritionalValArr["sat_fat_gram"] += nutriValues["sat-fat-gram"]
        ? customNumberFormatter(nutriValues["sat-fat-gram"])
        : 0.0;
    });

  if (nutritionalType === "raw") {
    nutritionalValArr["energy_kcal"] = parseFloat(
      ((nutritionalValArr["energy_kcal"] / totalWeightRaw) * 100).toFixed(1)
    );
    nutritionalValArr["energy_kj"] = parseFloat(
      ((nutritionalValArr["energy_kj"] / totalWeightRaw) * 100).toFixed(1)
    );
    nutritionalValArr["carbs_gram"] = parseFloat(
      ((nutritionalValArr["carbs_gram"] / totalWeightRaw) * 100).toFixed(1)
    );
    nutritionalValArr["protein_gram"] = parseFloat(
      ((nutritionalValArr["protein_gram"] / totalWeightRaw) * 100).toFixed(1)
    );
    nutritionalValArr["fat_gram"] = parseFloat(
      ((nutritionalValArr["fat_gram"] / totalWeightRaw) * 100).toFixed(1)
    );
    nutritionalValArr["sugar_gram"] = parseFloat(
      ((nutritionalValArr["sugar_gram"] / totalWeightRaw) * 100).toFixed(1)
    );
    nutritionalValArr["salt_gram"] = parseFloat(
      ((nutritionalValArr["salt_gram"] / totalWeightRaw) * 100).toFixed(1)
    );
    nutritionalValArr["sat_fat_gram"] = parseFloat(
      ((nutritionalValArr["sat_fat_gram"] / totalWeightRaw) * 100).toFixed(1)
    );
  } else if (nutritionalType === "prepared") {
    nutritionalValArr["energy_kcal"] = parseFloat(
      ((nutritionalValArr["energy_kcal"] / totalWeightPrepared) * 100).toFixed(
        1
      )
    );
    nutritionalValArr["energy_kj"] = parseFloat(
      ((nutritionalValArr["energy_kj"] / totalWeightPrepared) * 100).toFixed(1)
    );
    nutritionalValArr["carbs_gram"] = parseFloat(
      ((nutritionalValArr["carbs_gram"] / totalWeightPrepared) * 100).toFixed(1)
    );
    nutritionalValArr["protein_gram"] = parseFloat(
      ((nutritionalValArr["protein_gram"] / totalWeightPrepared) * 100).toFixed(
        1
      )
    );
    nutritionalValArr["fat_gram"] = parseFloat(
      ((nutritionalValArr["fat_gram"] / totalWeightPrepared) * 100).toFixed(1)
    );

    nutritionalValArr["sugar_gram"] = parseFloat(
      ((nutritionalValArr["sugar_gram"] / totalWeightPrepared) * 100).toFixed(1)
    );
    nutritionalValArr["salt_gram"] = parseFloat(
      ((nutritionalValArr["salt_gram"] / totalWeightPrepared) * 100).toFixed(1)
    );
    nutritionalValArr["sat_fat_gram"] = parseFloat(
      ((nutritionalValArr["sat_fat_gram"] / totalWeightPrepared) * 100).toFixed(
        1
      )
    );
  }

  Object.keys(nutritionalValArr).forEach((key) => {
    const value = nutritionalValArr[key];
    const whole = parseInt(value); // 1234
    const decimal = value - whole;

    if (decimal) {
      nutritionalValArr[key] = value.toString().replace(".", ",");
    } else {
      nutritionalValArr[key] = `${value},0`;
    }
  });

  if (nutritionalType === "raw") {
    nutritionalValArr["total_weight"] = parseFloat(totalWeightRaw.toFixed(1))
      .toString()
      .replace(".", ",");
  } else if (nutritionalType === "prepared") {
    nutritionalValArr["total_weight"] = parseFloat(
      totalWeightPrepared.toFixed(1)
    )
      .toString()
      .replace(".", ",");
  }

  return nutritionalValArr;
};

// Prepared function table

function parseValue(value, delimiter) {
  return value.split(delimiter);
}

export const updateBrennwertPrepared = (
  BrennwertValue,
  portionsgrobeElement
) => {
  // const portionsgrobeElement = "926820,0";
  let updatedValue = null;

  if (portionsgrobeElement) {
    // let Brennwert = "212,0 kJ/50,4 kcal";
    let Brennwert = BrennwertValue;

    if (typeof Brennwert !== "undefined") {
      let BrennwertArr = Brennwert.split("/");
      let kcal = parseFloat(parseValue(BrennwertArr[1], ".").join("."));
      let KJ = parseFloat(parseValue(BrennwertArr[0], ".").join("."));
      let Portionsgrobe = parseFloat(portionsgrobeElement.replace(",", "."));
      kcal = ((kcal / 100) * Portionsgrobe).toFixed(1).replace(".", ",");
      KJ = ((KJ / 100) * Portionsgrobe).toFixed(1).replace(".", ",");

      updatedValue = `${KJ} kJ/${kcal} kcal`;
    }
  }
  return updatedValue;
};

export function update_Fett_prepared(Fett, PortionsgrobeElement, unit) {
  // let Fett = "7,2 g";
  // let unit = "g";
  // let PortionsgrobeElement = "926820,0";

  let g = parseFloat(Fett.replace(",", ".").replace(" g", ""));

  Fett = g.toFixed(1).toString().replace(".", ",") + " " + unit;

  let Portionsgrobe = parseFloat(PortionsgrobeElement.replace(",", "."));
  g = ((g / 100) * Portionsgrobe).toFixed(1).replace(".", ",");

  const result = `${g} ${unit}`;
  return result;
}

// update_Fett_prepared()
// function update_davon_prepared() {
//   let davonElement = "0,8 g";
//   let unit = "g";
//   let portionsgrobeElement = "926820,0";

//   let g = parseFloat(davonElement.replace(",", ".").replace(" g", ""));

//   let formattedValue = g.toFixed(1).toString().replace(".", ",") + " " + unit;

//   let portionsgrobe = parseFloat(portionsgrobeElement.replace(",", "."));

//   g = ((g / 100) * portionsgrobe).toFixed(1).replace(".", ",");

//   const result = `${g} ${unit}`;
//   return result;
// }

// const updateKohlenhydratePrepared = (currentRecipeId) => {
//   let unit = "g";
//   let portionsgrobeElement = "926820,0";

//   let Fett = "4,3 g";

//   let g = parseFloat(Fett.replace(",", "."));
//   Fett = g.toFixed(1).toString().replace(".", ",") + " " + unit;

//   let Portionsgrobe = parseFloat(portionsgrobeElement.replace(",", "."));

//   g = ((g / 100) * Portionsgrobe).toFixed(1).replace(".", ",");
//   const result = `${g} ${unit}`;
//   return result;
// };

// const updateZuckerPrepared = () => {
//   let unit = "g";
//   let portionsgrobeElement = "926820,0";

//   let Fett = "0,5 g";

//   let g = parseFloat(Fett.replace(",", "."));
//   Fett = g.toFixed(1).toString().replace(".", ",") + " " + unit;

//   let Portionsgrobe = parseFloat(portionsgrobeElement.replace(",", "."));

//   g = ((g / 100) * Portionsgrobe).toFixed(1).replace(".", ",");
//   const result = `${g} ${unit}`;
//   return result;
// };

// function updateElweißPrepared() {
//   let unit = "g";
//   let portionsgrobeElement = "926820,0";

//   let Fett = "2,8 g";

//   let g = parseFloat(Fett.replace(",", "."));
//   Fett = g.toFixed(1).toString().replace(".", ",") + " " + unit;

//   let Portionsgrobe = parseFloat(portionsgrobeElement.replace(",", "."));

//   g = ((g / 100) * Portionsgrobe).toFixed(1).replace(".", ",");
//   const result = `${g} ${unit}`;
//   return result;
// }
// const UpdateSalzPrepared = () => {
//   let unit = "g";
//   let portionsgrobeElement = "926820,0";

//   let Fett = "0,1g";

//   let g = parseFloat(Fett.replace(",", "."));
//   Fett = g.toFixed(1).toString().replace(".", ",") + " " + unit;

//   let Portionsgrobe = parseFloat(portionsgrobeElement.replace(",", "."));

//   g = ((g / 100) * Portionsgrobe).toFixed(1).replace(".", ",");
//   const result = `${g} ${unit}`;
//   return result;
// };

export function updateRmFettPrepared(value) {
  let Fett = value;
  let g = parseFloat(parseValue(Fett).join("."));
  g = Math.round((g * 100) / 70)
    .toString()
    .replace(",", ".");
  return g + " %";
}

export function update_rm_davon_prepared(value) {
  let Fett = value;
  let g = parseFloat(parseValue(Fett).join("."));
  g = Math.round((g * 100) / 20)
    .toString()
    .replace(",", ".");
  return g + " %";
}

export function update_rm_Kohlenhydrate_prepared(value) {
  let Fett = value;
  let g = parseFloat(parseValue(Fett).join("."));
  g = Math.round((g * 100) / 260)
    .toString()
    .replace(",", ".");
  return g + " %";
}

export function update_rm_Zucker_prepared(value) {
  let Fett = value;
  let g = parseFloat(parseValue(Fett).join("."));
  g = Math.round((g * 100) / 90)
    .toString()
    .replace(",", ".");
  return g + " %";
}

export function update_rm_Elweiß_prepared(value) {
  let Fett = value;
  let g = parseFloat(parseValue(Fett).join("."));
  g = Math.round((g * 100) / 50)
    .toString()
    .replace(",", ".");
  return g + " %";
}

export function update_rm_Salz_prepared(value) {
  let Fett = value;
  let g = parseFloat(parseValue(Fett).join("."));
  g = Math.round((g * 100) / 6)
    .toString()
    .replace(",", ".");
  return g + " %";
}

export function update_rm_Brennwert_prepared(value) {
  let Brennwert = value;

  if (typeof Brennwert != "undefined") {
    let BrennwertArr = Brennwert.split("/");
    //let kcal = parseFloat(parseValue(BrennwertArr[0]).join('.'));
    let kcal = parseFloat(parseValue(BrennwertArr[1]).join("."));

    kcal = Math.round((kcal * 100) / 2000).toString();
    return kcal + " %";
  }
}
