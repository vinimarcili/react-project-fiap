# FIAP React Forms

Projeto React migrado do Next.js para React puro com Vite, seguindo as melhores práticas.

## 🚀 Tecnologias

- **React 19** com TypeScript
- **Vite** como bundler
- **React Router DOM** para roteamento
- **TailwindCSS** para estilização
- **Path Alias** `@` configurado

## 📦 Path Alias

O projeto está configurado com path alias `@` que aponta para `./src`:

```typescript
// Antes
import Footer from './components/Footer'
import LoginLayout from '../layouts/LoginLayout'

// Depois
import Footer from '@/components/Footer'
import LoginLayout from '@/layouts/LoginLayout'
```

### Configuração nos arquivos:

- `tsconfig.app.json` - Configuração do TypeScript
- `vite.config.ts` - Configuração do Vite

## 🎨 Componentes Disponíveis

### Input
```tsx
import { Input } from '@/components'

<Input
  type="email"
  label="Email"
  placeholder="Digite seu email"
  handleChange={(value) => console.log(value)}
  customError="Mensagem de erro"
  required
/>
```

### Button
```tsx
import { Button } from '@/components'

<Button
  backgroundColor="blue"
  textColor="white"
  handleClick={() => console.log('Clicked!')}
>
  Clique aqui
</Button>
```

## 🚀 Como usar

1. **Instalação**:
   ```bash
   npm install
   ```

2. **Desenvolvimento**:
   ```bash
   npm run dev
   ```

3. **Build**:
   ```bash
   npm run build
   ```

## 📝 Notas

- Componentes mantêm a mesma API do projeto Next.js original
- TailwindCSS configurado com safelist para classes dinâmicas
- Estrutura preparada para expansão com mais páginas e componentes
