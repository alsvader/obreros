import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import MenuOptions from './MenuOptions.json';
import LinkHoc from '../../Utils/LinkHoc';
import styles from './styles';

const MenuBar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          {MenuOptions.map(item => {
            const link = LinkHoc.generateLinkHoc();
            return (
              <Typography key={item.to} variant="h6" className={classes.title}>
                <Link
                  component={link}
                  to={item.to}
                  color="inherit"
                  classes={{ root: classes.linksHeaders }}
                >
                  {item.label}
                </Link>
              </Typography>
            );
          })}
        </Toolbar>
      </Container>
    </AppBar>
  </div>
);

export default withStyles(styles)(MenuBar);
