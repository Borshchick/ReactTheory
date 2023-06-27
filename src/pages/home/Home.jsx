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

const Home = () => {
  const onSubmit = (value) => {
    console.log("submit", value);
  };

  return (
    <>
      <Wrapper background="Orange">
        <h1>Home Page</h1>
      </Wrapper>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          sex: "male",
          number: "1",
          checked: [],
          license: false,
          file: null,
        }}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <FormWrapper>
            <FormickForm>
              <FieldForm>
                <label htmlFor="firstName">First Name</label>
                <FormField id="firstName" name="firstName" placeholder="Name" />
              </FieldForm>
              <FieldForm>
                <label htmlFor="lastName">Last Name</label>
                <FormField
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                />
              </FieldForm>

              <FieldForm>
                <label htmlFor="email">Email</label>
                <FormField id="email" name="email" placeholder="Email" />
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
              <FileInputContainer>
                <CustomFieldButton
                  htmlFor="file"
                >
                  Вибрати Файл
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
