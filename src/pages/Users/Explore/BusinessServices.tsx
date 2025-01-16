import {
  Box,
  Grid,
  LinearProgress,
  Typography,
  IconButton,
} from "@mui/material";
import { CenteredBox } from "../../../styles/styled-components/styledBox";
import { Add, Edit, ManageAccounts } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
import meBanner from "../../../assets/meBanner.svg";
import { FilledButton } from "../../../styles/styled-components/styledButtons";
import { useNavigate, useParams } from "react-router-dom";
import { useGetBusinessQuery } from "./businessApiSlice";
import { useSelector } from "react-redux";
import {
  selectCurrentBusinessId,
  selectCurrentUserRole,
} from "../../../store/user-slice";

const BusinessServices = () => {
  const navigate = useNavigate();
  const userRole = useSelector(selectCurrentUserRole);
  const businessId = useSelector(selectCurrentBusinessId);
  const { businessId: urlBusinessId } = useParams();

  const targetBusinessId = userRole === "business" ? businessId : urlBusinessId;

  const { data, isLoading } = useGetBusinessQuery(targetBusinessId as string, {
    skip: !businessId,
  });

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          // alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          {/* <CenteredBox sx={{ width: "7em", marginTop: "2em" }}>
            <img src={data?.logo} alt="" style={{ width: "100%" }} />
          </CenteredBox> */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.7rem", md: "2rem" },
              color: "#000",
              marginTop: ".4em",
              textTransform: "capitalize",
            }}
          >
            {data?.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: ".85rem", md: "1rem" },
              color: "#000",
              margin: ".3em 0",
            }}
          >
            {data?.location}
          </Typography>
          <CenteredBox
            sx={{
              // width: { xs: "100%", sm: "90%", md: "90%", lg: "80%" },
              width: "100%",
              marginTop: ".5em",
              justifyContent: "space-between",
            }}
          >
            <FilledButton
              sx={{
                width: "48%",
                fontSize: { xs: ".8rem", md: "1rem" },
                padding: ".5rem 1rem",
              }}
            >
              30k Reviews
            </FilledButton>
            <FilledButton
              sx={{
                width: "48%",
                fontSize: { xs: ".8rem", md: "1rem" },
                padding: ".5rem 1rem",
              }}
            >
              100 photos
            </FilledButton>
          </CenteredBox>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                backgroundColor: "#fff",
                width: "100%",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textDecoration: "none",
                margin: "1em 0",
                padding: "1em",
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#000",
                    textTransform: "capitalize",
                    fontSize: "1rem",
                  }}
                >
                  {data?.name}
                </Typography>
              </Box>
              {userRole === "business" && (
                <IconButton onClick={() => console.log("Edit")}>
                  <Edit sx={{ color: "#758BFD" }} />
                </IconButton>
              )}
            </Box>

            <Box
              sx={{
                backgroundColor: "#fff",
                width: "100%",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textDecoration: "none",
                margin: "1em 0",
                padding: "1em",
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#000",
                    textTransform: "capitalize",
                  }}
                >
                  Description
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#000",
                    textTransform: "capitalize",
                    fontSize: "1rem",
                  }}
                >
                  {data?.description}
                </Typography>
              </Box>
              {userRole === "business" && (
                <IconButton onClick={() => console.log("Edit")}>
                  <Edit sx={{ color: "#758BFD" }} />
                </IconButton>
              )}
            </Box>

            <Box
              sx={{
                backgroundColor: "#fff",
                width: "100%",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textDecoration: "none",
                margin: "1em 0",
                padding: "1em",
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#000",
                    textTransform: "capitalize",
                  }}
                >
                  Category
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#000",
                    textTransform: "capitalize",
                    fontSize: "1rem",
                  }}
                >
                  {data?.category}
                </Typography>
              </Box>
              {userRole === "business" && (
                <IconButton onClick={() => console.log("Edit")}>
                  <Edit sx={{ color: "#758BFD" }} />
                </IconButton>
              )}
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "55%" }}>
          <CenteredBox
            sx={{
              justifyContent: "start",
              backgroundImage: `url(${meBanner})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              padding: "1.5em 2em",
              // width: "60%",
              borderRadius: "10px",
            }}
          >
            <CenteredBox sx={{ flexDirection: "column", width: "100%" }}>
              <CenteredBox
                sx={{
                  alignSelf: "end",
                  padding: userRole === "business" ? "0" : ".7em",
                  backgroundColor: "#ececec80",
                  borderRadius: "50px",
                  marginTop: "1em",
                  cursor: "pointer",
                }}
              >
                {userRole === "business" ? (
                  <IconButton onClick={() => navigate("settings")}>
                    <ManageAccounts sx={{ color: "#fff" }} />
                  </IconButton>
                ) : (
                  <IconButton>
                    <ManageAccounts sx={{ color: "#fff" }} />
                  </IconButton>
                )}
              </CenteredBox>
              <Typography
                variant="h3"
                sx={{ color: "#fff", fontWeight: 700, padding: "1em 0" }}
              >
                {data?.name}
              </Typography>
            </CenteredBox>
          </CenteredBox>
          <CenteredBox
            sx={{ justifyContent: "space-between", marginTop: "1em" }}
          >
            <Typography
              variant="body2"
              sx={{ color: "#000", fontWeight: 700, fontSize: "1.5rem" }}
            >
              Services
            </Typography>
            {userRole === "business" && (
              <IconButton onClick={() => console.log("Add item")}>
                <Add
                  sx={{
                    border: "1px solid #3884FD",
                    color: "#3884FD",
                    borderRadius: "50px",
                  }}
                />
              </IconButton>
            )}
          </CenteredBox>
          {data?.items && data?.items.length <= 0 ? (
            <CenteredBox>
              <Typography
                variant="body2"
                sx={{ color: "#ABABAB", fontWeight: 700, fontSize: "1rem" }}
              >
                No product added
              </Typography>
            </CenteredBox>
          ) : (
            <Grid container spacing={2} sx={{}}>
              {data?.items.map((item) => (
                <Grid item xs={4} key={item._id}>
                  <Box
                    sx={{
                      borderRadius: "5px",
                      background: "#fff",
                      padding: "1em",
                    }}
                  >
                    <Box>
                      <img
                        src={item.image}
                        alt={item.description}
                        style={{ width: "100%" }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{}}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" sx={{}}>
                        {item.price}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default BusinessServices;
