import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  VideoDetails,
  ChannelDeatils,
  SearchFeed,
} from "./componenets";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/channel/:id" element={<ChannelDeatils />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);
export default App;
