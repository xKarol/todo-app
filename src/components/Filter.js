import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import {
  FILTER_ALL,
  FILTER_COMPLETED,
  FILTER_UNCOMPLETED,
} from "../constants/filter";
import FilterOption from "./FilterOption";

export default function Filter() {
  const { setFilter, filter } = useContext(TodoContext);

  return (
    <div className="container__filter">
      <FilterOption
        name={"all"}
        onClick={() => setFilter(FILTER_ALL)}
        active={filter === FILTER_ALL}
      />
      <FilterOption
        name={"active"}
        onClick={() => setFilter(FILTER_UNCOMPLETED)}
        active={filter === FILTER_UNCOMPLETED}
      />
      <FilterOption
        name={"completed"}
        onClick={() => setFilter(FILTER_COMPLETED)}
        active={filter === FILTER_COMPLETED}
      />
    </div>
  );
}
