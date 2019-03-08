import React from "react";
import Input from "./Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import CalendarToday from "@material-ui/icons/CalendarToday";

export default function Settings(props) {
  const dateAdornment = {
    startAdornment: (
      <InputAdornment position="start">
        <CalendarToday />
      </InputAdornment>
    )
  };
  const tokenAdornment = {
    startAdornment: (
      <InputAdornment position="start">
        <AccountCircle />
      </InputAdornment>
    )
  };
  return (
    <React.Fragment>
      <Input
        label="Start date"
        placeholder="Enter date.."
        name="startDate"
        value={props.startDate}
        type="date"
        min="2017-05-01"
        max={props.endDate}
        style={{ margin: 5 }}
        InputProps={dateAdornment}
      />
      <Input
        label="End date"
        placeholder="Enter date.."
        name="endDate"
        value={props.endDate}
        type="date"
        min={props.startDate}
        max="2017-06-15"
        style={{ margin: 5 }}
        InputProps={dateAdornment}
      />
      <Input
        value={props.token}
        name="token"
        type="password"
        label="API Token"
        style={{ margin: 5 }}
        error={!props.validToken}
        errorText="Invalid token!"
        InputProps={tokenAdornment}
      />
    </React.Fragment>
  );
}
