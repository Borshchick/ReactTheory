export const saveInputValue = (inputName, value) => ({
    type: 'SAVE_INPUT_VALUE',
    payload: {inputName, value}
})

export const validateForm =() => ({
    type: 'VALIDATE_FORM'
})

// export const SAVE_INPUT_VALUE = 'SAVE_INPUT_VALUE';
// export const VALIDATE_FORM = 'VALIDATE_FORM';

// export const saveInputValue = (inputName, value) => ({
//   type: SAVE_INPUT_VALUE,
//   payload: { inputName, value }
// });

// export const validateForm = () => ({
//   type: VALIDATE_FORM
// });
