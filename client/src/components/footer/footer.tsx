import {
  LinkedinLogo,
  XLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer>
      <div className="Footer-Top">
        <div className="Footer-Left">
          <div className="Brand">takeUforward</div>
          <div className="Description">
            The best place to learn data Structures, algorithms, most asked
            coding interview questions, real interview experiences free of cost.
          </div>
          <div className="SocialIcons">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo size={32} />
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XLogo size={32} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo size={32} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeLogo size={32} />
            </a>
          </div>
        </div>

        <div className="Footer-Right">
          <div className="Company">
            <div className="Title">Company</div>
            <div>About Us</div>
            <div>Contact Us</div>
            <div>Pricing</div>
            <div>Privacy Policy</div>
            <div>Terms and Conditions</div>
            <div>Cancellation / Refund Policy</div>
          </div>

          <div className="QuickAccess">
            <div className="Title">Quick Access</div>
            <div>Striver's DSA Sheet</div>
            <div>Striver's DSA Playlist</div>
            <div>CS Subjects</div>
            <div>Striver's CP Sheet</div>
          </div>

          <div className="DsaSheets">
            <div className="Title">DSA Sheets</div>
            <div>Striver's SDE Sheet</div>
            <div>Striver's A2Z DSA Playlist</div>
            <div>SDE Core Sheet</div>
            <div>Striver's CP Sheet</div>
          </div>

          <div className="DsaPlaylist">
            <div className="Title">DSA Playlist</div>
            <div>Array Series</div>
            <div>Graph Series</div>
            <div>DP Series</div>
            <div>LinkedList Series</div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="Footer-Bottom ">Copyright © 2024 takeuforward | All rights reserved</div>
    </footer>
  );
};

export default Footer;
