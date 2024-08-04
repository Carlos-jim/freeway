import React from "react";
import { Tooltip } from "react-tooltip";
import info from '../public/information.png';
import "react-tooltip/dist/react-tooltip.css";

const Tooltips = ({ content, tooltipId = "info-tooltip", place = "top", effect = "solid" }) => {
  return (
    <div className="flex justify-end">
      {/* Tooltip Button */}
      <button
        data-tooltip-id={tooltipId}
        data-tooltip-content={content}
        className="text-white font-bold py-2 px-4 rounded-full"
      >
        <img src={info} alt="Info" className="w-6 h-6" />
      </button>
      <Tooltip id={tooltipId} place={place} effect={effect} />
    </div>
  );
};

export default Tooltips;
