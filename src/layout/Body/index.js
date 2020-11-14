import React from "react";
import { Switch, Route } from 'react-router-dom';
import PageAnimationRenderer from "../../layout/PageAnimationRenderer";

import routes from '../../conf/routes.js';

function Body() {
  return (
    <main className={"flex-grow p-4 overflow-y-scroll"}>
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
