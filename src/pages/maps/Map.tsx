import React, { useState, useMemo } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import {
  Autocomplete,
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useLoadScript, Libraries } from "@react-google-maps/api";
import Directions from "./Directions";

const libraries: Libraries = ["places"];

interface Location {
  lat: number;
  lng: number;
}

const MapExplore = () => {
  const [origin, setOrigin] = useState<Location | null>(null);
  const [destination, setDestination] = useState<Location | null>(null);
  const position = { lat: 9.0563, lng: 7.4985 };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string}>
      <Box sx={{ height: "100vh", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ padding: "1em" }}>
            <Typography variant="h4" sx={{ fontSize: "1.5rem" }}>
              Area markers and their colors
            </Typography>
            <Box sx={{ margin: ".7em .5em" }}>
              <Typography variant="h4" sx={{ fontSize: ".8rem" }}>
                Police stations - Blue
              </Typography>
              <Typography variant="h4" sx={{ fontSize: ".8rem" }}>
                Fire stations - Red
              </Typography>
              <Typography variant="h4" sx={{ fontSize: ".8rem" }}>
                Post offices - Purple
              </Typography>
              <Typography variant="h4" sx={{ fontSize: ".8rem" }}>
                Government offices - Green
              </Typography>
              <Typography variant="h4" sx={{ fontSize: ".8rem" }}>
                Restaurants - Yellow
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", padding: "2em", gap: 2 }}>
            <PlacesAutoComplete setSelected={setOrigin} label="From..." />
            <PlacesAutoComplete setSelected={setDestination} label="To..." />
          </Box>
        </Box>
        <Map
          defaultZoom={13}
          defaultCenter={position}
          mapId={import.meta.env.VITE_MAP_ID}
          fullscreenControl={false}
        >
          {origin && <Marker position={origin} />}
          {destination && <Marker position={destination} />}
          {origin && destination && (
            <Directions origin={origin} destination={destination} />
          )}
        </Map>
      </Box>
    </APIProvider>
  );
};

interface PlacesAutoCompleteProps {
  setSelected: (location: Location) => void;
  label: string;
}

const PlacesAutoComplete = ({
  setSelected,
  label,
}: PlacesAutoCompleteProps) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300,
  });

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setSelected({ lat, lng });
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <Autocomplete
      options={status === "OK" ? data.map((item) => item.description) : []}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {status != "OK" && (
                  <CircularProgress color="inherit" size={20} />
                )}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      value={value}
      onChange={(_event: React.SyntheticEvent, newValue: string | null) => {
        setValue(newValue || "");
        if (newValue) {
          handleSelect(newValue);
        }
      }}
      onInputChange={(_event, newInputValue) => {
        setValue(newInputValue);
      }}
      disabled={!ready}
    />
  );
};

export default MapExplore;
