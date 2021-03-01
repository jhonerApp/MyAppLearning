import React, { useReducer, useEffect } from "react";
import { grey } from "@material-ui/core/colors";
import { Button } from "@material-ui/core/";

import * as RIIcons from "react-icons/ri";
import * as MDIcons from "react-icons/md";
import * as FIIcons from "react-icons/fi";
import * as IO5cons from "react-icons/io5";



export default function ThemeButton(props) {
  let themes = {};
  const initialIconState = null;
  const reducer = (state, action) => {
    switch (action.type) {
      case "addIcon":
        return <FIIcons.FiSave fontSize="medium" />;
      case "refreshIcon":
        return <RIIcons.RiRefreshLine fontSize="medium" />;
      case "exitIcon":
        return <FIIcons.FiXSquare fontSize="medium" />;
      case "assignIcon":
        return <FIIcons.FiNavigation fontSize="medium" />;
      case "fileIcon":
        return <IO5cons.IoFileTrayFullOutline fontSize="medium" />;
      case "urlIcon":
        return <MDIcons.MdOpenInBrowser fontSize="medium" />;
      default:
        return state;
    }
  };

  // const useStyles = makeStyles(theme => ({
  //   button: {
  //     margin: theme.spacing(1),
  //     [theme.breakpoints.down("sm")]: {
  //       minWidth: 32,
  //       paddingLeft: 8,
  //       paddingRight: 8,
  //       "& .MuiButton-startIcon": {
  //         margin: 0
  //       }
  //     }
  //   },
  //   buttonText: {
  //     [theme.breakpoints.down("sm")]: {
  //       display: "none"
  //     }
  //   }
  // }));


  const [stateIcon, dispatchIcon] = useReducer(reducer, initialIconState);
  // const classes = useStyles();


  useEffect(() => {
    dispatchIcon({ type: props.icon });
  }, [props.icon]);

  if (props.theme === "primary") {
    themes = {
      background: "linear-gradient(45deg, #2C3E50     30%, #2C3E50    90%)",
      marginRight: 5,
      width: `${props.width}`,
    };


  }
  if (props.theme === "warning") {
    themes = {
      background: "linear-gradient(45deg, #F7DC6F   30%, #F7DC6F   90%)",
      "&:hover": {
        backgroundColor: grey[700],
      },
      marginRight: 10,
      width: `${props.width}`,
    };
  }

  if (props.theme === "info") {
    themes = {
      background: "linear-gradient(45deg, #1F618D   30%, #1F618D   90%)",
      "&:hover": {
        backgroundColor: grey[700],
      },
      marginRight: 10,
      width: `${props.width}`,
    };
  }
  if (props.theme === "danger") {
    themes = {
      background: "linear-gradient(45deg, #A93226  30%, #A93226  90%)",
      "&:hover": {
        backgroundColor: grey[50],
      },
      marginRight: 10,
    };
  }

  return (
    <Button
      {...props}
      style={themes}
      endIcon={stateIcon}
      variant="contained"
      color="primary"
    >
      {props.text}
    </Button>
  )
}
