import React, {createRef, useState} from "react";
import "./LawyerDashboard.css";
import LogoutButton from "../components/auth/LogoutButton";
import PdfRenderer from "../components/pdf/PdfRenderer";
import DraggablePdfField from "../components/pdf/DraggablePdfField";
import {PDFDocument, StandardFonts, degrees, rgb} from "pdf-lib";

const LawyerDashboard = () => {
    const fileInputRef = createRef();
    const [pdfUrl, setPdfUrl] = useState("");
    const [pdfDoc, setPdfDoc] = useState(null);
    let helveticaFont;

    const setPdfs = async blob => {
        const fileReader = new FileReader();
        fileReader.onload = async () => {
            let pdfDoc = await PDFDocument.load(new Uint8Array(fileReader.result));
            helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

            setPdfDoc(pdfDoc);
        };

        setPdfUrl(URL.createObjectURL(blob));
        fileReader.readAsArrayBuffer(blob);
    };

    const reloadPdfComponents = async () => {
        const uint8buf = await pdfDoc.save();
        await setPdfs(new Blob([uint8buf.buffer], {type: "application/pdf"}));
    };

    const renderExampleForm = async () => {
        const page = pdfDoc.addPage([550, 750]);
        const form = pdfDoc.getForm();
        // Add the superhero text field and description
        page.drawText('Enter your favorite superhero:', { x: 50, y: 700, size: 20 })

        const superheroField = form.createTextField('favorite.superhero')
        superheroField.setText('One Punch Man')
        superheroField.addToPage(page, { x: 55, y: 640 })

        // Add the rocket radio group, labels, and description
        page.drawText('Select your favorite rocket:', { x: 50, y: 600, size: 20 })

        page.drawText('Falcon Heavy', { x: 120, y: 560, size: 18 })
        page.drawText('Saturn IV', { x: 120, y: 500, size: 18 })
        page.drawText('Delta IV Heavy', { x: 340, y: 560, size: 18 })
        page.drawText('Space Launch System', { x: 340, y: 500, size: 18 })

        const rocketField = form.createRadioGroup('favorite.rocket')
        rocketField.addOptionToPage('Falcon Heavy', page, { x: 55, y: 540 })
        rocketField.addOptionToPage('Saturn IV', page, { x: 55, y: 480 })
        rocketField.addOptionToPage('Delta IV Heavy', page, { x: 275, y: 540 })
        rocketField.addOptionToPage('Space Launch System', page, { x: 275, y: 480 })
        rocketField.select('Saturn IV')

// Add the gundam check boxes, labels, and description
        page.drawText('Select your favorite gundams:', { x: 50, y: 440, size: 20 })

        page.drawText('Exia', { x: 120, y: 400, size: 18 })
        page.drawText('Kyrios', { x: 120, y: 340, size: 18 })
        page.drawText('Virtue', { x: 340, y: 400, size: 18 })
        page.drawText('Dynames', { x: 340, y: 340, size: 18 })

        const exiaField = form.createCheckBox('gundam.exia')
        const kyriosField = form.createCheckBox('gundam.kyrios')
        const virtueField = form.createCheckBox('gundam.virtue')
        const dynamesField = form.createCheckBox('gundam.dynames')

        exiaField.addToPage(page, { x: 55, y: 380 })
        kyriosField.addToPage(page, { x: 55, y: 320 })
        virtueField.addToPage(page, { x: 275, y: 380 })
        dynamesField.addToPage(page, { x: 275, y: 320 })

        exiaField.check()
        dynamesField.check()

// Add the planet dropdown and description
        page.drawText('Select your favorite planet*:', { x: 50, y: 280, size: 20 })

        const planetsField = form.createDropdown('favorite.planet')
        planetsField.addOptions(['Venus', 'Earth', 'Mars', 'Pluto'])
        planetsField.select('Pluto')
        planetsField.addToPage(page, { x: 55, y: 220 })

// Add the person option list and description
        page.drawText('Select your favorite person:', { x: 50, y: 180, size: 18 })

        const personField = form.createOptionList('favorite.person')
        personField.addOptions([
            'Julius Caesar',
            'Ada Lovelace',
            'Cleopatra',
            'Aaron Burr',
            'Mark Antony',
        ])
        personField.select('Ada Lovelace')
        personField.addToPage(page, { x: 55, y: 70 })

// Just saying...
        page.drawText(`* Pluto should be a planet too!`, { x: 15, y: 15, size: 15 })

        await reloadPdfComponents();
    };

    return (
        <div>
            <h1 className="text-center">Pdfpoint</h1>
            <LogoutButton className="logout-btn" />
            <div className="action-btn-group">
                <button onClick={() => fileInputRef.current.click()}>Upload PDF</button>
                <input onChange={e => setPdfs(e.target.files[0])} ref={fileInputRef} type="file" style={{display: "none"}} accept=".pdf" />

                <button onClick={renderExampleForm}>Save PDF</button>
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
