import { useCallback } from "react"
import type { ButtonHTMLAttributes, PropsWithChildren, MouseEvent } from "react"

// Definição das propriedades aceitas pelo componente Button, estendendo as propriedades padrão de um button HTML e PropsWithChildren para suportar children
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  handleClick?: (e?: MouseEvent<HTMLButtonElement>) => void // Função opcional para lidar com cliques no botão
  backgroundColor?: string // Cor de fundo opcional do botão
  textColor?: string // Cor do texto opcional do botão
}

// Componente funcional Button que renderiza um botão personalizado
const Button = ({ children, handleClick, disabled, className = '', backgroundColor = 'green', textColor = 'white', ...props }: ButtonProps) => {
  // Callback para lidar com cliques no botão
  const onHandleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    // Verifica se handleClick é uma função e se o botão não está desabilitado antes de executar a função
    if (handleClick instanceof Function && !disabled) {
      handleClick(e)
    }
  }, [handleClick, disabled]) // Dependências do callback de clique

  // Define as classes de cores baseadas na prop backgroundColor
  const getColorClasses = () => {
    if (disabled) {
      return 'bg-gray-300 text-gray-500 cursor-not-allowed'
    }

    const colorMap = {
      green: 'bg-green-500 hover:bg-green-600 focus:ring-green-500 text-white',
      blue: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 text-white',
      red: 'bg-red-500 hover:bg-red-600 focus:ring-red-500 text-white',
      gray: 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-500 text-white',
      indigo: 'bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-500 text-white',
      purple: 'bg-purple-500 hover:bg-purple-600 focus:ring-purple-500 text-white',
      pink: 'bg-pink-500 hover:bg-pink-600 focus:ring-pink-500 text-white',
      yellow: 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500 text-white',
    }

    return colorMap[backgroundColor as keyof typeof colorMap] || colorMap.green
  }

  return (
    <button
      {...props} // Passa todas as outras propriedades para o botão HTML
      onClick={onHandleClick} // Atribui o callback de clique ao evento onClick
      className={`
        px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${getColorClasses()}
        ${className}
      `} // Classes CSS condicionais baseadas em propriedades
      disabled={disabled} // Define se o botão está desabilitado ou não
    >
      {children} {/* Renderiza o conteúdo dentro do botão */}
    </button>
  )
}

export default Button // Exporta o componente Button como padrão
