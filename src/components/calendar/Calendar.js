import { Helmet } from "react-helmet";
import "./calendar.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext, useEffect,useState } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";

export const Calendar = () => {
  const { theme } = useContext(ThemeContext);
 const [contributions, setContributions] = useState([]);

  return (
    <div style={{ backgroundColor: theme.secondary }}>
      <Fade bottom>
        <div className="calendar_heading">Days I Code</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            className="git-hub-chart"
            src="https://ghchart.rshah.org/VishnuPScodes"
            alt="Vishnu PS's Github chart"
          />
        </div>
      </Fade>
      <Fade bottom>
        {" "}
        <div id="stats_heading" className="calendar_heading">
          My GitHub Stats
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            className="stats_img"
            src="https://camo.githubusercontent.com/e6b719e4dd089b25ffc156ef868d0daa1a892089198d4f1204c0ee184f564ba4/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d766973686e757073636f6465732673686f775f69636f6e733d74727565266c6f63616c653d656e"
          />
        </div>{" "}
      </Fade>
    </div>
  );
};
