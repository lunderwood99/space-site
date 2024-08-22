"use client";

import { FunctionComponent, useEffect, useState } from "react";

import { Show, ShowsTable } from "./ShowsTable";
import { OperativeButton } from "../atoms/OperativeButton/OperativeButton";
import { AddShowModal } from "./AddShowModal";
import { DeleteShowModal } from "./DeleteShowModal";

export interface ShowsProps {}

export const Shows: FunctionComponent<ShowsProps> = () => {
  const [isAddShowModalVisible, setIsAddShowModalVisible] = useState(false);
  const [isDeleteShowModalVisible, setIsDeleteShowModalVisible] =
    useState(false);
  const [shows, setShows] = useState<Show[]>();

  const fetchShows = async () => {
    const res = await fetch("api/shows");
    const shows = await res.json();
    return shows;
  };

  useEffect(() => {
    fetchShows().then((shows) => setShows(shows));
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-fit gap-6 border rounded-lg border-solid p-6">
      <h2 className="text-3xl mr-auto">Shows</h2>
      {shows ? <ShowsTable shows={shows} /> : null}
      <div className="ml-auto flex flex-row gap-6">
        <OperativeButton
          operation="add"
          onClick={() => setIsAddShowModalVisible(true)}
        >
          Add Show
        </OperativeButton>
        <OperativeButton
          operation="delete"
          onClick={() => setIsDeleteShowModalVisible(true)}
        >
          Delete Show
        </OperativeButton>
      </div>
      <AddShowModal
        visible={isAddShowModalVisible}
        setVisibility={setIsAddShowModalVisible}
      />
      <DeleteShowModal
        visible={isDeleteShowModalVisible}
        setVisibility={setIsDeleteShowModalVisible}
      />
    </div>
  );
};
