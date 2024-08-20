import React, { useEffect, useRef } from "react";

const Stars = ({ speed }) => {
  const canvasRef = useRef(null);
  let canvas, c, w, h, stars, prevTime;

  const setCanvasExtents = () => {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  };

  const makeStars = (count) => {
    const out = [];
    for (let i = 0; i < count; i++) {
      const s = {
        x: Math.random() * 1600 - 800,
        y: Math.random() * 900 - 450,
        z: Math.random() * 1000,
      };
      out.push(s);
    }
    return out;
  };

  const clear = () => {
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
  };

  const putPixel = (x, y, brightness) => {
    const intensity = brightness * 255;
    const rgb = "rgb(" + intensity + "," + intensity + "," + intensity + ")";
    c.fillStyle = rgb;
    c.fillRect(x, y, 2, 2);
  };

  const moveStars = (distance) => {
    const count = stars.length;
    for (let i = 0; i < count; i++) {
      const s = stars[i];
      s.z -= distance;
      while (s.z <= 1) {
        s.z += 1000;
      }
    }
  };

  const init = (time) => {
    prevTime = time;
    requestAnimationFrame(tick);
  };

  const tick = (time) => {
    let elapsed = time - prevTime;
    prevTime = time;

    moveStars(elapsed * speed);

    clear();

    const cx = w / 2;
    const cy = h / 2;

    const count = stars.length;
    for (let i = 0; i < count; i++) {
      const star = stars[i];

      const x = cx + star.x / (star.z * 0.001);
      const y = cy + star.y / (star.z * 0.001);

      if (x < 0 || x >= w || y < 0 || y >= h) {
        continue;
      }

      const d = star.z / 1000.0;
      const b = 1 - d * d;

      putPixel(x, y, b);
    }

    requestAnimationFrame(tick);
  };

  useEffect(() => {
    canvas = canvasRef.current;
    c = canvas.getContext("2d");
    setCanvasExtents();
    window.addEventListener("resize", setCanvasExtents);

    stars = makeStars(10000);

    requestAnimationFrame(init);

    return () => {
      window.removeEventListener("resize", setCanvasExtents);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        padding: 0,
        margin: 0,
        position: "absolute",
        zIndex: "0",
      }}
    />
  );
};

export default Stars;
