import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import UserLogout from "../components/logout.component";
import TimeTable from "../components/timeTable.component";
import CourseContent from "../components/courseContent.component";
import Grades from "../components/grades.component";

function Routes() {
    return (
            <Switch>
                <Route path={["/logout"]} component={UserLogout} />
                <Route path="/calendar" component={TimeTable} />
                <Route path="/grades" component={Grades} />
                <Route path="/careers" component={Grades} />
                <Route path="/discussionForum" component={Grades} />
                <Route path="/sports" component={Grades} />
                <Route path="/cultural" component={Grades} />
                <Route path="/contactUs" component={Grades} />
                <Route path="/coursecontent" component={CourseContent} />
            </Switch>
    )
}

export default Routes;