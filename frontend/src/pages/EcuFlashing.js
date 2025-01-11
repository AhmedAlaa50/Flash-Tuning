import Video from "../components/ui/Video";
import SearchProduct from "../components/ui/SearchProduct";
import { ECU_FLASHING_VIDEO_ID } from "../data/Constants";

export default function EcuFlashingPage() {
  return (
    <div>
      <h1>ECU Flashing</h1>
      <Video youtubeID={ECU_FLASHING_VIDEO_ID} />
      <SearchProduct />
    </div>
  );
}
