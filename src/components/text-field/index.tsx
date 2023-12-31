import { FC } from 'react'
import _TextField, { StandardTextFieldProps } from '@mui/material/TextField'

// interface IProps extends StandardTextFieldProps {}

const TextField: FC<StandardTextFieldProps> = (props) => {
  return <_TextField {...props} />
}

export default TextField
