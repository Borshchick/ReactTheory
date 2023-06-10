import { useState } from "react"
import { Input, LogIn, LogInButton, LogInMenu, LoginForm, LoginFormWrapper, ShowpasswrdButton } from "./loginStyles"
import { Wrapper } from "../../components/header/styles"
import { NavLink } from "react-router-dom"

const FormLogin = () => {

    const CustomInput =({name, inputValue, placeholder, onChange, type}) => {
        return(
            <Input type = {type} name = {name} value = {inputValue} onChange={onChange} placeholder = {placeholder}/>
        )
        
    }
    const PasswordInput = ({type = 'password', name = 'password', ...prop}) => {
        const [isHidden, setIsHidden] = useState(type === 'password')
        return(
            <>
                <CustomInput value = {passwordValue} placeholder = {'Your Password'}type={isHidden ? 'password' : 'text'} onChange={HandlepasswordChange}/>
                <ShowpasswrdButton onClick={() => setIsHidden(!isHidden)}>
                    Switch
                </ShowpasswrdButton>
            </>
            
        )
    }
    const [loginValue, setLoginValue] = useState ("")
    const [passwordValue, setPasswordValue] = useState("")

    const HandleLoginChange = (event) => {
        const login = event.target.value;
        setLoginValue(...loginValue, login)
    }

    const HandlepasswordChange = (event) => {
        const password = event.target.value;
        setPasswordValue(...passwordValue, password)
    }
    return(
        <>
        <Wrapper background="orange"><h1>Join Us</h1></Wrapper>
        <LoginFormWrapper>  
            <LoginForm>
                <LogIn>Log In</LogIn>
                <CustomInput value = {loginValue} name={'login'}  placeholder={'Your Login'} onChange={HandleLoginChange}/>
                <PasswordInput/>
                <LogInMenu>
                    <LogInButton>Log In</LogInButton>
                    <h5>First time? <NavLink to = "/reg" href="/reg">Join Us</NavLink></h5>
                </LogInMenu>
            </LoginForm>
        </LoginFormWrapper>
        </>
       
    )
}

export default FormLogin