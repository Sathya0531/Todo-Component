import "../App.css";
import _ from "lodash";
type EventArray = {
  id: number;
  label: string;
  state: string;
};
interface definedProps {
  setEventArray: Function;
  eventArray: EventArray[];
  eventName: string;
  currentMenu: string;
}
export const TodoEventList = (props: definedProps) => {
  const pendingItems = _.filter(props.eventArray, { state: "inProgress" });
  const completedItems = _.filter(props.eventArray, { state: "completed" });
  const finalEventArray = () => {
    if (props.currentMenu === "All") {
      return props.eventArray;
    } else if (props.currentMenu === "Active") {
      return pendingItems;
    } else if (props.currentMenu === "Completed") {
      return completedItems;
    } else {
      return [];
    }
  };
  const handleDelete = (id: number) => {
    const newEventArray = _.filter(props.eventArray, (list) => {
      return list.id !== id;
    });
    props.setEventArray(newEventArray);
  };

  const handleRadioButtonClick = (id: number) => {
    const newEventArray = _.map(props.eventArray, (list) => {
      if (id === list.id) {
        return { ...list, state: "completed" };
      } else {
        return list;
      }
    });
    props.setEventArray(newEventArray);
  };
  return (
    <div>
      <div className="event-container">
        {_.map(finalEventArray(), (list) => (
          <div className="event-list">
            <div
              className={`radio-button ${
                list.state === "completed" ? "checked" : null
              }`}
              onClick={() => handleRadioButtonClick(list.id)}
            ></div>
            <div className="todo-label">{list.label}</div>
            <div
              className="todo-label-cancel"
              onClick={() => handleDelete(list.id)}
            >
              X
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
