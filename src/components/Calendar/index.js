import { addDays, format,getWeeksInMonth } from 'date-fns'
import React, { Component } from 'react'

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state={
      date:new Date(),
    }
  }
  handlerDay =()=>{
    const {date}=this.state;
    const newDate = addDays(date,1);
    this.setState({date:newDate});
  }
  
  render() {
    const{date}=this.state;
    const result = getWeeksInMonth(new Date())
    return (
      <conteiner><section>{format(date,"dd MMMM yyy 'year', iiii ")}</section>
      <section>
        <table>
          <tr>
            <td>s</td>
            <td>m</td>
            <td>t</td>
            <td>w</td>
            <td>t</td>
            <td>f</td>
            <td>s</td>
          </tr>
        </table>
      </section>
     
      </conteiner>
    )
  }
}



export default Calendar;