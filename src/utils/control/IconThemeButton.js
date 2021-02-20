import React, { useReducer, useEffect } from "react";

import * as RIIcons from "react-icons/ri";
import * as AIIcons from "react-icons/ai";
import { Button } from 'primereact/button';

export default function IconThemeButton(props) {
  const initialIconState = null;
  const reducer = (state, action) => {
    switch (action.type) {
      case "deleteIcon":
        return <AIIcons.AiFillDelete />;
      case "editIcon":
        return <RIIcons.RiEditBoxFill />;
      default:
        return state;
    }
  };

  const [stateIcon, dispatchIcon] = useReducer(reducer, initialIconState);

  useEffect(() => {
    dispatchIcon({ type: props.icon });
  }, [props.icon]);

  let themes = {};
  if (props.theme === "primary") {
    themes = {
      color: lightBlue["A700"],
    };
  }
  if (props.theme === "danger") {
    themes = {
      color: red[500],
    };
  }

  return (

    <Button  {...props}  icon={stateIcon} />

    // <IconButton
    //   {...props}
    //   variant="contained"
    //   style={themes}
    //   color="default"
    // >
    //   {stateIcon}
    // </IconButton>
  );
}
