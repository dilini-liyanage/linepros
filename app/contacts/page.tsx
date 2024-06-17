"use client"
import React , { useState }from "react";
import Image from "next/image";

function ContactsPage() {
  const [isFormVisible, setFormVisible] = useState(false);

  return (
    <div>
      <div className="relative">
        <div>
          <Image
            src="/footer-bg.png"
            height="50"
            width="1920"
            alt="footer bg"
          />
          <div className="absolute flex z-20 top-0 left-0 w-full h-full items-center justify-center gap-36">
            <div className="text-white text-4xl leading-snug">
              <span className="font-bold">200% bonus</span> is simply <br/>  dummy text of the printing <br/>
              and typesetting industry.
            </div>
            <button onClick={() => setFormVisible(true)} className="text-white font-bold text-3xl">Contact us</button>
          </div>
        </div>
      </div>
      {isFormVisible && (
        <div className="p-4 bg-white">
          <form>
            {/* Your form fields go here */}
          </form>
        </div>
      )}
    </div>
  );

}

export default ContactsPage;
