import React, { useEffect, useState, Fragment } from "react";
import EditButton from "../../../components/dashboard/button/EditButton";
import {
  ListCol,
  ListHeader,
} from "../../../components/dashboard/ListColWithHeader";
import TopHeader from "../../../components/dashboard/TopHeader";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import Private from "../../../components/private";

export default function Add() {
  Private();
  let [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();

  const onSubmit = async (blogId) => {
    await axios.delete(`/api/blogs/${blogId}`).then(() => {
      console.log("deleted");
    });
    const remaining = data.filter((item) => item.blogId !== blogId);
    setData(remaining);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    const handledata = async () => {
      const result = await fetch(`/api/blogs`);
      const data = await result.json();
      setData(data);
    };
    handledata();
  }, []);

  return (
    <div className="card w-full">
      <TopHeader title="Blogs List" btn="Save" path="/dashboard/post/addBlog" />

      <div className="list-wrapper">
        <div className="md:grid grid-cols-2 list-header">
          <ListHeader label="Title" />
          {/* <ListHeader label="description" /> */}
          <ListHeader label="" />
        </div>
        {data?.length > 0 &&
          data.map((item) => (
            <div
              key={item.blogId}
              className="grid grid-cols-1 md:grid-cols-2 list-body"
            >
              <ListCol label="Title :" value={item.title} />
              <div>
                <div className="flex justify-end space-x-2">
                  <EditButton path={`/dashboard/post/edit/${item.blogId}`} />

                  <button
                    onClick={() => {
                      openModal();
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
              <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                  as="div"
                  className="fixed inset-0 z-100 overflow-y-auto"
                  onClose={closeModal}
                >
                  <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-70" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                      className="inline-block h-screen align-middle"
                      aria-hidden="true"
                    >
                      &#8203;
                    </span>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <div className="inline-block w-full max-w-lg p-12 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                        <div className="flex flex-col items-center justify-center">
                          <h3 className="mb-5 text-xl text-gray-800  font-medium">
                            Are you sure you want to delete? This item will be
                            deleted immediately. You cant undo this action.
                          </h3>
                          <div className="flex space-x-2">
                            <button
                              className="w-24 btn-danger bg-green-300"
                              // onClick={onSubmit}
                              onClick={() => onSubmit(item.blogId)}
                            >
                              Yes
                            </button>
                            <button
                              className="w-24 btn-success"
                              onClick={closeModal}
                            >
                              No
                            </button>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition>
            </div>
          ))}

        <div className="list-footer">
          <div className="col-span-10"></div>
          <div className="flex justify-center">
            <span className="font-semibold">TOTAL : {data?.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
