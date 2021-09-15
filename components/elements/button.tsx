import {css, SerializedStyles} from "@emotion/react"
import {FC} from "react"

const buttonResetStyles = css`
  padding: 0;
  margin: 0;
  border: 0;
  font-size: 1rem;
  background-color: none;
  background: none;
  cursor: pointer;
  border-radius: 4px;
`

type ButtonType = "primary" | "secondary" | "stable" | "default"
const buttonStyles = (buttonType: ButtonType = "default") => css`
  ${buttonResetStyles};
`

interface Props {
  type?: "button" | "submit" | "reset" | undefined
  buttonType?: ButtonType
  styles?: SerializedStyles
  restProps?: Record<string, string | boolean>
  onClick: () => void
}
const Button: FC<Props> = ({
  type = "button",
  buttonType = "default",
  children,
  styles,
  restProps,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      css={css`
        ${buttonStyles(buttonType)};
        ${styles};
      `}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button
