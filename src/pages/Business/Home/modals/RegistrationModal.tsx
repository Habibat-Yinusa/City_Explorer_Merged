import { useState } from "react";
import { useFormik } from "formik";
import {
  TextField,
  Box,
  Modal,
  Typography,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import * as yup from "yup";
import { Close } from "@mui/icons-material";
import { RegisterBusiness } from "../../../../types/register.types";
import {
  BgButton,
  FilledButton,
  FilledInvertedButton,
} from "../../../../styles/styled-components/styledButtons";
import successIcon from "../../../../assets/success-icon.svg";
import { useRegisterBusinessMutation } from "../../../Auth/authApiSlice";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const RegistrationModal = ({ open, handleClose }: ModalProps) => {
  const [step, setStep] = useState(0);
  const [registerRequest, { isLoading }] = useRegisterBusinessMutation();

  const formik = useFormik<RegisterBusiness & { description: string }>({
    initialValues: {
      name: "",
      description: "",
      category: "",
      items: [],
      logo: "",
      location: "",
      openHours: [],
      phone: "",
      email: "",
      website: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Required"),
      description: yup.string().required("Required"),
      category: yup.string().required("Required"),
      items: yup.array(),
      logo: yup.string(),
      location: yup.string().required("Required"),
      openHours: yup.string(),
      phone: yup.string().required("Required"),
      email: yup.string().required("Required"),
      website: yup.string(),
    }),
    onSubmit: async (values: RegisterBusiness) => {
      console.log("Form submitted with values:", values);
      try {
        await registerRequest(values).unwrap();
        setStep(4);
      } catch (error) {
        console.error(error);
        alert("Something went wrong! Please try again");
      }
    },
  });

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
            <FormControl fullWidth>
              <TextField
                name="name"
                label="Add your Business Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                sx={{ margin: ".7em 0" }}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                name="description"
                label="Describe your Business"
                fullWidth
                value={formik.values.description}
                multiline
                rows={4}
                onChange={formik.handleChange}
                sx={{ margin: ".7em 0" }}
              />
            </FormControl>
          </>
        );
      case 1:
        return (
          <>
            <FormControl fullWidth>
              {/* <TextField
                name="category"
                label="Select your Business Category"
                value={formik.values.category}
                fullWidth
                onChange={formik.handleChange}
                sx={{ margin: ".7em 0" }}
              /> */}
              <InputLabel
                id="category"
                sx={{
                  fontSize: ".75rem",
                  fontWeight: 400,
                  color: "#000000",
                  marginBottom: ".5em",
                  textAligh: "left",
                }}
              >
                Select your Business Category
              </InputLabel>
              <Select
                value={formik.values.category}
                onChange={formik.handleChange}
                labelId="category"
                id="category"
                name="category"
              >
                <MenuItem value="food">Food</MenuItem>
              </Select>
            </FormControl>
          </>
        );
      case 2:
        return (
          <>
            <FormControl fullWidth>
              <TextField
                name="location"
                label="Enter your Business Location"
                fullWidth
                value={formik.values.location}
                onChange={formik.handleChange}
                sx={{ margin: ".7em 0" }}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                name="openHours"
                label="Set your Business Hours"
                fullWidth
                value={formik.values.openHours}
                onChange={formik.handleChange}
                sx={{ margin: ".7em 0" }}
              />
            </FormControl>
          </>
        );
      case 3:
        return (
          <>
            <FormControl fullWidth>
              <TextField
                name="phone"
                label="Phone Number"
                fullWidth
                value={formik.values.phone}
                onChange={formik.handleChange}
                sx={{ margin: ".7em 0" }}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                type="email"
                name="email"
                label="Email Address"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                sx={{ margin: ".7em 0" }}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                name="website"
                label="Website"
                fullWidth
                value={formik.values.website}
                onChange={formik.handleChange}
                sx={{ margin: ".7em 0" }}
              />
            </FormControl>
          </>
        );
      case 4:
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box sx={{ width: "8em" }}>
              <img src={successIcon} style={{ width: "100%" }} />
            </Box>
            <Typography
              variant="h3"
              sx={{ fontSize: "1.8rem", fontWeight: 700 }}
            >
              Setup Complete
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "1rem" }}>
              Your business profile is now set up. You can edit your information
              at any time in your profile settings. Welcome aboard!
            </Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40%",
            backgroundColor: "#fff",
            padding: "2.5em",
            borderRadius: "15px",
          }}
        >
          {step < 4 && (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.5em",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 700, fontSize: "1.5rem" }}
                >
                  Business Registration
                </Typography>
                <IconButton onClick={handleClose}>
                  <Close sx={{ color: "#000" }} />
                </IconButton>
              </Box>
            </Box>
          )}
          <Box>
            <Box component="form" onSubmit={formik.handleSubmit}>
              {renderStepContent(step)}
              <Box
                sx={{
                  marginTop: "2em",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                {step > 0 && step < 4 && (
                  <FilledInvertedButton
                    sx={{ width: "7em" }}
                    onClick={() => setStep(step - 1)}
                  >
                    Previous
                  </FilledInvertedButton>
                )}
                {step < 3 && (
                  <FilledButton
                    sx={{ width: "7em" }}
                    onClick={() => setStep(step + 1)}
                  >
                    Next
                  </FilledButton>
                )}
                {step === 3 && (
                  <FilledButton
                    type="submit"
                    disabled={isLoading}
                    // onClick={() => console.log("Formik errors:", formik.errors)} // Log when button is clicked
                  >
                    {isLoading ? "Submitting" : "Submit"}
                  </FilledButton>
                )}
                {step === 4 && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <BgButton sx={{ width: "50%" }} onClick={handleClose}>
                      Done
                    </BgButton>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default RegistrationModal;
