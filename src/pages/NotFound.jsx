import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

function NotFound() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const progressLoad = () => {
      if (percentage >= 70) {
        setPercentage(70);
      } else {
        setPercentage((prevPercentage) => prevPercentage + 1);
      }
    };

    const interval = setInterval(progressLoad, 90);
    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div>
      <div className="background"></div>
      <div className="container">
        <div className="top">
          <hr />
          <h2>Yoga with Sheetal</h2>
          <hr />
        </div>
        <h1>UNDER CONSTRUCTION</h1>
        <h3>PROGRESS</h3>
        <div className="progress-wrapper">
          <div className="progress" style={{ width: `${percentage}%` }}>
            <span>{`${percentage}%`}</span>
          </div>
        </div>
        <div className="social-icons">
          <a href="#your-fb-page">
            <FaFacebook/>
          </a>
          <a href="#your-fb-page">
            <FaInstagram/>
          </a>
          <a href="#your-fb-page">
            <FaLinkedin/>
          </a>
          <a href="#your-fb-page">
            <FaEnvelope/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
