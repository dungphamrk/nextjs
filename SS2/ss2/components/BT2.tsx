"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faChevronDown } from "@fortawesome/free-solid-svg-icons";
export default function BT2() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" bg-gray-100">
      <div className="relative inline-block w-64">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Input Label
        </label>
        <div
          className="flex items-center border border-blue-500 rounded px-2 py-1 cursor-pointer relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faClock} className="text-gray-500" />
          <input
            type="text"
            className="ml-2 flex-1 border-0 focus:ring-0    "
            placeholder=""
            readOnly
          />
          <FontAwesomeIcon
            icon={faChevronDown}
            className="ml-2 text-gray-500 absolute right-2"
          />
        </div>

        {isOpen && (
          <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {["Label 1", "Label 2", "Label 3", "Label 4"].map(
                (label, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                  >
                    <span className="ml-2">{label}</span> 
                     <input
                      type="checkbox"
                      className="form-checkbox text-blue-600 rounded focus:ring-blue-500"
                    />
                  </div>
                )
              )}
            </div>
            <div className="px-4 py-3 flex justify-between bg-gray-100">
              <button className="text-blue-600 font-semibold">Clear</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
