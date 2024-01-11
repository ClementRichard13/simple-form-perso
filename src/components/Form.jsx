const Form = ({
  name,
  email,
  password,
  confirmPassword,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setStep,
}) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (confirmPassword === password) {
          setStep(2);
        } else {
          alert("vos mots de passe ne sont pas identique");
        }
      }}
    >
      <h1>Create account</h1>
      <p>Name</p>
      <input
        value={name}
        type="text"
        placeholder="Jean Dupont"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <p>Email</p>
      <input
        value={email}
        type="email"
        placeholder="Jean.dupont@mail.com"
        onChange={(event) => setEmail(event.target.value)}
      />
      <p>Password</p>
      <input
        value={password}
        type="password"
        placeholder="GHjioj455!"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <p>Confirm your password</p>
      <input
        value={confirmPassword}
        type="password"
        placeholder="GHjioj455!"
        onChange={(event) => {
          setConfirmPassword(event.target.value);
        }}
      />
      <br />
      <input type="submit" value="Register" />
    </form>
  );
};

export default Form;
