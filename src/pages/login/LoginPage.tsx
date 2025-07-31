import LoginForm from "./components/LoginForm"


const LoginPage = () => {
  return <div className='p-3 bg-white rounded shadow mx-auto w-full' style={{ maxWidth: '300px' }}>
    <h2 className="text-center mb-2">
      Login
    </h2>
    <LoginForm />
  </div>
}

export default LoginPage