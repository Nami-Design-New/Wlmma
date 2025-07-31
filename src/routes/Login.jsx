import { Form } from "react-bootstrap";
import InputField from "../ui/forms/InputField";
import PasswordField from "../ui/forms/PasswordField";
import SubmitButton from "../ui/forms/SubmitButton";

export default function Login() {
  return (
    <section className="login_section">
      <div className="auth_form">
        <form className="form_ui">
          <div className="header">
            <div className="logo">
              <img src="/images/headerLogo.svg" alt="" />
            </div>
            <div className="text">
              <h2>Welcome ..!</h2>
              <p>
                Enter the registered account on our platform to complete the
                login or create a new account ...
              </p>
            </div>
          </div>

          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <PasswordField label="Password" placeholder="Enter your password" />

          <Form.Check type="checkbox" id="rememberMe" label="Remember me" />

          <SubmitButton text="Login" className="mt-2" />
        </form>
      </div>

      <div className="img">
        <img src="/images/auth.jpg" alt="login" />
      </div>
    </section>
  );
}
