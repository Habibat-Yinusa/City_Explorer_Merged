import { Close } from "@mui/icons-material";
import {
  Box,
  Typography,
  Modal,
  IconButton,
  Rating,
  FormControl,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { FilledButton } from "../styles/styled-components/styledButtons";
import AwardedPointsModal from "./AwardedPointsModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user-slice";

interface CreateReviewModalProps {
  open: boolean;
  onClose: () => void;
  onSubmitSuccess: () => void;
}

interface reviewInput {
  rating: number;
  review: string;
}

const CreateReviewModal = ({
  open,
  onClose,
  onSubmitSuccess,
}: CreateReviewModalProps) => {
  const user = useSelector(selectCurrentUser);

  const [openPointsModal, setOpenPointsModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      rating: 0,
      review: "",
    },
    validationSchema: yup.object({
      rating: yup.number().required("Rating is required"),
      review: yup.string().required("Review is required"),
    }),
    onSubmit: (values: reviewInput) => {
      console.log(values);
      formik.resetForm();
      onSubmitSuccess();
    },
  });

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "10px",
          width: { xs: "90%", md: "50%" },
        }}
      >
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Create Review
            </Typography>
            <IconButton
              onClick={onClose}
              sx={{
                fontSize: "1rem",
                color: "#888",
              }}
            >
              <Close />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: { xs: "100%", sm: "70%", md: "100%" },
                maxWidth: "350px",
              }}
              component="form"
              onSubmit={formik.handleSubmit}
            >
              <FormControl error fullWidth>
                <Box>
                  <Typography variant="body2">Tap a star to review</Typography>
                  <Rating
                    name="rating"
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                  />
                </Box>
              </FormControl>
              <FormControl error fullWidth>
                <TextField
                  type="text"
                  id="review"
                  label="Review"
                  value={formik.values.review}
                  name="review"
                  onChange={formik.handleChange}
                  error={formik.touched.review && Boolean(formik.errors.review)}
                  helperText={formik.touched.review && formik.errors.review}
                  sx={{ width: "100%", marginTop: "2em" }}
                />
              </FormControl>

              <FilledButton
                sx={{
                  margin: "1em 0",
                  width: "100%",
                  color: "#fff",
                }}
                type="submit"
                //   disabled={isLoading}
              >
                Submit
              </FilledButton>
              <AwardedPointsModal
                open={openPointsModal}
                onClose={() => setOpenPointsModal(false)}
                username={user?.username || ""}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateReviewModal;
