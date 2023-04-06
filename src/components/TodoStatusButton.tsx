import "../App.css";
import _ from "lodash";
type EventArray = {
  id: number;
  label: string;
  state: string;
};
interface definedProps {
  pendingItems: EventArray[];
}
export const TodoStatusButton = (props: definedProps) => {
  return (
    <div className="status-button">{`${_.size(
      props.pendingItems
    )} items left`}</div>
  );
};
