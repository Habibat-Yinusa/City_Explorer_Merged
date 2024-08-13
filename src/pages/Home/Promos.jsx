import { Box, Rating, Typography } from "@mui/material";
import promoBurger from "../../assets/promo-burger.svg";
import { FilledButton } from "../../styles/styled-components/styledButtons";

const Promos = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box sx={{ width: "75%" }}>
        <Typography variant="h4" sx={{ fontSize: "2rem", fontWeight: 700 }}>
          Jennies Burger
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            padding: "1.5em",
            width: "70%",
            border: ".5px solid #00000040",
            borderRadius: "30px",
            margin: "1.5em 0",
          }}
        >
          <Box sx={{ width: "60%" }}>
            <Typography
              variant="h4"
              sx={{ fontSize: "1.6rem", fontWeight: 900 }}
            >
              TOP DEAL
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontSize: "1.6rem", fontWeight: 400, margin: ".3em 0" }}
            >
              30% discounts on all orders for this week.
            </Typography>
            <FilledButton>Order</FilledButton>
          </Box>
          <Box sx={{ width: "13em" }}>
            <img src={promoBurger} style={{ width: "100%" }} />
          </Box>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ fontSize: "1.6rem", fontWeight: 700 }}>
            Others from Jennies burger
          </Typography>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "30px",
              padding: "1.2em",
              width: "55%",
              margin: "1em 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: "7em" }}>
                <img src={promoBurger} style={{ width: "100%" }} />
              </Box>
              <Box sx={{ width: "60%" }}>
                <Typography variant="body2" sx={{ fontSize: "1rem" }}>
                  Salad and Chicken Burger with extra toppings
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "1.6rem" }}>
                  $25
                </Typography>
              </Box>
            </Box>
            <Rating name="read-only" value={4} readOnly size="small" />
          </Box>
        </Box>
      </Box>

      {/* Ads space below */}
      <Box
        sx={{
          borderLeft: "1px solid #0000004D",
          width: "25%",
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "80%" }}>
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: "1em",
              borderRadius: "10px",
              marginBottom: "1.5em",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                backgroundColor: "#964848",
                color: "#fff",
                fontWeight: 700,
                borderRadius: "30px",
                fontSize: "1rem",
                padding: ".5em",
                textAlign: "center",
              }}
            >
              Jennies Burger
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: ".9rem", marginTop: "1em" }}
            >
              Here are top deals and promos from Jennies burger on Explore, just
              for you. Share to a friend.
            </Typography>
          </Box>
          <Box
            sx={{
              border: "1px solid #758BFD",
              borderRadius: "10px",
              marginBottom: "1.5em",
              height: "15em",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Promos;
