import { Form } from "react-router-dom";

const Register = () => {

  return (
    <div>
      <div>
        <h2>Sign up</h2>
        <Form method="post">
          <input type="text" name="username" id="username" placeholder="Username"/>
          <input type="password" name="password" id="password" placeholder="Password"/>
          <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password"/>
          <input type="text" name="firstName" id="firstName" placeholder="First Name"/>
          <input type="text" name="lastName" id="lastName" placeholder="Last Name"/>
          <button type="submit">Sign up</button>
        </Form>
      </div>
    </div>
  );
};

export default Register;