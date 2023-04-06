import "../App.css";
import _ from "lodash";
import { TodoStatusButton } from "./TodoStatusButton";
import { TodoClearCompletedButton } from "./TodoClearCompletedButton";
type EventArray = {
  id: number;
  label: string;
  state: string;
};
interface definedProps {
  setEventArray: Function;
  eventArray: EventArray[];
  setCurrentMenu: Function;
  currentMenu: string;
  pendingItems: EventArray[];
  completedItems: EventArray[];
}
export const TodoMenuComponent = (props: definedProps) => {
  const controlButtons = ["All", "Active", "Completed"];
  const handleMenuClick = (menu: string) => {
    props.setCurrentMenu(menu);
  };
  const handleClearCompleted = () => {
    const newEventArray = _.filter(props.eventArray, { state: "inProgress" });
    props.setEventArray(newEventArray);
  };
  return (
    <div>
      <div className="menu-list">
        <TodoStatusButton pendingItems={props.pendingItems} />
        {_.map(controlButtons, (name) => (
          <div
            className={`menu-button ${
              props.currentMenu === name ? "checked" : null
            }`}
            onClick={() => handleMenuClick(name)}
          >
            {name}
          </div>
        ))}
        {!_.isEmpty(props.completedItems) && (
          <TodoClearCompletedButton
            handleClearCompleted={handleClearCompleted}
          />
        )}
      </div>
    </div>
  );
};
