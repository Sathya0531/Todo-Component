import "../App.css";
import _ from "lodash";
import { useState } from "react";
import downArrow from "../images/downArrow.png";
type EventArray = {
  id: number;
  label: string;
  state: string;
};
interface definedProps {
  setEventArray: Function;
  eventArray: EventArray[];
  eventName: string;
  setEventName: Function;
}
export const TodoInputContainer = (props: definedProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    props.setEventName(newValue);
  };
  const handleKeyboardEvent = (e: any) => {
    if (e.key === "Enter") {
      const newValue = e.target.value;
      props.setEventName(newValue);
      const newEventArray = [
        ...props.eventArray,
        { id: Math.random(), label: props.eventName, state: "inProgress" },
      ];
      props.setEventArray(newEventArray);
      props.setEventName("");
    }
  };

  const handleToggle = () => {
    const newEventArray = _.map(props.eventArray, (list) => {
      return { ...list, state: "completed" };
    });
    props.setEventArray(newEventArray);
  };
  return (
    <div>
      <div className="outer-input-container">
        <img
          src={downArrow}
          className="toggle-icon"
          onClick={handleToggle}
        ></img>
        <input
          className="input-container"
          placeholder="What needs to be done?"
          onChange={onChange}
          onKeyDown={handleKeyboardEvent}
          value={props.eventName}
          id="btnControl"
        />
      </div>
    </div>
  );
};
