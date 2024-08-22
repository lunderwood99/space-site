import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";

import { Modal } from "../atoms/Modal/Modal";
import { OperativeButton } from "../atoms/OperativeButton/OperativeButton";

export interface DeleteShowModalProps {
  visible: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
}

export const DeleteShowModal: FunctionComponent<DeleteShowModalProps> = ({
  visible,
  setVisibility,
}) => {
  const [showId, setShowId] = useState("");

  const onSubmit = async () => {
    const body = { showId };
    await fetch("api/shows", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setVisibility(false);
    window.location.reload();
  };

  return (
    <Modal visible={visible}>
      <h3 className="mr-auto text-xl">Delete a Show</h3>
      <form>
        <div className="mb-4">
          <label className="block mb-2">Show ID</label>
          <input
            className="rounded text-black"
            type="text"
            value={showId}
            onChange={(e) => setShowId(e.currentTarget.value)}
          />
        </div>
      </form>
      <div className="ml-auto flex flex-row gap-6">
        <OperativeButton operation="add" onClick={onSubmit}>
          Delete
        </OperativeButton>
        <OperativeButton
          operation="delete"
          onClick={() => setVisibility(false)}
        >
          Cancel
        </OperativeButton>
      </div>
    </Modal>
  );
};
