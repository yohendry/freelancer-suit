import React from "react";
import { Switch, Route } from 'react-router-dom';
import clsx from 'clsx';
import PageAnimationRenderer from "@Layout/PageAnimationRenderer";

import routes from '@Conf/routes.js';

function Body() {
  const classes = {
    main: clsx('flex-grow', 'p-4', 'overflow-y-scroll')
  }
  return (
    <main className={classes.main}>
      <Switch>
        {routes.map(({ path, Component, exact, name }) => (
          <Route exact={exact} path={path} key={name}>
            <PageAnimationRenderer>
              <Component />
            </PageAnimationRenderer>
          </Route>
        ))}
      </Switch>
    </main>
  );
}

export default Body;
