import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import { Box } from "@mui/material";
import MapExplore from "./Map";

const Places = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <Box>Loading.....</Box>;
  return <MapExplore />;
};

export default Places;
