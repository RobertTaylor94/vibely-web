import { Card, CardContent, Typography, Button } from "@mui/material";
import React from "react";

function NewsCard({title,description,url,urlToImage, source}) {
  return (
    <Card sx={{ margin: "10px" }}>
      <CardContent>
        <Typography>{source.Name}</Typography>
        <Button href={url} target="_blank">{title}</Button>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  )
}

export default NewsCard;
