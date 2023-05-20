import React from "react";
import {
  getRowNutritionalVal,
  update_Fett_prepared,
  updateBrennwertPrepared,
} from "../../../../Services/function";
import { useSelector } from "react-redux";
const NutritionalTable = ({
  recipe,
  ReferenzmengeTableCheckbox,
  AnableTableCheckValue,
}) => {
  //  const { recipeItems, totalWeight, nutritionalType, reductionFactor } = recipe;
  const { prepared_raw_value } = useSelector((state) => state.Preview);
  const { portionRef } = useSelector((state) => state.Preview);
  const nutritionalType = prepared_raw_value ? prepared_raw_value : "raw";
  const nutritionalValues = getRowNutritionalVal(
    recipe.recipeItems,
    recipe.totalWeight,
    recipe.nutritionalType,
    recipe.reductionFactor
  );
const unit= "g";
const portionValue = '721620,0';

const BrennwertValue = ` ${nutritionalValues.energy_kj} kJ / ${nutritionalValues.energy_kcal}
kcal`
  return (
    <table>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>Durchschnittliche Nährwerte</td>
            <td>pro 100ml</td>
            {AnableTableCheckValue == true && <td>pro (1264290,0ml)</td>}
            {ReferenzmengeTableCheckbox == true && <td>% RM pro</td>}
          </tr>
          <tr>
            <td>Brennwert</td>
            <td>
              {BrennwertValue}
            </td>
            {AnableTableCheckValue == true && <td>{updateBrennwertPrepared(BrennwertValue, portionValue)}</td>}
            {ReferenzmengeTableCheckbox == true && <td>28826 %</td>}
          </tr>
          <tr>
            <td>Fett</td>
            <td>{nutritionalValues.fat_gram} g</td>
            {AnableTableCheckValue == true && (
              <td>
                {" "}
                {update_Fett_prepared(
                  nutritionalValues.fat_gram,
                  portionValue,
                  unit
                )}
              </td>
            )}
            {ReferenzmengeTableCheckbox == true && <td>37929 %</td>}
          </tr>
          <tr>
            <td>davon gesättigte Fettsäuren</td>
            <td>{nutritionalValues.sat_fat_gram} g</td>

            {AnableTableCheckValue == true && <td>{update_Fett_prepared(
                  nutritionalValues.sat_fat_gram,
                  portionValue,
                  unit
                )}</td>}
            {ReferenzmengeTableCheckbox == true && <td> 44250 %</td>}
          </tr>
          <tr>
            <td>dKohlenhydrate</td>
            <td>{nutritionalValues.carbs_gram} g</td>

            {AnableTableCheckValue == true && <td>{update_Fett_prepared(
                  nutritionalValues.carbs_gram,
                  portionValue,
                  unit
                )}</td>}
            {ReferenzmengeTableCheckbox == true && <td> 19451 %</td>}
          </tr>
          <tr>
            <td>davon Zucker</td>
            <td>{nutritionalValues.sugar_gram} g</td>

            {AnableTableCheckValue == true && <td>{update_Fett_prepared(
                  nutritionalValues.sugar_gram,
                  portionValue,
                  unit
                )}</td>}
            {ReferenzmengeTableCheckbox == true && <td> 5619 %</td>}
          </tr>
          <tr>
            <td>Eiweiß</td>
            <td>{nutritionalValues.protein_gram} g</td>

            {AnableTableCheckValue == true && <td>{update_Fett_prepared(
                  nutritionalValues.protein_gram,
                  portionValue,
                  unit
                )} </td>}
            {ReferenzmengeTableCheckbox == true && <td> %</td>}
          </tr>
          <tr>
            <td>Salz</td>
            <td>{nutritionalValues.salt_gram} g</td>
            {AnableTableCheckValue == true && <td>{update_Fett_prepared(
                  nutritionalValues.salt_gram,
                  portionValue,
                  unit
                )} </td>}
            {ReferenzmengeTableCheckbox == true && <td> 21072 %</td>}
          </tr>
        </tbody>
      </table>
    </table>
  );
};

export default NutritionalTable;
