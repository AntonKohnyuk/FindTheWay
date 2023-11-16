import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import "./styles/settings.scss";

const Settings = () => {
  return (
    <section className="settings">
      <hr />
      <FormControl>
        <FormLabel id="radio-buttons-group-label">Points</FormLabel>
        <RadioGroup
          row
          aria-labelledby="radio-buttons-group-label"
          defaultValue="wall"
          name="radio-buttons-group"
        >
          <FormControlLabel value="wall" control={<Radio />} label="Wall" />
          <FormControlLabel value="start" control={<Radio />} label="Start" />
          <FormControlLabel value="finish" control={<Radio />} label="Finish" />
        </RadioGroup>
      </FormControl>
      <div className="buttons">
        <Button variant="contained">Start</Button>
        <Button variant="outlined">Reset</Button>
      </div>
    </section>
  );
};
export default Settings;
