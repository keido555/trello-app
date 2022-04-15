import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

export const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}: any) => {
  const taskCardDeleteButton = (id: any) => {
    setTaskCardsList(taskCardsList.filter((e: any) => e.id !== id));
  };
  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};
