import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import "./styles/settings.scss";
import { PointsName } from "../entities/enums/points";

interface SettingsProps {
  changePoint(pointName: PointsName): void;
  resetMatrix(): void;
  onStart(): void;
}

const Settings = ({ changePoint, resetMatrix, onStart }: SettingsProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    changePoint((event.target as HTMLInputElement).value as PointsName);
  };

  return (
    <section className="settings">
      <hr />
      <FormControl>
        <FormLabel id="radio-buttons-group-label">Points</FormLabel>
        <RadioGroup
          row
          aria-labelledby="radio-buttons-group-label"
          defaultValue={PointsName.WALL}
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel
            value={PointsName.WALL}
            control={<Radio />}
            label="Wall"
          />
          <FormControlLabel
            value={PointsName.START}
            control={<Radio />}
            label="Start"
          />
          <FormControlLabel
            value={PointsName.FINISH}
            control={<Radio />}
            label="Finish"
          />
        </RadioGroup>
      </FormControl>
      <div className="buttons">
        <Button variant="contained" onClick={onStart}>
          Start
        </Button>
        <Button variant="outlined" onClick={resetMatrix}>
          Reset
        </Button>
      </div>
    </section>
  );
};
export default Settings;
