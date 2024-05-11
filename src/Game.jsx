import { useEffect, useRef } from "react";

function Game() {
  let canvasRef = useRef(null);

  useEffect(() => {
    let cnv = canvasRef?.current;
    let ctx = cnv?.getContext('2d');

    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;

    const animate = () => {
        requestAnimationFrame(animate);
    
        if (ctx && cnv) {
            ctx.clearRect(0, 0, cnv.width, cnv.height);
        }
    }

    animate();

    window.addEventListener('resize', () => {
        cnv.width = window.innerWidth;
        cnv.height = window.innerHeight;

        console.log({ w: cnv.width, h: cnv.height })
    })
  })

  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  )
}

export default Game
