//react
import React from "react";
import { Link } from "react-router-dom";

//m-ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "55%",
    marginTop: 50,
    marginLeft: 150
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
}));


export default function ItemCard({details}) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
            <Link
            className={classes.link}
            // to={{
            //     pathname: `restaurant/${restUrl}`,
            //     state: {
            //     restId: _id,
            //     },
            // }}

            ></Link>
      <CardMedia
        className={classes.cover}
        image={details.image}
        title="Live from space album cover"
      />
      <Link
            className={classes.link}
            // to={{
            //     pathname: `restaurant/${restUrl}`,
            //     state: {
            //     restId: _id,
            //     },
            // }}

            >
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {details.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {`Price : ${details.price}`}
          </Typography>
        </CardContent>
      </div>
      </Link>
    </Card>
    </>
  );
}
