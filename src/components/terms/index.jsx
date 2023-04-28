import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

export default function Terms() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Box className={classes.hrr}>
        <Typography
          variant="h2"
          sx={{
            fontSize: 36,
            fontWeight: 900,
            color: (theme) => theme.palette.background.footer,
          }}
        >
          Terms Of Services
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
          Welcome to Playasa.do, a web app designed to provide information about
          beachfront real estate properties in the Dominican Republic. These
          Terms of Service outline your rights and obligations when using our
          web app.
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
          By using our web app, you consent to the terms of our Terms of Service
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
    width: 390,

    " & .linee ": {
      height: 3,
      marginRight: 68,
      width: "80%",
      border: "none",
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

const Data = [
  {
    heading: "1. Acceptance of Terms",

    des: "By using our web app, you agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use our web app.",
  },
  {
    heading: "2. Use of Our Web App",

    des: "You may use our web app for informational purposes only. You may not copy, modify, distribute, or transmit any content from our web app without our prior written consent.",
  },
  {
    heading: "3. User Content",

    des: "You may submit user-generated content to our web app, such as reviews or comments. By submitting user content, you grant us a non-exclusive, perpetual, royalty-free, and fully sub-licensable license to use, modify, adapt, publish, translate, create derivative works from, distribute, and display your user content throughout the world.You represent and warrant that your user content does not violate any third-party rights, including intellectual property or privacy rights. We reserve the right to remove any user content that violates these terms or is deemed inappropriate.",
  },
  {
    heading: "4. Intellectual Property Rights",

    des: "All content on our web app, including text, graphics, logos, and images, is the property of Playasa.do or its content providers and is protected by international copyright laws. You may not use any content from our web app without our prior written consent.",
  },
  {
    heading: " 5. Disclaimer of Warranties",

    des: `Our web app is provided "as is" and without warranty of any kind, whether express or implied. We make no warranties or representations about the accuracy, completeness, or reliability of any content on our web app or about the results to be obtained from using our web app`,
  },
  {
    heading: " 6. Limitation of Liability",

    des: "To the extent permitted by law, Playasa.do and its affiliates, officers, directors, employees, and agents shall not be liable for any damages, including direct, indirect, incidental, special, or consequential damages, arising from your use of our web app.",
  },
  {
    heading: "7. Indemnification",

    des: "You agree to indemnify and hold harmless Playasa.do and its affiliates, officers, directors, employees, and agents from any claim, demand, or damage, including reasonable attorneys' fees, arising from your use of our web app or your violation of these Terms of Service.",
  },
  {
    heading: "8. Changes to our Terms of Service",

    des: " We reserve the right to modify or update our Terms of Service at any time. We will notify you of any changes by posting the new Terms of Service on our website.",
  },
  {
    heading: "9. Governing Law and Jurisdiction",

    des: " These Terms of Service shall be governed by and construed in accordance with the laws of the Dominican Republic. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of the Dominican Republic.",
  },
  {
    heading: " 10. Contact Us",

    des: " If you have any questions or concerns about our Terms of Service, please contact us at legal@playasa.do..",
  },
];
