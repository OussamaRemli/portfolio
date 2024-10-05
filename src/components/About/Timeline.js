// src/Timeline.js
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        date="2020"
        contentStyle={{
          background: "rgba(0, 0, 0, 0)",
          color: "#fff",
          border: "1px solid #1e797d",
        }}
        contentArrowStyle={{ borderRight: "7px solid #1e797d" }}
        iconStyle={{ background: "#1e797d", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Baccalaureate of Physics Science
        </h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="2020-2021"
        contentStyle={{
          background: "rgba(0, 0, 0, 0)",
          color: "#1e797",
          border: "1px solid #1e797d",
        }}
        contentArrowStyle={{ borderRight: "7px solid #1e797d" }}
        iconStyle={{ background: "#1e797d", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">1st Year of Preparatory Cycle</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2021-2022"
        contentStyle={{
          background: "rgba(0, 0, 0, 0)",
          color: "#1e797",
          border: "1px solid #1e797d",
        }}
        contentArrowStyle={{ borderRight: "7px solid #1e797d" }}
        iconStyle={{ background: "#1e797d", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">2nd year of Preparatory Cycle</h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="2022-2023"
        contentStyle={{
          background: "rgba(0, 0, 0, 0)",
          color: "#1e797",
          border: "1px solid #1e797d",
        }}
        contentArrowStyle={{ borderRight: "7px solid #1e797d" }}
        iconStyle={{ background: "#1e797d", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          1st Year Computer Science
        </h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="2023-2024"
        contentStyle={{
          background: "rgba(0, 0, 0, 0)",
          color: "#1e797",
          border: "1px solid #1e797d",
        }}
        contentArrowStyle={{ borderRight: "7px solid #1e797d" }}
        iconStyle={{ background: "#1e797d", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          2nd Year Computer Science
        </h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2024-2025"
        contentStyle={{
          background: "rgba(0, 0, 0, 0)",
          color: "#1e797",
          border: "1px solid #1e797d",
        }}
        contentArrowStyle={{ borderRight: "7px solid #1e797d" }}
        iconStyle={{ background: "#1e797d", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          3nd Year Computer Science
        </h3>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
