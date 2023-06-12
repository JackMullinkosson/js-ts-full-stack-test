import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  SelectChangeEvent,
} from "@mui/material";

import { addMachine } from "../../store/actions/machineActions";
import { useDispatch } from "react-redux";

const CreateMachineForm: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const dispatch = useDispatch();

  const handleCreateClick = () => {
    setShowForm(true);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    setType(selectedValue);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newMachine = {
      title: name,
      type: type,
      monitoringPoints: [],
    };

    dispatch(addMachine(newMachine));
    console.log(`Name: ${name}, Type: ${type}`);

    setName("");
    setType("");
    setShowForm(false);
  };

  return (
    <div className="flex flex-col items-center">
      <Button
        variant="contained"
        className="bg-blue-500"
        onClick={handleCreateClick}
      >
        Create New Machine
      </Button>

      {showForm && (
        <form className="mt-4" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={handleNameChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />

          <FormControl variant="outlined" margin="normal" required fullWidth>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={handleTypeChange} label="Type">
              <MenuItem value="Pump">Pump</MenuItem>
              <MenuItem value="Fan">Fan</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" className="bg-blue-500">
            Submit
          </Button>
        </form>
      )}
    </div>
  );
};

export default CreateMachineForm;