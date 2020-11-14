import React from "react";
import "./DraggablePdfField.css";

const DraggablePdfField = ({name, icon}) => {
    return (
        <div className="field-item">
            <span className="field-start">
               <i className="fas fa-ellipsis-v" />
               <i className="fas fa-ellipsis-v" />
            </span>
            <span>{name}</span>
            <i className={`fas fa-${icon} field-icon`} />
        </div>
    );
};

export default DraggablePdfField;
