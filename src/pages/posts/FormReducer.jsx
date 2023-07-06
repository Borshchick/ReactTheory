const initialState = {
  inputs: {
    name: "",
    theme: "",
    description: "",
  },
  errors: {
    name: "",
    theme: "",
    description: "",
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_INPUT_VALUE":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.payload.inputName]: action.payload.value,
        },
      };
    case "VALIDATE_FORM":
      const errors = {};
      if (state.inputs.name === "") {
        errors.name = "Required";
      }

      if (state.inputs.theme === "") {
        errors.theme = "Required";
      }
      if (state.inputs.description === "") {
        errors.description = "Required";
      }

      return {
        ...state,
        errors,
      };
    default:
      return state;
  }
};

export default formReducer;
