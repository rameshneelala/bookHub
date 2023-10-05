import React from 'react'

const BookThemeContext = React.createContext({
  isDarkTheme: false,
  onClickThemeIcon: () => {},
})

export default BookThemeContext
