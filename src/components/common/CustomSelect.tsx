import React, { useState } from "react"
import Select, { GroupBase, OptionsOrGroups, StylesConfig, components  } from "react-select"
import styles from "../../styles/common/CustomSelect.module.scss"

import { Label } from "reactstrap"
import { FormatOptionLabelMeta } from "react-select/dist/declarations/src/Select"

interface inputProps {
  validation?: Function
  onChange?: Function
  label?: string
  className?: string
  disabled?: boolean
  value?: string
  errorMsg?: string
  options: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined,
  customOption?: Function,
  clearOnUnfocus?: boolean
}

const CustomSelect = (props: inputProps) => {
   const [selectedValue, setSelectedValue] = useState<unknown | {} | undefined>()

  const {
    label,
    className,
    onChange,
    validation,
    disabled,
    value,
    errorMsg,
    options,
    customOption,
    clearOnUnfocus
  } = props

  const customStyles: StylesConfig = {
    valueContainer: (provided, state) => {
      return {
        ...provided,
        backgroundColor: "white",
        height: 50,
        fontSize: 18,
        color: "black",
        borderRadius: 6
      }
    },
    control: (provided: any, { selectProps: { width } }: any) => ({
      ...provided,
      border: "none",
      borderRadius: 6,
      boxShadow: "none",
      ":hover": { border: "none", borderRadius: 6, outline: "none" }
    }),
    option: (provided, state) => {
      return { ...provided, color: 'black' }
    }
  }

  const CustomOption = (object: any) => {
      const { children, data, ...props } = object
    console.log(object)
    
    return (
      <components.Option {...props}>
        {customOption ? customOption(data) : children}
      </components.Option>
    );
  };
   const clearState = () => {
    clearOnUnfocus && setSelectedValue({})
   }
  return (
    <div className={`${className} ${styles["custom-select"]} `}>
      <Label for={label} className={styles.label}>
        {label}
      </Label>
      <Select
        onMenuClose={clearState}
        onChange={(value) => setSelectedValue(value)}
        value={selectedValue}
        closeMenuOnSelect={false}
        components={{Option: CustomOption}}
        theme={(theme) => ({
          ...theme,
          colors: {...theme.colors, primary: "#7F93F9" }
        })}
        // formatOptionLabel={formatOptionLabel}
        styles={customStyles}
        options={options}
      ></Select>
       <span className="text-danger">{false || <span>&nbsp;</span>}</span>
    </div>
  )
}

export default CustomSelect
