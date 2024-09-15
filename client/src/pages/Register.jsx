import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <from className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow 
          type="text" 
          name="name" 
          defaultValue="Donna" 
        />
        <FormRow 
          type="text" 
          name="lastName" 
          labelText="last name"
          defaultValue="Tang"
        />
        <FormRow 
          type="text"
          name="location"
          defaultValue="earth"
        />
        <FormRow 
          type="email" 
          name="email"
          defaultValue="Donna@gmail.com" 
        />
        <FormRow 
          type="password" 
          name="password"
          defaultValue="123456" 
        />
        <button type="submit" className="btn btn-block">submit</button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">Login</Link>
        </p>
      </from>
    </Wrapper>
  )
}

export default Register;