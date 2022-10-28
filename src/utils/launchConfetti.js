export const launchConfetti = () => {
  const duration = 1 * 1000;
  const end = Date.now() + duration;

  // confetti();

  (function frame() {
    // launch a few confetti from the left edge
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.75 },
      disableForReducedMotion: true,
    });
    // and launch a few from the right edge
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.75 },
      disableForReducedMotion: true,
    });

    // keep going until we are out of time
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
