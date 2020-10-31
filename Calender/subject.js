import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

class subject extends Component {

    state = {
  
      events: [
  
        {
          title: "English",
          start: moment().toDate(),
          end: moment().add(1,"hours").toDate()
  
        },
        {
  
          start: moment().add(2,"hour").toDate(),
          end: moment().add(3,"hours").toDate(),
          title: "Hindi"
        },
        {
  
          start: moment().add(4,"hour").toDate(),
          end: moment().add(5,"hours").toDate(),
          title: "Science"
        }
  
      ]
  
    }
}

export default subject;