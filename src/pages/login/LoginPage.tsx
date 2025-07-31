import { Link } from "react-router-dom"
import LoginForm from "./components/LoginForm"

const LoginPage = () => {
  return <div className='p-3 bg-white rounded shadow mx-auto w-full' style={{ maxWidth: '300px' }}>
    <h2 className="text-center mb-2">
      Login
    </h2>
    <LoginForm />
    <footer className="text-center mt-4">
      Não tem uma conta?<br />
      <Link className="text-green-500 underline" to="/login/register">Cadastre-se</Link>
    </footer>
  </div>
}

export default LoginPage