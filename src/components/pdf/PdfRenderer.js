import React, {useState} from "react";
import "./PdfRenderer.css";
import {Document, Page, pdfjs} from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfRenderer = ({pdf}) => {
    const [page, setPage] = useState(1);
    const [numPages, setNumPages] = useState(null);

    const previousPage = () => {
        if(page - 1 >= 1) {
            setPage(page - 1);
        }
    };

    const nextPage = () => {
        if(page + 1 <= numPages) {
            setPage(page + 1);
        }
    };

    return (
        <>
            <Document
                file={pdf}
                className="pdf-canvas"
                onLoadSuccess={({numPages}) => setNumPages(numPages)}
            >
                <Page pageNumber={page} />
            </Document>
            <div className="pdf-controls-group">
                <button onClick={previousPage}>Previous page</button>
                <p>Page {page} / {numPages}</p>
                <button onClick={nextPage}>Next page</button>
            </div>
        </>
    );
}

export default PdfRenderer;
