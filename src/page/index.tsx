import { TextField } from "@mui/material";
import React from "react";

const IndexPage = () => {

    const [value, setValue] = React.useState<string>("");

  const regex = new RegExp(/^[a-zA-Z0-9]+$/);

  const checkRegex = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (regex.test(value)) {
      console.log("match");
      setValue(value);
    } else {
      console.log("not match");
      setValue("");
    }

    const clearnValue = value.replace(/[^a-zA-Z0-9]/g, "");
  };
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'

    }}
    >
        <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={checkRegex}
        value={value}
      />
    </div>
  );
};

export default IndexPage;
