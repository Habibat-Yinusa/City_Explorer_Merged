import { CenteredBox } from "../../../styles/styled-components/styledBox";
import { Box, Typography } from "@mui/material";
import { FilledButton } from "../../../styles/styled-components/styledButtons";
import voucher1 from "../../../assets/voucher1.jpg";
import voucher2 from "../../../assets/voucher2.jpg";

const Points = () => {
  return (
    <CenteredBox>
      <CenteredBox
        sx={{ width: "100%", alignItems: "start", flexDirection: "column" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "2rem", md: "2.2rem" },
            fontWeight: 700,
            marginBottom: ".5em",
          }}
        >
          Your NFTs
        </Typography>
        <CenteredBox sx={{ width: "100%" }}>
          <CenteredBox
            sx={{
              width: { md: "95%", lg: "90%" },
              backgroundColor: "#758BFD",
              color: "#fff",
              padding: "1.5em",
              justifyContent: "space-between",
              borderRadius: "7px",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <CenteredBox
              sx={{
                width: { xs: "100%", md: "41%" },
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontSize: "1rem", marginRight: { sm: "1em" } }}
              >
                NFTs empower City Explorer with unique digital collectibles,
                rewarding user engagement, creating monetization avenues, and
                unlocking exclusive perks and experiences.
              </Typography>
              <FilledButton
                sx={{
                  color: "#fff",
                  border: "1px solid #fff",
                  marginTop: "1em",
                  marginBottom: { xs: "1em", md: "0" },
                  "&:hover": {
                    color: "#758BFD",
                    backgroundColor: "#fff",
                  },
                }}
              >
                Read more
              </FilledButton>
            </CenteredBox>
            <CenteredBox
              sx={{
                width: { xs: "100%", md: "52%" },
                justifyContent: "space-between",
                backgroundColor: "#ececec",
              }}
            >
              <CenteredBox sx={{ width: "55%" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: {
                      xs: "1.2rem",
                      sm: "1.4em",
                      md: "1.6em",
                      lg: "1.8rem",
                      textTransform: "uppercase",
                      textAlign: "center",
                      color: "#000",
                      width: "100%",
                    },
                  }}
                >
                  Discount Voucher
                </Typography>
              </CenteredBox>

              <CenteredBox
                sx={{
                  flexDirection: "column",
                  alignItems: "end",
                  width: "48%",
                  backgroundColor: "#F2D16A",
                  padding: "1em",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                  }}
                >
                  Discount
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: {
                      xs: "2.5rem",
                      md: "3rem",
                      textTransform: "uppercase",
                    },
                  }}
                >
                  30%
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                >
                  Off
                </Typography>
              </CenteredBox>
            </CenteredBox>
          </CenteredBox>
        </CenteredBox>
        <CenteredBox sx={{ width: "100%", marginTop: "1em" }}>
          <CenteredBox
            sx={{
              width: { md: "95%", lg: "90%" },
              backgroundColor: "#758BFD",
              justifyContent: "space-between",
              padding: "1.5em",
              borderRadius: "7px",
            }}
          >
            <Box sx={{ width: "32%", cursor: "pointer" }}>
              <img src={voucher1} alt="" style={{ width: "100%" }} />
            </Box>
            <Box sx={{ width: "32%", cursor: "pointer" }}>
              <img src={voucher2} alt="" style={{ width: "100%" }} />
            </Box>
            <Box sx={{ width: "32%", cursor: "pointer" }}>
              <img src={voucher2} alt="" style={{ width: "100%" }} />
            </Box>
          </CenteredBox>
        </CenteredBox>
      </CenteredBox>
    </CenteredBox>
  );
};

export default Points;
