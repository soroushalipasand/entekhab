import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";

function MediaCard() {
  const characters = useSelector((state) => state.rickandmorty.characters);
  const loading = useSelector((state) => state.rickandmorty.loading);
  return (
    <Grid
      container
      sx={{ maxWidth: 1500, margin: "auto", justifyContent: "center" }}
    >
      {(loading ? Array.from(new Array(20)) : characters).map((item, index) => (
        <Grid item md={3} xs={12}>
          <Card sx={{ m: 2 }}>
            <CardHeader
              avatar={
                loading ? (
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                ) : (
                  <Avatar alt="Ted talk" src={item.image} />
                )
              }
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  `${item.name}`
                )
              }
              subheader={
                loading ? (
                  <Skeleton animation="wave" height={10} width="40%" />
                ) : (
                  `${item.gender}`
                )
              }
            />
            {loading ? (
              <Skeleton
                sx={{ height: 500 }}
                animation="wave"
                variant="rectangular"
              />
            ) : (
              <CardMedia
                component="img"
                image={item.image}
                alt="Nicola Sturgeon on a TED talk stage"
              />
            )}

            <CardContent>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="p"
                >
                  {item.species}
                  {item.created}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

MediaCard.propTypes = {
  loading: PropTypes.bool,
};

export default function CharactersCard() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <MediaCard loading />
    </Box>
  );
}
