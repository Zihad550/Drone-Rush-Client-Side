import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

const Review = ({ review }) => {
  const { userName, message, rating, img, productName } = review;

  return (
    <Grid item xs={12} md={3}>
      <Card sx={{ boxShadow: 3, height: "100%" }}>
        <CardMedia
          component="img"
          width="100%"
          image={img}
          alt="green iguana"
        />
        <CardContent sx={{ pb: 0, my: "auto" }}>
          <Typography gutterBottom variant="h6" component="h4">
            {productName} Reviewed by {userName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            About the product: {message}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 0, mt: 2, display: "flex", alignItems: "center" }}
          >
            Rating:
            <Rating name="read-only" value={parseInt(rating)} readOnly />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Review;
