import React from "react";
export default function Images() {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <div
            className="bg-cover bg-center h-80 w-96"
            style={{
              backgroundImage:
                "url('./reb_img2.jpeg')",
            }}
          ></div>
        </div>
      </>
    );
  }