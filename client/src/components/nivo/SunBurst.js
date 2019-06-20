import React from "react";
import {ResponsiveSunburst} from "@nivo/sunburst";
import data from "./sunburstData.json";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const SunburstChart = () => (
  <ResponsiveSunburst
    data={data}
    margin={{top: 40, right: 20, bottom: 20, left: 20}}
    identity="name"
    value="loc"
    cornerRadius={2}
    borderWidth={1}
    borderColor="white"
    colors={{scheme: "nivo"}}
    childColor={{from: "color"}}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    isInteractive={true}
  />
);

export default SunburstChart;
