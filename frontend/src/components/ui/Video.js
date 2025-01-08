export default function Video({ youtubeID }) {
  return (
    <iframe
      className="video"
      title="Youtube player"
      sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
      src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
    ></iframe>
  );
}
