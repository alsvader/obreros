import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuBar from '../../Components/MenuBar/MenuBar';
import Routes from '../../Config/Routes';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <BrowserRouter>
      <MenuBar />
      <Container>
        <Switch>
          {Routes.ROUTES.map(item => (
            <Route key={item.path} path={item.path} exact={item.exact}>
              <item.component />
            </Route>
          ))}
        </Switch>
        <div className={styles.footer}>
          <p>
            COPYRIGHT 2020, Obreros del Templo No. 81. Todos los derechos
            reservados. | @alsvader
          </p>
        </div>
      </Container>
    </BrowserRouter>
  );
};

export default Layout;
