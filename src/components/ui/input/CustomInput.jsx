import { Input } from "./styles";


const CustomInput = ({ name, inputValue, placeholder, onChange, type }) => {
    return (
      <Input
        type={type}
        name={name}
        value={inputValue}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  };

export default CustomInput