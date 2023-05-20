import * as Actions from "../actions/actionTypes/Preview";

const intialState = {
  Recipe_name: "",
  Kurze_bescheribung: "",
  Beilagen: "",
  MindestensSelect: "",
  Zu_input_value: {},
  Netto_value: {},
  Netto_full_value: {},
  Abtropfgewicht_value:{},
  Fullgewicht_Value:{},
  fischanggebiet_value:{},
  Herkunfit_value:{},
  Chargen_number_value:{},
  PreisValue:{},
  PriesProValue:{},
  prepared_raw_value:"",
  portionRef:''
};

const Preview = function (state = intialState, action) {
  switch (action.type) {
    case Actions.RECIPE_NAME: {
      return {
        ...state,
        Recipe_name: action.payload,
      };
    }
    case Actions.KURZE_BESCHERIBUNG: {
      return {
        ...state,
        Kurze_bescheribung: action.payload,
      };
    }
    case Actions.BEILAGEN_ACTION: {
      return {
        ...state,
        Beilagen: action.payload,
      };
    }
    case Actions.MINDESTENS_AND_ZU_SELECT_BOX: {
      return {
        ...state,
        MindestensSelect: action.payload,
      };
    }
    case Actions.MINDESTENS_AND_ZU_GET_INPUT_VALUE: {
      return {
        ...state,
        Zu_input_value: action.payload,
      };
    }
    case Actions.SET_NETTO_GEWICHT: {
      return {
        ...state,
        Netto_value: action.payload,
      };
    }

    case Actions.SET_NETTO_FULLMENGE: {
      return {
        ...state,
        Netto_full_value: action.payload,
      };
    }
    case Actions.SET_ABSTROPFGWICHT: {
      return {
        ...state,
        Abtropfgewicht_value: action.payload,
      };
    }
    case Actions.SET_FULLGEWICHT: {
      return {
        ...state,
        Fullgewicht_Value: action.payload,
      };
    }
    case Actions.SET_FISCHANGGEBIET: {
      return {
        ...state,
        fischanggebiet_value: action.payload,
      };
    }
    case Actions.SET_HERKUNFIT: {
      return {
        ...state,
        Herkunfit_value: action.payload,
      };
    }
    case Actions.SET_CHARGEN_NUMBER: {
      return {
        ...state,
        Chargen_number_value: action.payload,
      };
    }
    case Actions.SET_PREIS_VALUE: {
      return {
        ...state,
        PreisValue: action.payload,
      };
    }
    case Actions.SET_PREIS_PRO_VALUE: {
      return {
        ...state,
        PriesProValue: action.payload,
      };
    }
    case Actions.SET_RAW_PREPARED: {
      return {
        ...state,
        prepared_raw_value: action.payload,
      };
    }
    case Actions.SET_PORTIONSERF: {
      return {
        ...state,
        portionRef: action.payload,
      };
    }

    default:
      return state;
  }
};

export default Preview;
