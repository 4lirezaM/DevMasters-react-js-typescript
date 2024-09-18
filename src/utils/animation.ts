// type animation
export function typingAnimation(
  text: string,
  startIndex: number,
  element: HTMLElement,
  timeoutIdRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>,
) {
  if (startIndex < text.length) {
    element.innerHTML += text[startIndex];
    startIndex++;
    timeoutIdRef.current = setTimeout(() => {
      typingAnimation(text, startIndex, element, timeoutIdRef);
    }, 100);
  }
}

export function countingAnimation(endIndex: number, element: HTMLElement) {
  for (let i = 0; i < endIndex + 1; i++) {
    element.innerHTML = i.toString();
  }
}
