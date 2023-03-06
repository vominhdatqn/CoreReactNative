import React from 'react'
import {ButtonProps} from './types'

import FlatButton from './components/Flat/FlatButton'
import IconButton from './components/Icon/IconButton'

const ButtonComponent: React.FC<ButtonProps> = ({type, ...restProps}) => {
  switch (type) {
    case 'icon':
      return <IconButton {...restProps} />
    default:
      return <FlatButton {...restProps} />
  }
}

export default ButtonComponent
