import { Box, Typography, Button } from "@mui/material";
import { CenteredBox } from "../../styles/styled-components/styledBox";
import walletBg from "../../assets/walletBg.svg";
import { FilledButton } from "../../styles/styled-components/styledButtons";
import {
  AddCircleOutline,
  CallMade,
  CallReceived,
  North,
  PhoneAndroid,
  South,
  Undo,
  WorkspacesOutlined,
} from "@mui/icons-material";
import medal from "../../assets/medal.svg";
import { Link } from "react-router-dom";

const Wallet = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#fff", borderRadius: "30px" }}>
        <CenteredBox
          sx={{
            justifyContent: "start",
            backgroundImage: `url(${walletBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "30px",
            // paddingBottom: { xs: "5em", md: "1em" },
            height: { md: "20em", lg: "15em" },
            // minHeight: "15em",
          }}
        >
          <Box sx={{ textAlign: "center", width: "100%", margin: "2.5em 0" }}>
            <Typography
              variant="body2"
              sx={{ fontSize: "1rem", color: "#fff", marginTop: "2.5em" }}
            >
              Balance (NGN)
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "1.5rem",
                color: "#fff",
                marginBottom: "2em",
                fontWeight: 700,
              }}
            >
              339,876,543.21
            </Typography>
          </Box>
        </CenteredBox>
        <CenteredBox>
          <CenteredBox
            sx={{
              gap: { xs: 1, md: 2 },
              padding: "1em 0",
              width: { md: "80%" },
            }}
          >
            <Box sx={{ textAlign: "center", width: "100%" }}>
              <Button sx={{ backgroundColor: "#758BFD" }}>
                <CallMade
                  sx={{ fontSize: { xs: ".9rem", md: "1rem" }, color: "#fff" }}
                />
              </Button>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: ".8em", md: "1rem" },
                  color: "#758BFD",
                  marginTop: ".5em",
                }}
              >
                Send
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center", width: "100%" }}>
              <Button sx={{ backgroundColor: "#758BFD" }}>
                <CallReceived
                  sx={{ fontSize: { xs: ".9rem", md: "1rem" }, color: "#fff" }}
                />
              </Button>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: ".8em", md: "1rem" },
                  color: "#758BFD",
                  marginTop: ".5em",
                }}
              >
                Receive
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center", width: "100%" }}>
              <Button sx={{ backgroundColor: "#758BFD" }}>
                <AddCircleOutline
                  sx={{ fontSize: { xs: ".9rem", md: "1rem" }, color: "#fff" }}
                />
              </Button>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: ".8em", md: "1rem" },
                  color: "#758BFD",
                  marginTop: ".5em",
                }}
              >
                Top-Up
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center", width: "100%" }}>
              <Button sx={{ backgroundColor: "#758BFD" }}>
                <PhoneAndroid
                  sx={{ fontSize: { xs: ".9rem", md: "1rem" }, color: "#fff" }}
                />
              </Button>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: ".8em", md: "1rem" },
                  color: "#758BFD",
                  marginTop: ".5em",
                }}
              >
                Airtime
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center", width: "100%" }}>
              <Button sx={{ backgroundColor: "#758BFD" }}>
                <WorkspacesOutlined
                  sx={{ fontSize: { xs: ".9rem", md: "1rem" }, color: "#fff" }}
                />
              </Button>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: ".8em", md: "1rem" },
                  color: "#758BFD",
                  marginTop: ".5em",
                }}
              >
                More
              </Typography>
            </Box>
          </CenteredBox>
        </CenteredBox>
      </Box>
      <CenteredBox sx={{ width: "100%", margin: "1em 0" }}>
        <CenteredBox
          sx={{
            flexDirection: "column",
            backgroundColor: "#758BFD",
            width: { xs: "100%", md: "80%" },
            padding: "1em",
            borderRadius: "30px",
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontWeight: 700, fontSize: { xs: ".9rem", md: "1rem" } }}
          >
            Use your explore points to purchase airtime or mobile data
          </Typography>
          <CenteredBox
            sx={{
              gap: 1.5,
              marginTop: "1em",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <CenteredBox sx={{ gap: 1 }}>
              <Box sx={{ width: "4em" }}>
                <img src={medal} alt="" style={{ width: "100%" }} />
              </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: ".9rem", md: "1rem" } }}
              >
                Use the explore app daily to get more points
              </Typography>
            </CenteredBox>
            <FilledButton
              sx={{
                backgroundColor: "#fff",
                color: "#758BFD",
                fontSize: { xs: ".9rem", md: "1rem" },
                "&:hover": {
                  backgroundColor: "#758BFD",
                  color: "#fff",
                  borderColor: "#fff",
                },
              }}
            >
              Redeem
            </FilledButton>
          </CenteredBox>
        </CenteredBox>
      </CenteredBox>
      <CenteredBox>
        <CenteredBox
          sx={{ width: { xs: "100%", md: "80%" }, flexDirection: "column" }}
        >
          <CenteredBox sx={{ justifyContent: "space-between", width: "100%" }}>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, fontWeight: 700 }}
            >
              Transactions
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                fontWeight: 700,
                color: "#758BFD",
              }}
            >
              <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
                See all
              </Link>
            </Typography>
          </CenteredBox>
          {transactions.map((transaction) => (
            <CenteredBox
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                padding: "1em",
                borderRadius: "15px",
                margin: ".3em 0",
              }}
              key={transaction.id}
            >
              <CenteredBox
                sx={{ justifyContent: "space-between", width: "100%" }}
              >
                <CenteredBox sx={{ gap: 1 }}>
                  <CenteredBox
                    sx={{
                      backgroundColor:
                        transaction.status === "Successful"
                          ? "#1A992E80"
                          : transaction.status === "Pending"
                          ? "#FFC107"
                          : "#EA5A47",
                      padding: ".7em",
                      borderRadius: "50px",
                      color: "#fff",
                      fontSize: { xs: ".8rem", md: "1rem" },
                    }}
                  >
                    {transaction.transactionIcon}
                  </CenteredBox>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ fontSize: { xs: ".9rem", md: "1rem" } }}
                    >
                      {transaction.from}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: ".5rem", md: ".6rem" },
                        color: "#898989",
                      }}
                    >
                      {transaction.date}
                    </Typography>
                  </Box>
                </CenteredBox>
                <Box sx={{ textAlign: "right" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: ".9rem", md: "1rem" },
                      fontWeight: 700,
                    }}
                  >
                    ₦{transaction.amount}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: ".5rem", md: ".6rem" },
                      color:
                        transaction.status === "Successful"
                          ? "#1A992E80"
                          : transaction.status === "Pending"
                          ? "#FFC107"
                          : "#EA5A47",
                    }}
                  >
                    {transaction.status}
                  </Typography>
                </Box>
              </CenteredBox>
            </CenteredBox>
          ))}
        </CenteredBox>
      </CenteredBox>
    </Box>
  );
};

const transactions = [
  {
    id: 1,
    from: "Transfer from Elwakil",
    amount: "30,000,000.91",
    date: "Feb 28th, 2024",
    status: "Successful",
    transactionIcon: <South />,
  },
  {
    id: 2,
    from: "Transfer from Elwakil",
    amount: "30,000,000.91",
    date: "Feb 28th, 2024",
    status: "Pending",
    transactionIcon: <North />,
  },
  {
    id: 3,
    from: "Transfer from Elwakil",
    amount: "30,000,000.91",
    date: "Feb 28th, 2024",
    status: "Reversed",
    transactionIcon: <Undo />,
  },
  {
    id: 4,
    from: "Transfer from Elwakil",
    amount: "30,000,000.91",
    date: "Feb 28th, 2024",
    status: "Successful",
    transactionIcon: <South />,
  },
];

export default Wallet;
