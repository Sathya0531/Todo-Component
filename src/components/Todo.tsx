import "../App.css";
import _ from "lodash";
import { useState } from "react";
import { TodoInputContainer } from "./TodoInputContainer";
import { TodoEventList } from "./TodoEventList";
import { TodoMenuComponent } from "./TodoMenuComponent";
type EventArray = {
  id: number;
  label: string;
  state: string;
};
export const Todo = () => {
  const [eventArray, setEventArray] = useState<EventArray[]>([]);
  const [eventName, setEventName] = useState<string>("");
  const [currentMenu, setCurrentMenu] = useState<string>("All");

  const pendingItems = _.filter(eventArray, { state: "inProgress" });
  const completedItems = _.filter(eventArray, { state: "completed" });

  return (
    <div>
      <h6 className="app-header">todos</h6>
      <TodoInputContainer
        eventArray={eventArray}
        setEventArray={setEventArray}
        eventName={eventName}
        setEventName={setEventName}
      />
      <TodoEventList
        setEventArray={setEventArray}
        eventArray={eventArray}
        eventName={eventName}
        currentMenu={currentMenu}
      />
      <TodoMenuComponent
        setEventArray={setEventArray}
        eventArray={eventArray}
        setCurrentMenu={setCurrentMenu}
        currentMenu={currentMenu}
        pendingItems={pendingItems}
        completedItems={completedItems}
      />
    </div>
  );
};
