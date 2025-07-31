import Button from "@/components/Button"
import Input from "@/components/Input"

const LoginForm = () => {
  return (
    <form
      className="w-full flex flex-col gap-2"
      noValidate
    >
      <Input
        label='E-mail'
        type='email'
        name='email'
        id='email'
        placeholder='E-mail'
        required
      />
      <Input
        label='Senha'
        type='password'
        name='password'
        id='password'
        placeholder='Senha'
        minLength={6}
        required
      />
      <Button type='submit'>
        Entrar
      </Button>
    </form>
  )
}

export default LoginForm
