const StepTwo = ({ name, email, password, setStep }) => {
  return (
    <div>
      <h2>Results</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <button
        onClick={() => {
          setStep(1);
        }}
      >
        Edit your informations
      </button>
    </div>
  );
};

export default StepTwo;
