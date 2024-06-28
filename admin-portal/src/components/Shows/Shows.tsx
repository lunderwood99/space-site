"use client";

import { FunctionComponent, useState } from "react";

import { Show, ShowsTable } from "./ShowsTable";
import { OperativeButton } from "../OperativeButton/OperativeButton";
import { Modal } from "../Modal/Modal";
import { AddShowModal } from "./AddShowModal";

export interface ShowsProps {}

export const Shows: FunctionComponent<ShowsProps> = () => {
  const shows: Show[] = [
    {
      location: "The Bar",
      date: 1000,
      link: "https://test.com",
    },
    {
      location: "The Bar",
      date: 1000,
      link: "https://test.com",
    },
    {
      location: "The Bar",
      date: 1000,
      link: "https://test.com",
    },
    {
      location: "The Bar",
      date: 1000,
      link: "https://test.com",
    },
    {
      location: "The Bar",
      date: 1000,
      link: "https://test.com",
    },
    {
      location: "The Bar",
      date: 1000,
      link: "https://test.com",
    },
    {
      location: "The Bar",
      date: 1000,
      link: "https://test.com",
    },
    {
      location: "The Bar",
      date: 1000,
      link: "https://test.com",
    },
  ];

  const [isAddShowModalVisible, setIsAddShowModalVisible] = useState(false);

  return (
    <div className="flex flex-col items-center w-full h-fit gap-6 border rounded-lg border-solid p-6">
      <h2 className="text-3xl mr-auto">Shows</h2>
      <ShowsTable shows={shows} />
      <div className="ml-auto flex flex-row gap-6">
        <OperativeButton
          operation="add"
          onClick={() => setIsAddShowModalVisible(true)}
        >
          Add Show
        </OperativeButton>
        <OperativeButton operation="delete">Delete Show</OperativeButton>
      </div>
      <AddShowModal
        visible={isAddShowModalVisible}
        setVisibility={setIsAddShowModalVisible}
      />
    </div>
  );
};
