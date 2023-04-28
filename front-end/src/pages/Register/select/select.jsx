import { useState } from 'react';
import Select from 'react-select';

import "./select.css"

export const MySelect = ({options} ) => {
  
  const [selectedOption, setSelectedOption] = useState(null);
  return (
<>
    <Select className="select"
    defaultValue={selectedOption}
    onChange={setSelectedOption}
    options={options}
    placeholder="Your Branch"
    theme={(theme) => ({
      ...theme,
      borderRadius: 10,
      
      colors: {
        ...theme.colors,
        primary25: '#FF9100',
        primary: '#240046',
      },
    })}
    styles={{
      control:(basStyles,state)=>({
        ...basStyles,
        borderColor:state.isFocused ?"#FF9100":"#240046",
        borderWidth:0,
        backgroundColor: state.isFocused? "#FF9100":"#240046",
        color: state.isFocused? "#240046":"#FF9100",
        cursor:state.isDisabled?'not-allowed':'pointer',
        ":hover":{
          ...basStyles[':hover'],
          borderColor:"#FF9100",
          borderRadius:10,

        }
      })
      ,dropdownIndicator:(styles,state)=>({
        ...styles,
        color:"white",
        ":hover":{
          ...styles[':hover'],
          
        }
      })
      ,singleValue: (styles,state) => ({ ...styles, color:!state.isDisabled?!state.isFocused?"white":"#240046":"#240046"
    
     }),
     placeholder: (styles) => ({ ...styles}),
    }}
  />

</>
  );
};

