import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Video from "../components/ui/Video";
import { REMOTE_TUNE_VIDEO_ID } from "../data/Constants";
import RemoteTuningSteps from "../components/ui/RemoteTuningSteps";

export default function RemoteTuningPage() {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname.substring(15));
  }, [location]);
  return (
    <div>
      <Video youtubeID={REMOTE_TUNE_VIDEO_ID} />
      <RemoteTuningSteps type={location.pathname.substring(15)} />
    </div>
  );
}
