import React from "react";
import { Grid } from "./styles";
import Topbar from "../Topbar";
import ChannelList from "../ChannelList";
import LiveChat from "../LiveChat";
import LiveContent from "../LiveContent";

const Layout: React.FC = () => {
  return (
    <Grid>
      <Topbar />

      <ChannelList />
      <LiveContent />
      <LiveChat />
    </Grid>
  );
};

export default Layout;
