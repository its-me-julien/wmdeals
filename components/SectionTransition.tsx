"use client";

export default function SectionTransition() {
  return (
    <div className="relative w-full">
      {/* Black Top Section */}
      <div className="bg-black w-full h-12"></div>

      {/* SVG Wave Transition */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="white"
          d="M0,160L60,149.3C120,139,240,117,360,122.7C480,128,600,160,720,181.3C840,203,960,213,1080,218.7C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>

      {/* White Bottom Section */}
      <div className="bg-white w-full h-24"></div>
    </div>
  );
}
