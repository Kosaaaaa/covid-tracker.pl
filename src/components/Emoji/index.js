import React from 'react'
import { EmojiWrap } from './EmojiElement';
const Emoji = ({ label, symbol }) => {
  return (
    <EmojiWrap
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </EmojiWrap>
  )
}

export default Emoji
