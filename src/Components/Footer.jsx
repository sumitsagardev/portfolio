import React from "react";

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-4 border-t border-gray-600">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Portfolio Name. All rights
          reserved.
        </p>
        <p className="text-sm mt-2">
          Developed by <strong>Sumit Sagar</strong>
        </p>
      </div>
    </div>
  );
}

export default Footer;
