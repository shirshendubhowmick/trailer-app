// eslint-disable-next-line import/prefer-default-export
export function getYoutubeVideoID(url) {
  // eslint-disable-next-line no-useless-escape
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);

  if (match && match[2].length === 11) {
    return match[2];
  } else {
    return 'error';
  }
}
