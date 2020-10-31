import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import dataDaily from "./apiDataDaily.json";
import dataCountry from "./apiDataCountry.json";

const apiUrl = "https://api.covid19api.com/total/country";
const apiUlrCountry = "https://api.covid19api.com/countries";

type DATADAILY = typeof dataDaily;
type DATACOUNTRY = typeof dataCountry;

type covidState = {
  daily: DATADAILY;
  country: string;
  countries: DATACOUNTRY;
};

const initialState: covidState = {
  daily: dataDaily,
  country: "japan",
  countries: dataCountry,
};

export const fetchAsyncGetDaily = createAsyncThunk(
  "covid/getDaily",
  async (country: string) => {
    const { data } = await axios.get<DATADAILY>(`${apiUrl}/${country}`);
    return { data: data, country: country };
  }
);

export const fetchAsyncGetCountries = createAsyncThunk(
  "covid/getCountry",
  async () => {
    const { data } = await axios.get<DATACOUNTRY>(`${apiUlrCountry}`);
    return { countries: data };
  }
);

const covidSlice = createSlice({
  name: "covid",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetDaily.fulfilled, (state, action) => {
      return {
        ...state,
        daily: action.payload.data,
        country: action.payload.country,
      };
    });
    builder.addCase(fetchAsyncGetCountries.fulfilled, (state, action) => {
      return {
        ...state,
        countries: action.payload.countries,
      };
    });
  },
});

export const selectDaily = (state: RootState) => state.covid.daily;
export const selectCountry = (state: RootState) => state.covid.country;
export const selectCounties = (state: RootState) => state.covid.countries;

export default covidSlice.reducer;
