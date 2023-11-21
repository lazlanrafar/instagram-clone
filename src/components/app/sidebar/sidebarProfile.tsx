export default function AppSidebarProfile() {
  return (
    <div className="">
      <div className="relative w-full h-24 overflow-hidden rounded-xl">
        <img
          src="https://res.cloudinary.com/dxgsqxdi3/image/upload/c_crop,g_auto,h_600,w_800/e_contrast:55/e_brightness:-9/e_gamma:150/e_gamma:127/qsngd6wxb7ywt9jrwni8.jpg"
          width={640}
          height={480}
          alt="Banner"
          className="w-full rounded-xl aspect-auto scale-125"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="md:mt-4 mt-2 text-xl font-semibold flex justify-center items-center gap-2">
          <h1 className="md:text-xl text-lg">L Azlan Rafar</h1>
        </div>
        <p className="text-sm text-neutral-700 dark:text-neutral-500">@lazlanrafar</p>
      </div>
    </div>
  );
}
