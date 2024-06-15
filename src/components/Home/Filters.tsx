import styles from "../../css/Feed.module.css";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Filters() {
  return (
    <div className={styles.filters_ctn}>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <TextField
          placeholder="Search"
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DemoItem label="From">
            <DatePicker />
          </DemoItem>
          <DemoItem label="To">
            <DatePicker />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}

export default Filters;
