export default function AppSidebarCopyright() {
  return (
    <div className="md:flex items-center gap-1 text-sm py-1 px-3 text-neutral-600 dark:text-neutral-400 hidden">
      <span>©</span>
      <span>{new Date().getFullYear()}</span>
      <span>with</span>
      <span className="text-red-500 animate-pulse">❤</span>
      <span>by</span>
      <span className="hover:dark:text-neutral-400 cursor-pointer">Latoe</span>
    </div>
  );
}
