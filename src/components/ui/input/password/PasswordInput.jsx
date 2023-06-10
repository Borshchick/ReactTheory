import { useState } from "react";
import CustomInput from "../CustomInput";
import { PasswordWrapper, ShowpasswordButton } from "../styles";



const PasswordInput = ({
    type = "password",
    name = "password",
    value,
    onChange,
    ...prop
  }) => {
    const [isHidden, setIsHidden] = useState(type === "password");
    return (
      <PasswordWrapper>
        <CustomInput
          value={value}
          name={name}
          placeholder={"Your Password"}
          type={isHidden ? "password" : "text"}
          onChange={onChange}
          {...prop}
        />
        <ShowpasswordButton onClick={() => setIsHidden(!isHidden)}>
          Switch
        </ShowpasswordButton>
      </PasswordWrapper>
    );
  };

  export default PasswordInput