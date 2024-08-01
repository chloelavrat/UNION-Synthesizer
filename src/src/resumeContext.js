
/**
 * this function encapsulate some logic required to `resume` the given
 * audio context.
 */
function resumeContext(audioContext) {
  // for compatibility with Safari
  if (!audioContext.resume) {
    audioContext.resume = new Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const $btn = document.createElement('button');

    $btn.textContent = 'resume audio context';
    $btn.style.width = width + 'px'; // `${width}px`;
    $btn.style.height = height + 'px';
    $btn.style.position = 'absolute';
    $btn.style.top = '0px';
    $btn.style.left = '0px';

    document.body.appendChild($btn);

    $btn.addEventListener('click', async () => {
      try {
        await audioContext.resume();
        $btn.remove();

        resolve();
      } catch(err) {
        reject('cannot resume audio context');
      }
    });
  });
}

export default resumeContext;
