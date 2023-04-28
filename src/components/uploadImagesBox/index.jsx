import React, { useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 2,
    justifyContent: "center",
    alignItems: "center",
    // height: "172px",
    width: "100%",
    border: "2px dashed #aaa",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "0.5em",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
    },
  },
  uploadButton: {
    marginTop: theme.spacing(2),
  },
  input: {
    display: "none",
  },
  cardContainer: {
    display: "flex",
    gap: 4,
    marginTop: theme.spacing(2),
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "120px",
    height: "125px",
  },
  cardMedia: {
    height: "150px",
  },
}));

const UploadImagesBox = () => {
  const classes = useStyles();
  const fileInputRef = useRef(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const updatedFiles = [...uploadedFiles];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (
        file.type.startsWith("image/") &&
        file.size <= 5000000 &&
        updatedFiles.length < 4
      ) {
        updatedFiles.push(file);
      }
    }

    setUploadedFiles(updatedFiles);
  };

  return (
    <Box
      className={classes.container}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <Box sx={{ textAlign: "center" }}>
        <input
          id="upload-button"
          type="file"
          ref={fileInputRef}
          className={classes.input}
          multiple
          onChange={handleFileInputChange}
          accept="image/*"
          disabled={uploadedFiles.length >= 4}
        />
        <Button
          className={classes.uploadButton}
          onClick={() => fileInputRef.current.click()}
          disabled={uploadedFiles.length >= 4}
          variant="contained"
        >
          Upload Images
        </Button>
        <Box mt={1}>
          <Typography variant="body2" sx={{ color: "#D2D2D2CC" }}>
            Max size 5MB, .jpg .png only
          </Typography>
        </Box>
      </Box>
      <Box>
        {uploadedFiles.length > 0 ? (
          <Box className={classes.cardContainer}>
            {uploadedFiles.map((file, index) => (
              <Card key={index} className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={URL.createObjectURL(file)}
                  title={file.name}
                />
              </Card>
            ))}
          </Box>
        ) : (
          <Box>
            <Typography
              variant="body1"
              sx={{ color: (theme) => theme.palette.secondary.grey }}
            >
              Ads with pictures get 5x more views and leads
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: (theme) => theme.palette.secondary.grey }}
            >
              Upload good quality pictures with proper lighting
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: (theme) => theme.palette.secondary.grey }}
            >
              Cover all areas of your property
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default UploadImagesBox;
