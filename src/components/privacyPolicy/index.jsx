import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

export default function PrivacyPolicy() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Box className={classes.hrr}>
        <Typography
          variant="h2"
          sx={{
            fontSize: 38,
            fontWeight: 900,
            color: (theme) => theme.palette.background.footer,
          }}
        >
          Privacy Policy
        </Typography>
        <hr className="linee" />
      </Box>
      <div className="innerData">
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 500,
            color: (theme) => theme.palette.common.black,
          }}
        >
          At Playasa.do, we take your privacy seriously. This Privacy Policy
          outlines how we collect, use, and disclose your personal information.
        </Typography>
        {Data.map(({ heading, des }) => {
          return (
            <>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 900,
                    fontSize: 16,
                    color: (theme) => theme.palette.common.black,
                  }}
                >
                  {" "}
                  {heading}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: (theme) => theme.palette.common.black,
                  }}
                >
                  {" "}
                  {des}
                </Typography>
              </Box>
            </>
          );
        })}
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 500,
            color: (theme) => theme.palette.common.black,
          }}
        >
          By using our web app, you consent to the terms of our Privacy Policy.
        </Typography>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
    " & .innerData": {
      display: "flex",
      flexDirection: "column",
      rowGap: 25,
    },
  },

  hrr: {
    padding: "20px 0px",
    width: 290,

    " & .linee ": {
      height: 3,
      border: "none",
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

const Data = [
  {
    heading: "1. Information We Collect",

    des: "We may collect personal information such as your name, email address, phone number, and other contact information when you sign up for our web app, communicate with us, or fill out a form on our website. We may also collect non-personal information such as your IP address and browser type.",
  },
  {
    heading: "2. How We Use Your Information",

    des: "We may use your personal information to communicate with you, provide customer support, and improve our web app. We may also use your information to personalize your experience and provide relevant content and advertisements.",
  },
  {
    heading: "3. Disclosure of Your Information",

    des: "We may disclose your personal information to third-party service providers who help us operate our web app, such as email marketing services or customer support providers. We may also disclose your information if required by law or to protect our rights or the rights of others.",
  },
  {
    heading: "4. Security of Your Information",

    des: "We take appropriate measures to protect your personal information from unauthorized access, disclosure, or use. However, we cannot guarantee that your information will always be secure.",
  },
  {
    heading: "5. Your Choices",

    des: "You have the right to opt-out of our email marketing communications and to access, modify, or delete your personal information at any time.",
  },
  {
    heading: "6. Children's Privacy",

    des: "Our web app is not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13..",
  },
  {
    heading: "7. Changes to Our Privacy Policy",

    des: "We reserve the right to modify or update our Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on our website..",
  },
  {
    heading: "8. Contact Us",

    des: "If you have any questions or concerns about our Privacy Policy, please contact us at privacy@playasa.do.",
  },
];
