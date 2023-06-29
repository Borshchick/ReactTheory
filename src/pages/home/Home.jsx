import { Formik, Field } from "formik";
import { Wrapper } from "../../components/header/styles";
import {
  CheckBoxField,
  CustomFieldButton,
  FieldForm,
  FileInputContainer,
  FormField,
  FormWrapper,
  FormickForm,
  HiddenFileInput,
  SubmitButton,
} from "./styles";
// import { Formik, Form, Field } from 'formik';
import * as yup from "yup";
import RedErrorMessage from "../../components/ui/error/RedErrorMessage";
import PasswordInput from "../../components/ui/input/password/PasswordInput";
const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('Поле "Ім*я" обов*язкове для заповнення')
    .max(32, "Ім*я повинне містити не більше 32 символів"),
  lastName: yup
    .string()
    .required('Поле "Прізвище" обов*язкове для заповнення')
    .max(32, "Прізвище повинне містити не більше 32 символів"),
  email: yup
    .string()
    .required('Поле "Електронна пошта" обов*язкове для заповнення')
    .email("Некоректний формат електронної пошти")
    .max(32, "Електронна пошта повинна містити не більше 32 символів"),
  password: yup
    .string()
    .required('Поле "Пароль" обов*язкове для заповнення')
    .min(6, "Пароль повинен містити не менше 6 символів")
    .max(32, "Пароль повинен містити не більше 32 символів")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Пароль повинен містити принаймні одну цифру, одну велику та одну малу літеру"
    ),
  number: yup.string().required('Поле "Номер" обов*язкове для заповнення'),
  sex: yup.string().required('Поле "Стать" обов*язкове для заповнення'),
  file: yup
    .mixed()
    .required('Поле "Файл" обов*язкове для заповнення')
    .test("is-file", "Дозволено тільки зображення", (value) => {
      if (!value) return true;
      const supportedFormats = ["image/jpeg", "image/png"];
      return supportedFormats.includes(value.type);
    })
    .test("file-size", "Розмір файлу повинен бути не більше 20МБ", (value) => {
      if (!value) return true;
      return value.size <= 20 * 1024 * 1024; // 20MB
    }),
  checked: yup.boolean().required(),
  license: yup
    .boolean()
    .oneOf([true], "Ви повинні погодитись з ліцензійною угодою"),
});
const Home = () => {
  const onSubmit = (value) => {
    console.log("submit", value);
  };
  const fieldsValues = {
    firstName: "",
    lastName: "",
    email: "",
    sex: "male",
    number: "1",
    checked: [],
    license: false,
    file: null,
    password: "",
  };
  return (
    <>
      <Wrapper background="Orange">
        <h1>Home Page</h1>
      </Wrapper>
      <Formik
        initialValues={fieldsValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, values, errors }) => (
          <FormWrapper>
            {console.log(errors)}
            <FormickForm>
              <FieldForm>
                <label htmlFor="firstName">First Name</label>
                <FormField id="firstName" name="firstName" placeholder="Name" />
                <RedErrorMessage name="firstName" />
              </FieldForm>
              <FieldForm>
                <label htmlFor="lastName">Last Name</label>
                <FormField
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                />
                <RedErrorMessage name="lastName" />
              </FieldForm>

              <FieldForm>
                <label htmlFor="email">Email</label>
                <FormField id="email" name="email" placeholder="Email" />
                <RedErrorMessage name="email" />
              </FieldForm>
              <FieldForm>
                <PasswordInput
                  value={values.password}
                  onChange={(event) => {
                    setFieldValue("password", event.target.value);
                  }}
                />
                <RedErrorMessage name={"password"} />
              </FieldForm>

              <CheckBoxField>
                <label>
                  Male
                  <Field type="radio" name="sex" value="male" />
                </label>
                <label>
                  Female
                  <Field type="radio" name="sex" value="female" />
                </label>
                <RedErrorMessage name={"sex"} />
              </CheckBoxField>
              <CheckBoxField>
                <label>
                  1<Field type="radio" name="number" value="1" />
                </label>
                <label>
                  2<Field type="radio" name="number" value="2" />
                </label>
                <label>
                  3<Field type="radio" name="number" value="3" />
                </label>
                <RedErrorMessage name={"number"} />
              </CheckBoxField>
              <CheckBoxField>
                <label>
                  <Field type="checkbox" name="checked" value="car" />
                  Car
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="house" />
                  House
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="appartment" />
                  Appartment
                </label>
              </CheckBoxField>
              <label>
                <Field type="checkbox" name="license" />
                License
              </label>
              <RedErrorMessage name={"license"} />
              <FileInputContainer>
                <CustomFieldButton htmlFor="file">
                  Download Your File
                </CustomFieldButton>
                <HiddenFileInput
                  id="file"
                  name="file"
                  type="file"
                  onChange={(event) => {
                    console.log(event);
                    setFieldValue("file", event.currentTarget.files[0]);
                  }}
                />
                <RedErrorMessage name={"file"} />
              </FileInputContainer>

              <SubmitButton type="submit">Submit</SubmitButton>
            </FormickForm>
          </FormWrapper>
        )}
      </Formik>
    </>
  );
};

export default Home;
