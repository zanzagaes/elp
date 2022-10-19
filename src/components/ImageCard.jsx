import React from "react";
import { Card, CardContent, CardMedia, Collapse, Typography } from "@mui/material";
import '../css/image.css'

const ImageCard = ({ card, checked }) => <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className="image-card">
        <CardMedia
          className="media"
          image={card.imageUrl}
          title="Prácticas"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className="title"
          >
            {card.title}
          </Typography>
          <Typography
            component="p"
            className="desc"
          >
            {card.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>;

export default ImageCard;