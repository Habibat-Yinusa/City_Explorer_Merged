import { Box, Typography } from "@mui/material";
import serviceIcon from "../../../assets/serviceImg.svg";

const Services = () => {
  return (
    <Box sx={{ margin: "5em 0" }} id="home">
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "2rem", md: "2.3rem", lg: "2.5rem" },
          fontWeight: 800,
          margin: "1em 0",
        }}
      >
        Our <span style={{ color: "#2085BE" }}>Services</span>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
        id="services"
      >
        <Box sx={{ width: { xs: "22em", sm: "28em", md: "28em", lg: "35em" } }}>
          <img src={serviceIcon} style={{ width: "100%" }} />
        </Box>
        <Box
          sx={{
            width: { xs: "90%", md: "42%" },
            textAlign: { xs: "left", md: "left" },
          }}
        >
          <ul>
            <li>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: ".9rem", md: "1rem" },
                  margin: "2em 0",
                  lineHeight: "30px",
                }}
              >
                ⁠Personalized City Discovery – Get tailored recommendations for
                restaurants, events, and experiences.
              </Typography>
            </li>

            <li>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: ".9rem", md: "1rem" },
                  margin: "2em 0",
                  lineHeight: "30px",
                }}
              >
                ⁠Event Promotion & Management – List and manage events to reach
                the right audience.
              </Typography>
            </li>
            <li>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: ".9rem", md: "1rem" },
                  margin: "2em 0",
                  lineHeight: "30px",
                }}
              >
                ⁠Business Visibility & Growth – Connect local businesses with
                potential customers.
              </Typography>
            </li>
            <li>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: ".9rem", md: "1rem" },
                  margin: "2em 0",
                  lineHeight: "30px",
                }}
              >
                ⁠Seamless Ticketing & Reservations – Book tickets and make
                reservations easily.
              </Typography>
            </li>
            <li>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: ".9rem", md: "1rem" },
                  margin: "2em 0",
                  lineHeight: "30px",
                }}
              >
                ⁠Real-Time Updates & Alerts– Stay informed about local
                happenings and special deals.
              </Typography>
            </li>
          </ul>
          {/* <Typography
            variant="body2"
            sx={{
              fontSize: { xs: ".9rem", md: "1rem" },
              margin: "1em 0",
              lineHeight: "30px",
            }}
          >
            This platform goes beyond traditional means of communication by
            incorporating SMS functionality, enabling even those in remote,
            rural areas with limited internet access to stay informed. Whether
            it's agricultural insights, educational updates, financial
            advisories, or more, ConnectED transcends geographical barriers to
            bring timely and relevant information to diverse populations.
          </Typography> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
