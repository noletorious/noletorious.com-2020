import React from "react"
// TODO: Do you want font icons instead?
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import {} from "@fortawesome/free-solid-svg-icons"
import Toggle from "./Toggle"
import useDarkMode from "use-dark-mode"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  return (
    <div className="dark-mode-toggle">
      <button type="button" onClick={darkMode.disable}>
        <FontAwesomeIcon icon={faSun} />
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
        <FontAwesomeIcon icon={faMoon} />
      </button>
    </div>
  )
}

export default DarkModeToggle
