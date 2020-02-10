import React from 'react';
import Grid from '@material-ui/core/Grid';
import New from './New/New';
import postsJson from '../HomeContainer/posts.json';
import styles from './styles.module.css';

const NewsContainer = () => {
  return (
    <>
      <h1 className={styles.title}>Artículos</h1>
      <div className={styles.divider} />
      <Grid container spacing={2}>
        {postsJson.map((item, key) => (
          <New title={item.title} content={item.content} />
        ))}
      </Grid>
    </>
  );
};

export default NewsContainer;
