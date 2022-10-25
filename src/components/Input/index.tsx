import { ReactNode, InputHTMLAttributes, forwardRef } from 'react'
import { InputInputContainer, InputRootContainer } from './styles'

interface InputRootProps {
  children: ReactNode
}

export type RefInputRoot = HTMLDivElement

const InputRoot = forwardRef<RefInputRoot, InputRootProps>(function InputRoot(
  props,
  ref,
) {
  return <InputRootContainer ref={ref}>{props.children}</InputRootContainer>
})

// function InputRoot({ children }: InputRootProps) {
//   return <InputRootContainer>{children}</InputRootContainer>
// }

type InputInputProps = InputHTMLAttributes<HTMLInputElement>

export type RefInputInput = HTMLInputElement

const InputInput = forwardRef<RefInputInput, InputInputProps>(
  function InputInput(props, ref) {
    return <InputInputContainer ref={ref} {...props} />
  },
)

export const Input = {
  Root: InputRoot,
  Input: InputInput,
}
