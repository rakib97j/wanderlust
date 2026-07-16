export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#8cceda50]  backdrop-blur-sm">
      {/* স্পিনার অ্যানিমেশন */}
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>

      {/* লোডিং টেক্সট */}
      <p className="mt-4 text-lg font-semibold text-cyan-400 animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
}
