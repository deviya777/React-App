import React from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input } from "@material-ui/core";
import { Input as AntdInput } from "antd";

import "./styles.css";

const App = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
     
      <label>Name</label>
      <Controller
        render={({ field }) => <AntdInput {...field} />}
        name="Name"
        control={control}
        defaultValue=""
      />
      <label>Gender</label>
      <Controller
        name="Gender"
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
             
            ]}
          />
  
        )}
        control={control}
        defaultValue=""
      />
       <label>Educational Qualification</label>
      <Controller
        render={({ field }) => <AntdInput {...field} />}
        name="EQ"
        control={control}
        defaultValue=""
      />
       <label>Hobbies</label>
      <Controller
        name="Hobbies"
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "Cricket", label: "Cricket" },
              { value: "Badminton", label: "Badminton" },
              { value: "Chess", label: "Chess" },
            ]}
          />
  
        )}
        control={control}
        defaultValue=""
      />
      

      <input type="submit" />
    </form>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
