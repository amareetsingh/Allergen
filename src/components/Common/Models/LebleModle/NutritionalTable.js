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
import { padding } from '@mui/system';
const NutritionalTable = ({
  recipe,
  ReferenzmengeTableCheckbox,
  AnableTableCheckValue,
  unit
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
    recipeItems:RecipeDetails["recipe-items"], 
    totalWeight: RecipeDetails["total-weight"],
    reductionFactor:RecipeDetails["reduction-factor"],
    nutritionalType:'raw'
    // nutritionalType:'raw'
  };
  const nutritionalRawValue = getRowNutritionalVal(
    recipe1.recipeItems,
    recipe1.totalWeight,
    recipe1.nutritionalType,
    recipe1.reductionFactor
  )
  return (
    <table>
      <table className="table table-bordered    ">
        <tbody>
          <tr style={{fontSize:'10px'}} >
            <td style={{padding:'4px'}} >Durchschnittliche Nährwerte</td>
            <td  style={{padding:'4px'}} >pro 100{unitValue}</td>
            {AnableTableCheckValue == true && <td style={{padding:'4px'}} >pro (1264290,0{unitValue})</td>}
            {ReferenzmengeTableCheckbox == true && <td style={{padding:'4px'}} >% RM pro</td>}
          </tr>
          <tr style={{fontSize:'10px'}}  >
            <td style={{padding:'4px'}} >Brennwert</td>
            <td style={{padding:'4px'}} >{BrennwertValue}</td>
            {AnableTableCheckValue == true && (
              <td style={{padding:'4px'}}  >{updateBrennwertPrepared(BrennwertValue, portionValue)}</td>
            )}
            {ReferenzmengeTableCheckbox == true && (
              <td style={{padding:'4px'}} >
                {AnableTableCheckValue == true
                  ? update_rm_Brennwert_prepared(
                      updateBrennwertPrepared(BrennwertValue, portionValue)
                    )
                  : update_rm_Brennwert_prepared(BrennwertValue)}
              </td>
            )}
          </tr>
          <tr style={{fontSize:'10px'}}  >
            <td style={{padding:'4px'}} >Fett</td>
            <td  style={{padding:'4px'}} >{nutritionalValues.fat_gram} {unitValue}</td>
            {AnableTableCheckValue == true && (
              <td style={{padding:'4px'}} >
                {" "}
                {update_Fett_prepared(
                  nutritionalValues.fat_gram,
                  portionValue,
                  unitValue
                )}
              </td>
            )}
            {ReferenzmengeTableCheckbox == true && (
              <td style={{padding:'4px'}} >
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
          <tr style={{fontSize:'10px'}}  >
            <td style={{padding:'4px'}} >davon gesättigte Fettsäuren</td>
            <td style={{padding:'4px'}} >{nutritionalValues.sat_fat_gram} {unitValue}</td>

            {AnableTableCheckValue == true && (
              <td style={{padding:'4px'}} >
                {update_Fett_prepared(
                  nutritionalValues.sat_fat_gram,
                  portionValue,
                  unitValue
                )}
              </td>
            )}
            {ReferenzmengeTableCheckbox == true && (
              <td style={{padding:'4px'}} >
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
          <tr style={{fontSize:'10px'}}  >
            <td style={{padding:'4px'}} >dKohlenhydrate</td>
            <td style={{padding:'4px'}} >{nutritionalValues.carbs_gram} {unitValue}</td>

            {AnableTableCheckValue == true && (
              <td style={{padding:'4px'}} >
                {update_Fett_prepared(
                  nutritionalValues.carbs_gram,
                  portionValue,
                  unitValue
                )}
              </td>
            )}
            {ReferenzmengeTableCheckbox == true && (
              <td style={{padding:'4px'}} >
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
          <tr style={{fontSize:'10px'}}  >
            <td style={{padding:'4px'}} >davon Zucker</td>
            <td style={{padding:'4px'}} >{nutritionalValues.sugar_gram} {unitValue}</td>

            {AnableTableCheckValue == true && (
              <td style={{padding:'4px'}} >
                {update_Fett_prepared(
                  nutritionalValues.sugar_gram,
                  portionValue,
                  unitValue
                )}
              </td>
            )}
            {ReferenzmengeTableCheckbox == true && (
              <td style={{padding:'4px'}} >
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
          <tr style={{fontSize:'10px'}} >
            <td style={{padding:'4px'}} >Eiweiß</td>
            <td style={{padding:'4px'}} >{nutritionalValues.protein_gram} {unitValue}</td>

            {AnableTableCheckValue == true && (
              <td style={{padding:'4px'}} >
                {update_Fett_prepared(
                  nutritionalValues.protein_gram,
                  portionValue,
                  unitValue
                )}{" "}
              </td>
            )}
            {ReferenzmengeTableCheckbox == true && (
              <td style={{padding:'4px'}} >
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
          <tr style={{fontSize:'10px',}}  >
            <td style={{padding:'4px'}}  >Salz</td>
            <td style={{padding:'4px'}} >{nutritionalValues.salt_gram} {unitValue}</td>
            {AnableTableCheckValue == true && (
              <td style={{padding:'4px'}} >
                {update_Fett_prepared(
                  nutritionalValues.salt_gram,
                  portionValue,
                  unitValue
                )}{" "}
              </td>
            )}
            {ReferenzmengeTableCheckbox == true && (
              <td style={{padding:'4px'}} >
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
    </table>
  );
};

export default NutritionalTable;
