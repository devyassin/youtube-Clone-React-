import React from "react";
import { Stack, Box } from "@mui/material";
import { ChannelCard } from "./index";
import { VideoCard } from "./index";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => {
        <Box key={idx}>{item.id.videoId && <VideoCard video={item} />}</Box>;
      })}
    </Stack>
  );
};

export default Videos;

{
  /* {item.id.channelId && <ChannelCard channelDetail={item} />} */
}
