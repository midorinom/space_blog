import styles from "../../css/Feed.module.css";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";
import { FiltersProps } from "../../definitions/Feed-definitions";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

function Filters({
  searchFilter,
  setSearchFilter,
  dateFilter,
  setDateFilter,
}: FiltersProps) {
  function handleSearchOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchFilter(e.target.value);
  }

  function handleFromDateOnChange(value: Dayjs | null) {
    if (!value) {
      setDateFilter({ ...dateFilter, from: null });
    }
    setDateFilter({ ...dateFilter, from: value });
  }

  function handleToDateOnChange(value: Dayjs | null) {
    if (!value) {
      setDateFilter({ ...dateFilter, to: null });
    }
    setDateFilter({ ...dateFilter, to: value });
  }

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
          value={searchFilter}
          onChange={handleSearchOnChange}
        />
      </Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DemoItem label="From">
            <DatePicker
              value={dateFilter.from}
              onChange={handleFromDateOnChange}
            />
          </DemoItem>
          <DemoItem label="To">
            <DatePicker value={dateFilter.to} onChange={handleToDateOnChange} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}

export default Filters;
