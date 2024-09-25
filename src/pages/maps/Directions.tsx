import React, { useEffect, useState } from "react";
import { Box, List, ListItemText, Typography } from "@mui/material";
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { FilledButton } from "../../styles/styled-components/styledButtons";

interface Location {
  lat: number;
  lng: number;
}

interface DirectionsProps {
  origin: Location;
  destination: Location;
}

const Directions: React.FC<DirectionsProps> = ({ origin, destination }) => {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService | null>(null);
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer | null>(null);
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer || !origin || !destination)
      return;

    directionsService
      .route({
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });
  }, [directionsService, directionsRenderer, origin, destination]);

  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          bottom: 200,
          right: 0,
          backgroundColor: "#ECECEC",
          padding: "1em",
        }}
      >
        <Typography variant="h3" sx={{ fontSize: "1.2rem" }}>
          {selected.summary}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "1rem" }}>
          {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "1rem" }}>
          Distance: {leg.distance?.text}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "1rem" }}>
          Duration: {leg.duration?.text}
        </Typography>
        <Typography variant="h3" sx={{ fontSize: "1.2rem", marginTop: "1em" }}>
          Available routes:
        </Typography>
        <List>
          {routes.map((route, index) => (
            <ListItemText key={route.summary}>
              <FilledButton onClick={() => setRouteIndex(index)}>
                {route.summary}
              </FilledButton>
            </ListItemText>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Directions;
