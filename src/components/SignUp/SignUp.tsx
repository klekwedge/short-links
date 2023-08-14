import Form from "./Form";

function SignUp({ closeModal }: any) {
  const handleRegister = (email, pass) => {
    closeModal();
  };

  return <Form handleClick={handleRegister} title="Register" />;
}

export default SignUp;