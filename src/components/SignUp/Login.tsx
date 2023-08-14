import Form from "./Form";

function Login({ closeModal }: any) {
  const handleLogin = (email, pass) => {
    closeModal();
  };

  return <Form handleClick={handleLogin} title="Login" />;
}

export default Login;