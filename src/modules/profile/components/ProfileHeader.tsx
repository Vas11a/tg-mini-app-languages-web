const ProfileHeader = () => {
  return (
    <div className="flex items-center gap-4 px-1">
      <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
        <span className="text-primary font-bold text-xl">U</span>
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="text-dark/50 text-[12px] font-medium uppercase tracking-wider">
          LandLearn
        </div>
        <div className="text-dark font-semibold text-lg leading-tight">Username</div>
      </div>
    </div>
  );
};

export default ProfileHeader;