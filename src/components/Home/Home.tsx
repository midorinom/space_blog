import React from "react";
import styles from "../../css/Home.module.css";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Home() {
  return (
    <div className={styles.home_ctn}>
      <div className={styles.top_ctn}>
        <div className={styles.title}>Space Blog</div>
        <div className={styles.top_commenters}>Top 3 Commenters</div>
        <div className={styles.average_comments}>Average Comments/Day</div>
      </div>
      <div className={styles.bottom_ctn}>
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
        <div className={styles.feed_ctn}>
          <div className={styles.feed_card}>Feed 1</div>
          <div className={styles.feed_card}>Feed 2</div>
          <div className={styles.feed_card}>Feed 3</div>
          <div className={styles.feed_card}>Feed 4</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
