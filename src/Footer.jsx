import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-6 py-4 bg-gray-800 text-white text-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Tentang Kami</h2>
            <p>
              MovieStar adalah platform yang menyediakan informasi terkini
              mengenai film-film terbaru dan populer. Temukan film favorit Anda
              dan nikmati pengalaman menonton yang seru bersama kami.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Kontak Kami</h2>
            <p>Alamat: Jalan MovieStar No. 123</p>
            <p>Telepon: (021) 123-4567</p>
            <p>Email: info@moviestar.com</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Ikuti Kami</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/moviestar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.twitter.com/monsterxrabbit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/piovelia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
