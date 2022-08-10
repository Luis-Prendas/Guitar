const $ = (element) => document.querySelector(`.${element}`);
// Helper, to not write so much xD

const cloneAndPlay = (audioNode) => {
  const clone = audioNode.cloneNode(true);
  clone.play();
}; // Function that will play the sound of the audio

$("E1").addEventListener("mouseleave", () => cloneAndPlay(E1));
$("B2").addEventListener("mouseleave", () => cloneAndPlay(B2));
$("G3").addEventListener("mouseleave", () => cloneAndPlay(G3));
$("D4").addEventListener("mouseleave", () => cloneAndPlay(D4));
$("A5").addEventListener("mouseleave", () => cloneAndPlay(A5));
$("E6").addEventListener("mouseleave", () => cloneAndPlay(E6));
