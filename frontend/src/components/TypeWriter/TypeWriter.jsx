/** @format */

import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "I possess strong skills in Algorithmic Problem-Solving.",
            "My expertise in both frontend and backend development allows me to create seamless, end-to-end Web Applications.",
            "I am adept at analyzing user requirements and translating them into functional Software Applications.",
            "I have a flexible and adaptable personality that enables me to integrate smoothly into any team environment.",
          ],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 30,
          cursorClassName: "textSecondaryDark",
          wrapperClassName: "textSecondaryDark",
        }}
      />
    </>
  );
}

export default TypeWriter;
