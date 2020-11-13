import React from "react";
import "./LawyerDashboard.css";

const LawyerDashboard = () => {
    return (
        // TODO: Add logout button (right upper corner)
        <div>
            <h1 className="text-center">Pdfpoint</h1>
            <div className="action-btn-group">
                <button>Upload PDF</button>
                <button>Save PDF</button>
            </div>

            <div className="pdf-container">
                <h2 className="text-center">Pdf</h2>
                <canvas className="pdf-canvas" />
            </div>
            <div className="fields">
                <h2 className="text-center">Fields</h2>
                <ul className="fields-list">
                    <li>
                        <div className="field-item">
                            Email
                            <i />
                        </div>
                    </li>
                    <li>
                        <div className="field-item">
                            Signature
                            <i />
                        </div>
                    </li>
                    <li>
                        <div className="field-item">
                            Checkbox
                            <i />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LawyerDashboard;
