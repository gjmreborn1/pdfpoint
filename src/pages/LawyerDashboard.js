import React, {createRef, useState} from "react";
import "./LawyerDashboard.css";
import LogoutButton from "../components/auth/LogoutButton";
import PdfRenderer from "../components/pdf/PdfRenderer";
import DraggablePdfField from "../components/pdf/DraggablePdfField";

let uploadedPdf = "";

const LawyerDashboard = () => {
    // TODO: state and after "save" assign to uploadedPdf/redux
    const fileInputRef = createRef();
    const [pdfUrl, setPdfUrl] = useState("");

    const uploadPdf = e => {
        const uploadedFile = e.target.files[0];
        setPdfUrl(URL.createObjectURL(uploadedFile));
    };

    return (
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
                {pdfUrl !== "" && <PdfRenderer pdf={pdfUrl} />}
            </div>
            <div className="fields">
                <h2 className="text-center">Fields</h2>
                <ul className="fields-list">
                    <li><DraggablePdfField name="Email" icon="envelope" /></li>
                    <li><DraggablePdfField name="Signature" icon="file-signature" /></li>
                    <li><DraggablePdfField name="Checkbox" icon="check-square" /></li>
                </ul>
            </div>
        </div>
    );
};

export default LawyerDashboard;
