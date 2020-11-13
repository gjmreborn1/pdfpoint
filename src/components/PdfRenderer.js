import React, {createRef, useState} from "react";
// import {usePdf} from "@mikecousins/react-pdf";
import "./PdfRenderer.css";
// import pdfjsLib from "pdfjs/lib/";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker";
import pdfjs from "@bundled-es-modules/pdfjs-dist/build/pdf";
// import pdfjsworker from "@bundled-es-modules/pdfjs-dist/build/pdf.worker";
import PDFJS from "pdfjs-dist/web/pdf_viewer";

const PdfRenderer = ({pdf}) => {
    const canvasRef = createRef();
    const [page, setPage] = useState(1);
    pdf = atob(pdf.slice(pdf.indexOf("base64,") + 7));

    console.log(PDFJS);

    return (
        <div>
            <canvas ref={canvasRef} className="pdf-canvas" />
            {/*TODO: Page navigation*/}
            {/*{pdfDocument.numPages && (*/}
            {/*    <nav>*/}
            {/*        <ul className="pager"*/}
            {/*    </nav>*/}
            {/*)}*/}
        </div>
    );
}

export default PdfRenderer;
