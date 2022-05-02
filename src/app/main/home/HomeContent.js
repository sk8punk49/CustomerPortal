import { memo } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function HomeContent() {
  return (
    <div>
      <h1 className="py-16 font-semibold">New Customer Portal</h1>
      <h4 className="pb-12 font-medium">New Customer Content</h4>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={3} sm={6} md={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/assets/images/backgrounds/Products _Engine_Banner_2.jpg"
                  alt="Tradeshow"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tradeshow Ordering
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Save big on parts, tools, equipment, and more from leading
                    manufacturers
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={2} sm={6} md={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/assets/images/backgrounds/Products _BodyShop_Banner_0.jpg"
                  alt="Premiums"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Premiums
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Redeem big on leading manufacturers
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={2} sm={6} md={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/assets/images/backgrounds/jeep-snow-banner.jpg"
                  alt="Premiums"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Fall Winter Ordering
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Redeem big on leading manufacturers
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default memo(HomeContent);
