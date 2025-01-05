import { Box, Typography } from "@mui/material";
import ProfileSidebar from "../../../components/ProfileSidebar";
import ReviewsCard from "../../../components/ReviewsCard";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user-slice";

const Reviews = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <ProfileSidebar>
      <Box>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: "#000", fontWeight: 700, fontSize: "1.8rem" }}
          >
            Reviews
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#000", fontSize: "1rem", margin: "1em 0" }}
          >
            Easily find all reviews you've written here
          </Typography>

          <ReviewsCard
            sender={user?.username || ""}
            reciever={"Aisha's Scents"}
            message={`
              They have amazing burgers and their staffs are really nice. I highly
              recommend. 😁😋`}
            rating={4}
            isMyReview={true}
          />
        </Box>
      </Box>
    </ProfileSidebar>
  );
};

export default Reviews;
