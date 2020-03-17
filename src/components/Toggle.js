import React from "react"

const Toggle = ({ checked, onChange }) => {
  return (
    <span className="toggle-control">
      <label htmlFor="dmcheck" className="dmcheck">
        <input
          className="dmcheck"
          type="checkbox"
          checked={checked}
          onChange={onChange}
          id="dmcheck"
        />
      </label>
    </span>
  )
}

export default Toggle
