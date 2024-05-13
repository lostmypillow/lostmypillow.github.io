import { Link } from "react-router-dom";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
function Frontend() {
  return (
    <>
      <div>These are my frontend works</div>
    </>
  );
}

// function TabsDemo() {
//   const [selectedTab, setSelectedTab] = useState("1");
//   function handleClick(e) {
//     setSelectedTab(e.target.id);
//   }
//   return (
//     <>
//       <div className="flex flex-row items-center justify-between w-full">
//         <button
//           id="1"
//           className={`flex rounded-full px-4 py-2 items-center justify-center h-11 w-fit ${selectedTab == "1" ? "bg-black text-white" : ""}  `}
//           onClick={handleClick}
//         >
//           Frontend
//         </button>
//         <button id="2" className={`flex rounded-full px-4 py-2 items-center justify-center h-11 w-fit ${selectedTab == "2" ? "bg-black text-white" : ""}  `} onClick={handleClick}>
//           Backend
//         </button>
//         <button id="3" className={`flex rounded-full px-4 py-2 items-center justify-center h-11 w-fit ${selectedTab == "3" ? "bg-black text-white" : ""}  `} onClick={handleClick}>
//           Mobile
//         </button>
//         <button id="4" className={`flex rounded-full px-4 py-2 items-center justify-center h-11 w-fit ${selectedTab == "4" ? "bg-black text-white" : ""}  `} onClick={handleClick}>
//           Desktop
//         </button>
//       </div>

//       {selectedTab == "1" ? (


//         <>
//           <div className="flex items-center justify-between w-full border-2 border-black rounded-full px-4 py-2 ">
//             <p className="flex items-center justify-start basis-1/2 font-bold text-2xl">JSearch</p>
//             <div className="flex items-center justify-between basis-1/2">
//               <a className="flex rounded-full px-4 py-2 items-center justify-center h-11 w-fit bg-black text-white" href="https://github.com/lostmypillow/jsearch-react">Demo</a>
//               <a className="flex rounded-full px-4 py-2 items-center justify-center h-11 w-fit bg-black text-white" href="https://github.com/lostmypillow/jsearch-react">GitHub</a></div>



//           </div>

//         </>
//       ) : null}
//       {selectedTab == "2" ? (
//         <a href="https://github.com/lostmypillow/jschool-django">
//           JSchool-Django
//         </a>
//       ) : null}
//       {selectedTab == "3" ? <p>i am 3</p> : null}
//       {selectedTab == "4" ? <p>i am 4</p> : null}
//     </>
//   );
// }

function App() {
  return (
    <>
      <div className="flex flex-col w-svw h-svh items-center justify-center gap-4 px-4">
        <h1 className="text-4xl text-center font-bold">
          Johnny Lin <br /> a.k.a LostMyPillow
        </h1>
        <p className="text-center">
          I build websites with no frills & sensible UI/UX.
          <br />I also build fast & secure backends.
          <br />
          Planning to build mobile and desktop apps.
        </p>
        <a
          className="flex bg-black text-white rounded-full px-4 py-2 items-center justify-center h-11 w-fit gap-2"
          href="https://github.com/lostmypillow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github-white.svg" width={28} height={28} alt="GitHub logo" />
          See my GitHub
        </a>
        {/* <p className="text-center text-sm">Oh look, no typing animations, no scroll hijacking, no heavy custom fonts, oh boohoo. <br /> THIS is the way every website should be, in my opinion.</p>
        <p className="italic text-center text-sm">"Make each program do one thing well." <br /> - Doug Mcllroy</p> */}
        {/* <TabsDemo /> */}
      </div>
    </>
  );
}

export default App;
