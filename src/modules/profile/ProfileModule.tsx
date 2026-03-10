import ProfileHeader from "./components/ProfileHeader";
import ThemePicker from "./components/ThemePicker";

const ProfileModule = () => {
  return (
    <div className="flex flex-col gap-6">
      <ProfileHeader />
      <ThemePicker />
    </div>
  );
};

export default ProfileModule;