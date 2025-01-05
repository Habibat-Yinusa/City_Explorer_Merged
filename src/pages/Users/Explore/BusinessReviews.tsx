import { Box, LinearProgress, Rating, Typography } from "@mui/material";
import { CenteredBox } from "../../../styles/styled-components/styledBox";
import { ManageAccounts } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
import meBanner from "../../../assets/meBanner.svg";
import { FilledButton } from "../../../styles/styled-components/styledButtons";
import { useParams } from "react-router-dom";
import { useGetBusinessQuery } from "./businessApiSlice";
import { useState } from "react";
import ReviewsCard from "../../../components/ReviewsCard";
import CreateReviewModal from "../../../components/CreateReviewModal";
import AwardedPointsModal from "../../../components/AwardedPointsModal";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user-slice";

const BusinessReviews = () => {
  const user = useSelector(selectCurrentUser);
  const { businessId } = useParams();
  const { data, isLoading } = useGetBusinessQuery(businessId as string);

  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [openPointsModal, setOpenPointsModal] = useState(false);

  const handleCloseReviewModal = () => {
    setOpenReviewModal(false);
  };

  const handleSubmitReview = () => {
    setOpenReviewModal(false);
    setOpenPointsModal(true);
  };

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
          <Box sx={{ marginTop: "1em", width: "100%" }}>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "1em",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  width: "45%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="body2">Overrall Reviews</Typography>
                  <Rating name="read-only" value={4} readOnly size="small" />
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 800 }}>
                  30k Reviews
                </Typography>
              </Box>
              <Box sx={{ width: "45%" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <Typography variant="body2">5</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={80}
                    sx={{ width: "80%" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <Typography variant="body2">4</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={70}
                    sx={{ width: "80%" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <Typography variant="body2">3</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={50}
                    sx={{ width: "80%" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <Typography variant="body2">2</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={25}
                    sx={{ width: "80%" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <Typography variant="body2">1</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={10}
                    sx={{ width: "80%" }}
                  />
                </Box>
              </Box>
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
                  padding: ".7em",
                  backgroundColor: "#ececec80",
                  borderRadius: "50px",
                  marginTop: "1em",
                  cursor: "pointer",
                }}
              >
                <ManageAccounts sx={{ color: "#fff" }} />
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
              Reviews
            </Typography>
            {/* <Add
              sx={{
                border: "1px solid #3884FD",
                color: "#3884FD",
                borderRadius: "50px",
              }}
            /> */}
            <FilledButton onClick={() => setOpenReviewModal(true)}>
              Write a review
            </FilledButton>
          </CenteredBox>
          <ReviewsCard
            sender={"Mubarak"}
            reciever={"Usman's Cafe"}
            message={"Best Cafe spot in town"}
            rating={5}
            isMyReview={false}
          />

          <CreateReviewModal
            open={openReviewModal}
            onClose={handleCloseReviewModal}
            onSubmitSuccess={handleSubmitReview}
          />
          <AwardedPointsModal
            open={openPointsModal}
            onClose={() => setOpenPointsModal(false)}
            username={user?.username || ""}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BusinessReviews;
