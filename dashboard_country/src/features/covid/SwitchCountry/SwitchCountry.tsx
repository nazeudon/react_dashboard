import React, { ChangeEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NativeSelect, FormControl } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncGetDaily } from "../covidSlice";
import { selectCounties } from "../covidSlice";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 320,
  },
}));

const SwitchCountry: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dataCounties = useSelector(selectCounties);
  const countries = dataCounties
    .map(({ Slug }) => Slug)
    .sort()
    .filter((country) => country !== "japan");
  countries.unshift("japan");

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          dispatch(fetchAsyncGetDaily(e.target.value))
        }
      >
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default SwitchCountry;
