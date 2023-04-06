import "../App.css";
import _ from "lodash";
interface definedProps {
  handleClearCompleted: Function;
}
export const TodoClearCompletedButton = (props: definedProps) => {
  return <div onClick={(e) => props.handleClearCompleted()}>Clear Completed</div>;
};
