import { ReactNode, InputHTMLAttributes } from 'react'
import { InputInputContainer, InputRootContainer } from './styles'

interface InputRootProps {
  children: ReactNode
}

function InputRoot({ children }: InputRootProps) {
  return <InputRootContainer>{children}</InputRootContainer>
}

type InputInputProps = InputHTMLAttributes<HTMLInputElement>

function InputInput({ ...rest }: InputInputProps) {
  return <InputInputContainer {...rest} />
}

export const Input = {
  Root: InputRoot,
  Input: InputInput,
}
