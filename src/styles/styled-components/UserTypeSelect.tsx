import { useState } from "react";
import { Box, Typography, Radio } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledRadio = styled(Radio)(({ theme }) => ({
  "&.Mui-checked": {
    color: theme.palette.primary.main,
  },
}));

const UserTypeSelect = ({ onChange }: any) => {
  const [selectedType, setSelectedType] = useState(null);

  const handleChange = (event: { target: any }) => {
    setSelectedType(event.target.value);
    onChange(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 5,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "200px" }}>
        <Box
          onClick={() => handleChange({ target: { value: "business" } })}
          sx={{
            borderRadius: "15px",
            border: ".5px solid #000000",
            display: "flex",
            flexDirection: "column",
            "&:hover": {
              border: "1px solid #758BFD",
            },
          }}
        >
          <StyledRadio
            checked={selectedType === "business"}
            onChange={handleChange}
            value="business"
            name="user-type"
            sx={{ alignSelf: "end" }}
          />
          <Box ml={2}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: "2em" }}
            >
              Business Owner
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="body2"
          sx={{ fontWeight: 700, color: "#758BFD", marginTop: "1em" }}
        >
          Register your physical shop to enhance visibility and attract more
          customers.
        </Typography>
      </Box>

      <Box sx={{ maxWidth: "200px" }}>
        <Box
          onClick={() => handleChange({ target: { value: "individual" } })}
          sx={{
            borderRadius: "15px",
            border: ".5px solid #000000",
            display: "flex",
            flexDirection: "column",
            "&:hover": {
              border: "1px solid #758BFD",
            },
          }}
        >
          <StyledRadio
            checked={selectedType === "individual"}
            onChange={handleChange}
            value="individual"
            name="user-type"
            sx={{ alignSelf: "end" }}
          />
          <Box ml={2}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: "2em" }}
            >
              Individual User
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="body2"
          sx={{ fontWeight: 700, color: "#758BFD", marginTop: "1em" }}
        >
          Sign up to explore and easily locate local businesses, discover
          services, and connect.
        </Typography>
      </Box>
    </Box>
  );
};

export default UserTypeSelect;
