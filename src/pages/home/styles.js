import { Field, Form } from "formik";
import { styled } from "styled-components";

export const FormWrapper = styled.div``;

export const FormickForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  padding-top: 40px;
  gap: 30px;
  padding-bottom: 40px;
`;

export const FieldForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled(Field)`
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  margin-top: 10px;
  background: transparent;
`;

export const CheckBoxField = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
// export const FileFieldButton = styled.input`
//   border-radius: 20px;
//   border: none;
//   padding: 15px;
//   transition: all 0.3s;
//   &:hover {
//     cursor: pointer;
//     color: white;
//     background: black;
//   }
// `;

export const SubmitButton = styled.button`
  border-radius: 20px;
  border: none;
  padding: 15px;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    color: white;
    background: black;
    transform: scale(1.1)
  }
`;
export const FileInputContainer = styled.div`
  position: relative;
  display: inline-block;
`;
export const CustomFieldButton = styled.label`
  border-radius: 20px;
  border: none;
  padding: 7px 20px;
  transition: all 0.3s;
  background: rgba(211, 211, 211, 0.5);
  &:hover {
    cursor: pointer;
    color: white;
    background: black;
  }
`;

export const HiddenFileInput = styled.input.attrs({ type: "file" })`
    display: none;
`;
