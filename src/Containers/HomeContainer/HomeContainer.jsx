import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LinkHoc from '../../Utils/LinkHoc';
import imageMasoneria from '../../static/media/bienvenida.jpg';
import imageBienvenida from '../../static/media/masoneria.jpg';
import imageCodigo from '../../static/media/codigo.jpg';
import postsJson from './posts.json';
import stylesJs from './HomeStyles';
import styles from './styles.module.css';

const images = [imageBienvenida, imageMasoneria, imageCodigo];

const HomeContainer = ({ classes }) => {
  return (
    <>
      <Paper classes={{ root: classes.paperStyle }} elevation={20}>
        <p className={styles.paperContent}>AL.*.G.*.D.*.G.*.A.*.D.*.U.*.</p>
        <p className={styles.paperContent}>
          Muy Leal, Ilustre, Benemérita, Firme y Perseverante Respetable Logia
          Simbólica
        </p>
        <h1 className={styles.paperTitle}>Obreros del Templo No. 81</h1>
        <p className={styles.paperContent}>
          Fundada el 21 de Diciembre de 1928 E.*. V.*.
        </p>
        <p className={styles.paperContent}>
          Jurisdiccionada a la "Muy Respetable Gran Logia Valle de México"
        </p>
      </Paper>
      <Grid container spacing={2}>
        {postsJson.map((item, key) => {
          const link = LinkHoc.generateLinkHoc();
          return (
            <Grid
              key={item.title}
              item
              xs={12}
              md={4}
              classes={{ root: classes.gridItem }}
            >
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    image={images[key]}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="large" color="primary">
                    Compartir
                  </Button>
                  <Button
                    component={link}
                    to="/post/1"
                    size="large"
                    color="primary"
                  >
                    Ver mas
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

HomeContainer.propTypes = {
  classes: PropTypes.shape({
    paperStyle: PropTypes.string,
    gridItem: PropTypes.string,
    cardRoot: PropTypes.string,
    cardMedia: PropTypes.string
  }).isRequired
};

export default withStyles(stylesJs)(HomeContainer);
