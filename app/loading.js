'use client'

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <p className="text-white text-xl font-serif">
        Loading
        <span className="inline-block ml-2">
          <DotAnimation />
        </span>
      </p>
    </div>
  )
}

function DotAnimation() {
  return (
    <span className="flex space-x-1">
      <span className="dot animate-bounce animation-delay-0"></span>
      <span className="dot animate-bounce animation-delay-200"></span>
      <span className="dot animate-bounce animation-delay-400"></span>

      <style jsx>{`
        .dot {
          width: 8px;
          height: 8px;
          background-color: white;
          border-radius: 50%;
          display: inline-block;
        }
        .animate-bounce {
          animation: bounce 1.4s infinite ease-in-out;
        }
        .animation-delay-0 {
          animation-delay: 0s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
            opacity: 0.3;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </span>
  )
}
