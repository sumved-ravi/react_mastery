import type { State, Action } from "./types"


  const isValidDecimal = (value: string) => 
      /^\d*\.?\d*$/.test(value);
  
  const formatTo2Decimals = (value: string) => {
      if (value === "") return "";
      if (value.at(-1) === ".") return value;

      return String(
          Math.trunc(Number(value) * 100) / 100 
      );
  };


export const initialState: State = {
    billAmount: "",
    tip: "20",
    numPeople: 1,
    errors: {}
  };
  

export function reducer(state: State, action: Action): State {
    switch (action.type) {
      case "SET_BILL": {
        let error = undefined;
        let billAmount = "";

        if (action.value === "") {
          console.log('error1')
          error = "Bill amount is required";
        } else if (!isValidDecimal(action.value)) {
          console.log('error2')
          error = "Bill must be a valid number";
        } else if (Number(action.value) <= 0) {
          console.log('error3')
          error = "Bill must be greater than 0";
        } else{
          console.log('error4')
          billAmount = formatTo2Decimals(action.value);
        }

        return {
          ...state,
          billAmount,
          errors: {
            ...state.errors,
            billAmount: error,
          }
        }
      }

      case "SET_TIP": {
        let error = undefined

        if (action.value === "") {
          error = "Tip amount is required";
        } else if (!isValidDecimal(action.value)) {
          error = "Tip must be a valid number";
        } else if (Number(action.value) < 0) {
          error = "Tip must be 0 or more";
        }

        return {
          ...state,
          tip: action.value,
          errors: {
            ...state.errors,
            tip: error
          }
        }
      }

      case "INCREMENT_NUM_PEOPLE": {
        return {
          ...state,
          numPeople: state.numPeople + 1
        }
      }

      case "DECREMENT_NUM_PEOPLE": {
        return {
          ...state,
          numPeople: Math.max(1, state.numPeople - 1)
        }
      }

      case "RESET": {
        return initialState;
      }

      default:
        return state;

    }
  }

