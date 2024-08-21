import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useState,
} from "react";

import { Modal } from "../Modal/Modal";
import { OperativeButton } from "../OperativeButton/OperativeButton";

export interface AddShowModalProps {
  visible: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
}

export const AddShowModal: FunctionComponent<AddShowModalProps> = ({
  visible,
  setVisibility,
}) => {
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [ticketLink, setTicketLink] = useState("");
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  const onSubmit = () => {
    const show = {
      location: venue,
      date: date,
      link: ticketLink
    }
  }

  return (
    <Modal visible={visible}>
      <h3 className="mr-auto text-xl">Add a Show</h3>
      <form>
        <div className="mb-4">
          <label className="block mb-2">Location</label>
          <input
            className="rounded text-black"
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.currentTarget.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Date</label>
          <input
            className="rounded text-black"
            type="date"
            value={date}
            onChange={(e) => setDate(e.currentTarget.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Link</label>
          <input
            className="rounded text-black"
            type="url"
            value={ticketLink}
            onChange={(e) => setTicketLink(e.currentTarget.value)}
          />
        </div>
      </form>
      <div className="ml-auto flex flex-row gap-6">
        <OperativeButton operation="add" onClick={onSubmit}>Add</OperativeButton>
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
