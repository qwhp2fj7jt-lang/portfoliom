import { images } from "@/config/images";
import { site } from "@/config/site";
import { Avatar } from "@/components/atoms";

export function ProfileBadge() {
  return (
    <div className="flex items-center gap-4">
      <Avatar src={images.profile.src} alt="" size={56} bordered eager />
      <div className="flex flex-col gap-1">
        <span className="text-[15px] font-medium">{site.name}</span>
        <span className="text-[13px] text-neutral-300">{site.tagline}</span>
      </div>
    </div>
  );
}
