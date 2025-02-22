import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { QRCodeCanvas } from "qrcode.react";
import AfterQrScan from "../afterqrscan/afterscanqr.jsx"; // Importing the second page

export function Mainpage() {
    const [showModal, setShowModal] = useState(false);

    // Contact Information
    const contactInfo = {
        name: "Amit Gupta",
        phone: "+91 81087 71792",
        email: "amitg@alogicdata.com",
        website: "https://alogicdata.com/",
        linkedin: "https://in.linkedin.com/in/amit-gupta-alogicdata",
        company: "Alogicdata",
        jobTitle: "Director",
    };

    // Generate and Download vCard
    const downloadVCard = () => {
        const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
ORG:${contactInfo.company}
TITLE:${contactInfo.jobTitle}
TEL:${contactInfo.phone}
EMAIL:${contactInfo.email}
URL:${contactInfo.website}
URL:${contactInfo.linkedin}
END:VCARD
`;
        const blob = new Blob([vCardData], { type: "text/vcard" });
        const url = URL.createObjectURL(blob);

        // Create a hidden anchor element to trigger download
        const a = document.createElement("a");
        a.href = url;
        a.download = `${contactInfo.name.replace(" ", "_")}_contact.vcf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary position-relative">
            
            {/* Share & QR Icons at the top */}
           

            {/* Profile Card */}
            <div className="card text-center p-4 shadow-lg" style={{ width: "350px", background: "#f4f4f4", borderRadius: "10px" }}>
                
                {/* Profile Image */}
                <div className="d-flex justify-content-center">
                    <img
                        src="../../images/logosingle.png"
                        alt="Profile"
                        className="rounded-circle border border-4 border-white"
                        style={{ width: "100px", height: "100px", marginTop: "-70px" }}
                    />
                     <div className="position-absolute top-0 end-0 m-3 d-flex">
                {/* Share Icon */}
                <i
                    className="bi bi-share fs-3 text-dark me-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => window.open(contactInfo.website, "_blank")}
                ></i>

                {/* QR Code Icon (Triggers Modal) */}
                <i
                    className="bi bi-qr-code fs-3 text-dark"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowModal(true)}
                ></i>
            </div>
                </div>

                {/* Name & Designation */}
                <h2 className="mt-3 fw-bold">{contactInfo.name}</h2>
                <p className="text-muted mb-1">{contactInfo.jobTitle}</p>
                <p className="fw-semibold">{contactInfo.company}</p>

                {/* Save Contact Button (Downloads vCard) */}
                <button className="btn btn-primary w-100 mt-3" onClick={downloadVCard}>
                    <i className="bi bi-person-plus-fill me-2"></i> Save Contact
                </button>

                {/* Contact Icons with Links */}
                <div className="d-flex justify-content-around mt-4">
                    
                    {/* LinkedIn */}
                    <div className="text-center">
                        <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                            <i className="bi bi-linkedin fs-3 text-primary"></i>
                            <p className="mt-1">LinkedIn</p>
                        </a>
                    </div>

                    {/* Mobile Call */}
                    <div className="text-center">
                        <a href={`tel:${contactInfo.phone}`} className="text-decoration-none text-dark">
                            <i className="bi bi-phone-fill fs-3 text-primary"></i>
                            <p className="mt-1">Mobile</p>
                        </a>
                    </div>

                    {/* Website */}
                    <div className="text-center">
                        <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                            <i className="bi bi-globe fs-3 text-primary"></i>
                            <p className="mt-1">Website</p>
                        </a>
                    </div>

                    {/* Email */}
                    <div className="text-center">
                        <a href={`mailto:${contactInfo.email}`} className="text-decoration-none text-dark">
                            <i className="bi bi-envelope-fill fs-3 text-primary"></i>
                            <p className="mt-1">Email</p>
                        </a>
                    </div>

                </div>
            </div>

            {/* QR Code Modal */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog w-25 modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Scan to Visit Page</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body text-center">
                                {/* QR Code that links to AfterQrScan Page */}
                                <QRCodeCanvas value={window.location.origin + "/afterqrscan"} size={200} />
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
