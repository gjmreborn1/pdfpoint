# Pdfpoint

PoC that allows lawyers and participants to sign in. For now there
are two hard-coded accounts, one for the lawyer and second for participant.

Lawyer logs in, and:
1. Uploads a pdf (usually a contract).
2. Drags some fields and sign in - his view consists of pdf in the center, drag-and-drop right panel and few buttons.
3. Save (share pdf with participant).

Participant logs in, and:
1. Sees the previously prepared (by the lawyer) pdf.
2. Fills the fields, signature
3. Save (let lawyer retrieve the fields values and download it f.e. in csv format).

# Input fields
* Signature field - drawing popup
* Email field
* Checkbox

# Libraries
* React
* Pdfjs
