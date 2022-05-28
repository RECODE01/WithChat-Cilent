export const elementFocus = ($target: HTMLElement) => {
  if ($target.innerText.length === 0) {
    $target.focus();

    return;
  }

  const selection = window.getSelection();
  const newRange = document.createRange();
  newRange.selectNodeContents($target);
  newRange.collapse(false);
  selection?.removeAllRanges();
  selection?.addRange(newRange);
};
