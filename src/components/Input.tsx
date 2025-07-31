import { useCallback, useState, useMemo } from "react"
import type { InputHTMLAttributes, ChangeEvent, ReactNode } from "react"

// Definição das propriedades aceitas pelo componente Input, estendendo as propriedades padrão de um input HTML
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void // Função opcional para lidar com mudanças no input
  label?: ReactNode // Conteúdo opcional para rótulo do input
  customError?: string | null // Mensagem de erro personalizada
}

// Componente funcional Input que renderiza um input HTML personalizado
const Input = ({ handleChange, disabled, readOnly, className = '', label = '', customError = '', ...props }: InputProps) => {
  const [error, setError] = useState<string | null>(null) // Estado para controlar mensagens de erro

  // Callback para lidar com mudanças no input
  const onHandleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { validity, validationMessage, value } = e.target

    // Verifica a validade do input e atualiza o estado de erro conforme necessário
    setError(!validity.valid ? validationMessage : null)

    // Chama a função handleChange passada como prop, se existir
    if (handleChange instanceof Function) {
      handleChange(value, e)
    }
  }, [handleChange]) // Dependência do callback de mudança

  // Variaveis auxiliares para controle de estado
  const errorMessage = useMemo(() => customError || error, [customError, error])
  const hasActionsState = useMemo(() => disabled || readOnly, [disabled, readOnly])
  const hasControllState = useMemo(() => hasActionsState || errorMessage, [hasActionsState, errorMessage])
  const canShowError = useMemo(() => errorMessage && !hasActionsState, [errorMessage, hasActionsState])

  return (
    <div className='w-full'>
      {label && (
        <label
          htmlFor={props.id ?? props.name ?? ''}
          className={`block font-medium mb-0.5 px-0.5 text-left text-neutral-900 text-sm`}
        >
          {label}
        </label>
      )}
      <input
        {...props} // Passa todas as outras propriedades para o input HTML
        onChange={onHandleChange} // Atribui o callback de mudança ao evento onChange
        className={`
          w-full block px-3 py-2 border border-gray-300 rounded-md text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition-colors duration-200
          ${!hasControllState ? 'bg-white border-gray-300 text-gray-900' : ''}
          ${disabled ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' : ''} 
          ${readOnly ? 'bg-gray-50 border-gray-200 text-gray-600' : ''}
          ${canShowError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''} 
          ${className}
        `} // Classes CSS condicionais baseadas em propriedades
        disabled={disabled} // Define se o input está desabilitado ou não
        readOnly={readOnly} // Define se o input é somente leitura ou não
      />
      {/* Exibe a mensagem de erro se houver */}
      <span className={`
        min-h-4 text-red-500 text-xs px-0.5 pt-0.5 block leading-none 
        ${canShowError ? 'opacity-100 ' : 'opacity-0'}
      `}
      >
        {errorMessage}
      </span>
    </div>
  )
}

export default Input // Exporta o componente Input como padrão
