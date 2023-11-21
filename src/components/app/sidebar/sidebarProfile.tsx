interface Props {
  isActive: boolean;
}

export default function AppSidebarProfile({ isActive }: Props) {
  return (
    <>
      <div className="self-center md:self-auto">
        <div className="hidden md:block relative w-full h-24 overflow-hidden rounded-xl">
          <img
            src="https://res.cloudinary.com/dxgsqxdi3/image/upload/c_crop,g_auto,h_600,w_800/e_contrast:55/e_brightness:-9/e_gamma:150/e_gamma:127/qsngd6wxb7ywt9jrwni8.jpg"
            width={640}
            height={480}
            alt="Banner"
            className="w-full rounded-xl aspect-auto scale-125"
          />
        </div>
        <div
          className={`flex md:flex-col ${
            isActive ? "flex-col" : "flex-row items-center"
          } md:justify-center md:items-center gap-2 md:gap-2 transition-default`}
        >
          <div className="md:-mt-12 mt-0 shadow-md md:border-2 md:z-10 z-0 md:border-white dark:md:border-dark border-transparent  w-fit rounded-full">
            <img
              src="https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/ohc78qqittlujanfbobr"
              alt=""
              className={`rounded-full scale-110 aspect-square transition-all duration-300  delay-50 ease-linear md:w-[90px]  md:h-[90px]  ${
                isActive ? "w-[80px] h-[80px] " : "h-[40px] w-[40px]"
              } `}
            />
          </div>
          <div className="md:mt-4 mt-2 text-xl font-semibold flex justify-center items-center gap-2">
            <h1 className="md:text-xl text-lg">L Azlan Rafar</h1>
          </div>
          <p className="text-sm text-neutral-700 dark:text-neutral-500 hidden md:block">@lazlanrafar</p>
        </div>
      </div>
    </>
  );
}
