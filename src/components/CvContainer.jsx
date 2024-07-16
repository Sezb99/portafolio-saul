import { useRef, useState } from "react";

const CvContainer = () => {
  const cvImg = useRef(null);
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
    cvImg.current.classList.add("hover");
  };

  const handleBlur = () => {
    setFocus(false);
    cvImg.current.classList.remove("hover");
  };

  const onclick = () => {
    fetch("src\assets\Curriculum-Saúl.pdf")
      .then((res) => res.blob())
      .then((blob) => {
        const cvURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = cvURL;
        alink.download = "Curriculum-Saúl.pdf";
        alink.click();
      });
  };

  return (
    <section
      className="cv-container"
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
    >
      <img src="src\assets\cv-saul-azul.png" alt="" ref={cvImg} />
      {focus && <button onClick={onclick}>Download</button>}
    </section>
  );
};

export default CvContainer;
