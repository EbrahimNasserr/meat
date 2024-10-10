export default function Loader() {
  return (
    <div className="w-full flex h-screen justify-center items-center flex-col">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-slate-50 mx-auto"></div>
      <h2 className=" text-white mt-4">Loading...</h2>
      <p className=" text-white">
        Your adventure is about to begin
      </p>
    </div>
  );
}
