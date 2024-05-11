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

function TabsDemo() {
  const [selectedTab, setSelectedTab] = useState("1");
  function handleClick(e) {
    setSelectedTab(e.target.id);
  }
  return (
    <>
      <div className="flex flex-row items-center justify-between gap-2 w-full">
        <button
          id="1"
          className="flex text-white rounded-full px-4 py-2 items-center justify-center h-11 w-fit  bg-black"
          onClick={handleClick}
        >
          Frontend
        </button>
        <button id="2" onClick={handleClick}>
          Backend
        </button>
        <button id="3" onClick={handleClick}>
          Mobile
        </button>
        <button id="4" onClick={handleClick}>
          Desktop
        </button>
      </div>

      {selectedTab == "1" ? (
        <a href="https://github.com/lostmypillow/jsearch-react">JSearch</a>
      ) : null}
      {selectedTab == "2" ? (
        <a href="https://github.com/lostmypillow/jschool-django">
          JSchool-Django
        </a>
      ) : null}
      {selectedTab == "3" ? <p>i am 3</p> : null}
      {selectedTab == "4" ? <p>i am 4</p> : null}
    </>
  );
}

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

        <TabsDemo />
      </div>
    </>
  );
}

export default App;
