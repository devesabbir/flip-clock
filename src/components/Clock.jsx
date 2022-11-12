//External Lib Import
import React, { Component } from "react";
import './Clock.css'

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houre: "00",
      minutes: "00",
      seconds: "00",
      session: "pm",
    };
  }

  clock = () => {
    const date = new Date();
    const houre = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const session = houre >= 12 ? "pm" : "am";

    const formatTwelveHoure = houre > 12 ? houre - 12 : houre;
    const formatHoure =
      formatTwelveHoure < 10 ? "0" + formatTwelveHoure : formatTwelveHoure;
    const formatMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formatSeconds = seconds < 10 ? "0" + seconds : seconds;

    this.setState({
      houre: formatHoure,
      minutes: formatMinutes,
      seconds: formatSeconds,
      session,
    });
  };


  componentDidMount = () => {
    setTimeout(this.clock, 1000);
  };
  
  componentDidUpdate = () => {
    setTimeout(this.clock, 1000);
  };

  render() {
    const { houre, minutes, seconds, session } = this.state;

    return (
      <div className="wrapper py-7 bg-[#d1d0d2]">
         <h1 className="text-5xl text-center font-mono">Mechanical Clock</h1>
       <div className="flex justify-center min-h-screen w-[900px] mx-auto items-center">
        <div className="grid cloc_grid grid-flow-col gap-5 text-center auto-cols-max">
          <div>
            <div className="count_title">  Hour</div>
            <div className="flex flex-col p-4 bg-[#ffffff] rounded text-[#c84033]">
            <span className="countdown font-mono text-5xl">{houre}</span>
          </div>
          </div>
           
           <div>
               <div className="count_title">Minutes</div>
                <div className="flex flex-col p-4 bg-[#ffffff] rounded text-[#c84033]">
              <span className="countdown font-mono text-5xl">{minutes}</span>
          
              </div>
           </div>
         
           <div>
              <div className="count_title">
              Seconds  
              </div>
              <div className="flex flex-col p-4 bg-[#ffffff] rounded text-[#c84033]">
            <span className="countdown font-mono text-5xl">{seconds}</span>
          </div>
           </div>
          
          <div>
               <div className="count_title">
                    Session 
               </div>
          <div className="flex flex-col p-4 bg-[#ffffff] rounded text-[#c84033]">
            <span className="countdown font-mono text-5xl">{session}</span>       
          </div>
          </div>
        
        </div>
       </div>
      </div>
    );
  }
}

export default Clock;
