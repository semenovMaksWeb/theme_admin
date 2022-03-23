import React, {lazy, Suspense} from "react";
import {
    Switch,
    Route,
} from "react-router-dom";

export  const  RouteConfig:React.SFC = () =>{
    return(
        <Suspense fallback={<p>Ожидания загрузки</p>} >
                <Switch>
                    <Route  path="*">
                        <div>404</div>
                    </Route>
                </Switch>

        </Suspense>
    )
}