import React, {lazy, Suspense} from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
const Page_404 = lazy(() => import("./pages/404"))
export  const  RouteConfig:React.SFC = () =>{
    return(
        <Suspense fallback={<p>Ожидания загрузки</p>} >
                <Switch>
                    <Route  exact path="/" component={Page_404}/>
                </Switch>

        </Suspense>
    )
}