import React, {createRef, useState} from "react";
import "./LawyerDashboard.css";
import LogoutButton from "./LogoutButton";
import {usePdf} from "@mikecousins/react-pdf";
import PdfRenderer from "./PdfRenderer";

let uploadedPdf = "";

const LawyerDashboard = () => {
    // TODO: state and after "save" assign to uploadedPdf/redux
    const fileInputRef = createRef();
    const [pdf, setPdf] = useState("");

    const uploadPdf = e => {
        const uploadedFile = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(uploadedFile);
        reader.onload = () => {
            setPdf(reader.result);
        };
    };

    return (
        // displaying pdf inside canvas --> fields ICONS
        <div>
            <h1 className="text-center">Pdfpoint</h1>
            <LogoutButton className="logout-btn" />
            <div className="action-btn-group">
                <button onClick={() => fileInputRef.current.click()}>Upload PDF</button>
                <input onChange={uploadPdf} ref={fileInputRef} type="file" style={{display: "none"}} accept=".pdf" />

                <button>Save PDF</button>
            </div>

            <div className="pdf-container">
                <h2 className="text-center">Pdf</h2>
                {pdf !== "" && <PdfRenderer pdf={pdf} />}
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
