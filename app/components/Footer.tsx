import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-center py-4">
      <p>
        &copy; {new Date().getFullYear()} Scent Savvy - Cainne Sent Enrichment
        Framwork. All rights reserved.
      </p>
      <p>
        <a
          href="mailto:scentsavvycainneenrichment@gmail.com
"
        >
          Contact Us
        </a>
        {/* <a href="/legal">Legal Information</a> */}
      </p>
    </footer>
  );
};

export default Footer;
