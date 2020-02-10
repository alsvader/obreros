import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LinkHoc from '../../../Utils/LinkHoc';
import imageBienvenida from '../../../static/media/bienvenida.jpg';
import stylesJs from '../../HomeContainer/HomeStyles';

const New = ({ classes, title, content }) => {
  return (
    <>
      <Grid
        key={title}
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
              image={imageBienvenida}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" color="primary">
              Compartir
            </Button>
            <Button
              component={LinkHoc.generateLinkHoc()}
              to="/post/1"
              size="large"
              color="primary"
            >
              Ver mas
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

New.propTypes = {
  classes: PropTypes.shape({
    gridItem: PropTypes.string,
    cardRoot: PropTypes.string,
    cardMedia: PropTypes.string
  }).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default withStyles(stylesJs)(New);
// http://www.angelfire.com/yt2/obreros/principal.html
