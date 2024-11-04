import React, { useState } from 'react';
import './resume-download-button.css';
import { useTranslation } from "react-i18next";
import resumeIcon from '../../../assets/cv-icon.png';
import resumeEs from '../../../assets/resume/resume_es.pdf';
import resumeEn from '../../../assets/resume/resume_en.pdf';

function ResumeDownloadButton({ language}) {

  const [t] = useTranslation("global");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    const resumeLink = language === 'es' ? resumeEs : resumeEn;
    const link = document.createElement('a');
    link.href = resumeLink;
    link.download = language === 'es' ? 'Carlos_Salazar_CV.pdf' : 'Carlos_Salazar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsModalOpen(false); // Close the modal after download
  };

  return (
    <div className='resume-container'>
      <button className='resume-button' onClick={() => setIsModalOpen(true)}>
        <img src={resumeIcon} alt="Download Resume" /> {/* Replace with your resume icon */}
      </button>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{t("resume.download")}</h2>
            <p>{t("resume.question")}</p>
            <div className='modal-buttons'>
              <button onClick={handleDownload}>{t("resume.yes")}</button>
              <button onClick={() => setIsModalOpen(false)}>{t("resume.cancel")}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeDownloadButton;
