import React from "react";
import {
  getRowNutritionalVal,
  update_Fett_prepared,
  updateBrennwertPrepared,
  updateRmFettPrepared,
  update_rm_davon_prepared,
  update_rm_Kohlenhydrate_prepared,
  update_rm_Zucker_prepared,
  update_rm_Elweiß_prepared,
  update_rm_Salz_prepared,
  update_rm_Brennwert_prepared,
} from "../../../../Services/function";
import { useSelector } from "react-redux";
import { padding } from "@mui/system";
const NutritionalTable = ({
  recipe,
  ReferenzmengeTableCheckbox,
  AnableTableCheckValue,
  unit,
}) => {
  //  const { recipeItems, totalWeight, nutritionalType, reductionFactor } = recipe;
  const { prepared_raw_value } = useSelector((state) => state.Preview);
  const { portionRef } = useSelector((state) => state.Preview);
  const { RecipeDetails } = useSelector((state) => state.totalRecipe);

  const nutritionalValues = getRowNutritionalVal(
    recipe.recipeItems,
    recipe.totalWeight,
    recipe.nutritionalType,
    recipe.reductionFactor
  );

  function cleanIntegerInFormat(number) {
    let formattedNumber = number.toFixed(1); // Fix the number to one decimal place
    formattedNumber = formattedNumber.replace(".", ","); // Replace the decimal point with a comma
    return formattedNumber;
  }
  let totalWeight = RecipeDetails["total-weight"];
  let reductionFactor = RecipeDetails["reduction-factor"];
  reductionFactor = reductionFactor ? reductionFactor : 1;
  let portionsCount = RecipeDetails["portions-count"];

  let Produktionsmenge_input = (totalWeight * reductionFactor) / portionsCount;
  Produktionsmenge_input = cleanIntegerInFormat(Produktionsmenge_input); // Replace with the appropriate JavaScript function
  let Produktionsmenge_inputDe = Produktionsmenge_input.replace(".", ",");
  const unitValue = unit ? unit : "g";
  const portionValue = Produktionsmenge_inputDe;

  const BrennwertValue = ` ${nutritionalValues.energy_kj} kJ / ${nutritionalValues.energy_kcal}
kcal`;
  // const FattValue = nutritionalValues.fat_gram;

  const recipe1 = {
    recipeItems: RecipeDetails["recipe-items"],
    totalWeight: RecipeDetails["total-weight"],
    reductionFactor: RecipeDetails["reduction-factor"],
    nutritionalType: "raw",
    // nutritionalType:'raw'
  };
  const nutritionalRawValue = getRowNutritionalVal(
    recipe1.recipeItems,
    recipe1.totalWeight,
    recipe1.nutritionalType,
    recipe1.reductionFactor
  );
  return (
      <table className="table table-bordered  w-100   ">
        <tbody>
          <tr style={{ fontSize: "10px" }}>
            <td >Durchschnittliche Nährwerte</td>
            <td>pro 100{unitValue}</td>
            {AnableTableCheckValue == true && (
              <td >pro (1264290,0{unitValue})</td>
            )}
            {ReferenzmengeTableCheckbox == true && (
              <td >% RM pro</td>
            )}
          </tr>
          <tr style={{ fontSize: "10px" }}>
            <td >Brennwert</td>
            <td >{BrennwertValue}</td>
            {AnableTableCheckValue == true && (
              <td >
                {updateBrennwertPrepared(BrennwertValue, portionValue)}
              </td>
            )}
            {ReferenzmengeTableCheckbox == true && (
              <td >
                {AnableTableCheckValue == true
                  ? update_rm_Brennwert_prepared(
                      updateBrennwertPrepared(BrennwertValue, portionValue)
                    )
                  : update_rm_Brennwert_prepared(BrennwertValue)}
              </td>
            )}
          </tr>
          <tr style={{ fontSize: "10px" }}>
            <td >Fett</td>
            <td >
              {nutritionalValues.fat_gram} {unitValue}
            </td>
            {AnableTableCheckValue == true && (
              <td >
                {" "}
                {update_Fett_prepared(
                  nutritionalValues.fat_gram,
                  portionValue,
                  unitValue
                )}
              </td>
            )}
            {ReferenzmengeTableCheckbox == true && (
              <td>
                {AnableTableCheckValue == true
                  ? updateRmFettPrepared(
                      update_Fett_prepared(
                        nutritionalValues.fat_gram,
                        portionValue,
                        unitValue
                      )
                    )
                  : updateRmFettPrepared(nutritionalRawValue.fat_gram)}
              </td>
            )}
          </tr>
          <tr style={{ fontSize: "10px" }}>
            <td >davon gesättigte Fettsäuren</td>
            <td>
              {nutritionalValues.sat_fat_gram} {unitValue}
            </td>

            {AnableTableCheckValue == true && (
              <td >
                {update_Fett_prepared(
                  nutritionalValues.sat_fat_gram,
                  portionValue,
                  unitValue
                )}
              </td>
            )}
            {ReferenzmengeTableCheckbox == true && (
              <td >
                {AnableTableCheckValue == true
                  ? update_rm_davon_prepared(
                      update_Fett_prepared(
                        nutritionalValues.sat_fat_gram,
                        portionValue,
                        unitValue
                      )
                    )
                  : update_rm_davon_prepared(nutritionalRawValue.sat_fat_gram)}
              </td>
            )}
          </tr>
          <tr style={{ fontSize: "10px" }}>
            <td >dKohlenhydrate</td>
            <td>
              {nutritionalValues.carbs_gram} {unitValue}
            </td>

            {AnableTableCheckValue == true && (
              <td >
                {update_Fett_prepared(
                  nutritionalValues.carbs_gram,
                  portionValue,
                  unitValue
                )}
              </td>
            )}
            {ReferenzmengeTableCheckbox == true && (
              <td >
                {" "}
                {AnableTableCheckValue == true
                  ? update_rm_Kohlenhydrate_prepared(
                      update_Fett_prepared(
                        nutritionalValues.carbs_gram,
                        portionValue,
                        unitValue
                      )
                    )
                  : update_rm_Kohlenhydrate_prepared(
                      nutritionalRawValue.carbs_gram
                    )}
              </td>
            )}
          </tr>
          <tr style={{ fontSize: "10px" }}>
            <td >davon Zucker</td>
            <td >
              {nutritionalValues.sugar_gram} {unitValue}
            </td>

            {AnableTableCheckValue == true && (
              <td >
                {update_Fett_prepared(
                  nutritionalValues.sugar_gram,
                  portionValue,
                  unitValue
                )}
              </td>
            )}
            {ReferenzmengeTableCheckbox == true && (
              <td >
                {AnableTableCheckValue == true
                  ? update_rm_Zucker_prepared(
                      update_Fett_prepared(
                        nutritionalValues.sugar_gram,
                        portionValue,
                        unitValue
                      )
                    )
                  : update_rm_Zucker_prepared(nutritionalRawValue.sugar_gram)}
              </td>
            )}
          </tr>
          <tr style={{ fontSize: "10px" }}>
            <td >Eiweiß</td>
            <td>
              {nutritionalValues.protein_gram} {unitValue}
            </td>

            {AnableTableCheckValue == true && (
              <td>
                {update_Fett_prepared(
                  nutritionalValues.protein_gram,
                  portionValue,
                  unitValue
                )}{" "}
              </td>
            )}
            {ReferenzmengeTableCheckbox == true && (
              <td >
                {AnableTableCheckValue == true
                  ? update_rm_Elweiß_prepared(
                      update_Fett_prepared(
                        nutritionalValues.protein_gram,
                        portionValue,
                        unitValue
                      )
                    )
                  : update_rm_Elweiß_prepared(nutritionalRawValue.protein_gram)}
              </td>
            )}
          </tr>
          <tr style={{ fontSize: "10px" }}>
            <td >Salz</td>
            <td >
              {nutritionalValues.salt_gram} {unitValue}
            </td>
            {AnableTableCheckValue == true && (
              <td style={{ padding: "4px" }}>
                {update_Fett_prepared(
                  nutritionalValues.salt_gram,
                  portionValue,
                  unitValue
                )}{" "}
              </td>
            )}
            {ReferenzmengeTableCheckbox == true && (
              <td >
                {AnableTableCheckValue == true
                  ? update_rm_Salz_prepared(
                      update_Fett_prepared(
                        nutritionalValues.salt_gram,
                        portionValue,
                        unitValue
                      )
                    )
                  : update_rm_Salz_prepared(nutritionalRawValue.salt_gram)}
              </td>
            )}
          </tr>
        </tbody>
      </table>
  );
};

export default NutritionalTable;
