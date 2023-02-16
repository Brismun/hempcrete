import { Button, TextField } from "@mui/material";
import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center w-[400px] ml-auto mr-auto">
      <h1 className="mb-3 mt-3 text-orange-500 font-bold text-lg">Text us</h1>

      <form
        className="flex-col flex items-center"
        method="POST"
        action="https://formsubmit.co/alex_bakaj@yahoo.com"
        enctype="multipart/form-data"
      >
        {" "}
        <TextField
          fullWidth
          rows="10"
          multiline="true"
          size="small"
          name="message"
          placeholder="scrie tata, cu ce te ajutam
          "
        />
        <div className="flex gap-3 mt-3 ">
          <TextField
            size="small"
            id="outlined-basic"
            label="Name"
            name="name"
            variant="outlined"
          />
          <TextField
            size="small"
            id="outlined-basic"
            label="Mail"
            name="email"
            variant="outlined"
          />
        </div>
        <div className="mt-5">
          <Button variant="contained" type="submit">
            TESTEAZA
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
