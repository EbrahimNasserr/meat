const MissionAndVision = () => {
  return (
    <section className=" bg-sectionColor text-slate-50 py-24">
      <div className="container px-6 mx-auto">
        <h2 className=" font-bold italic text-4xl text-heroTextColor uppercase text-center">
          Mission & Vision
        </h2>
        <div className="grid grid-cols-1 gap-10 py-10 ">
          <div className="content  bg-slate-50 bg-opacity-50 p-3 rounded">
            <p className="text-2xl leading-relaxed text-slate-50 uppercase">
              <span className="font-bold text-heroTextColor">Mission: </span>
              To craft unforgettable, cheese-loaded experiences that bring
              people together in a vibrant, fun atmosphere. We&apos;re here to
              serve not just food but joy—affordable, high-quality comfort food
              that leaves every cheese-lover craving more. At Meat & Cheezz,
              it&apos;s not just about the taste; it&apos;s about creating a
              community where every bite tells a story.
            </p>
          </div>
        </div>

        <div className="content bg-slate-50 bg-opacity-50 p-3 rounded">
          <p className=" text-2xl leading-relaxed text-slate-50 uppercase">
            <span className="font-bold text-heroTextColor">Vision: </span>
            To become the go-to destination for cheese-lovers across the globe,
            spreading the Meat & Cheezz vibe from Jordan to the world. We
            envision a future where our brand is synonymous with indulgent,
            unforgettable food experiences, connecting people through the
            universal love of cheese, one delicious bite at a time.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10 items-center">
        <button className="btn">join us</button>
      </div>
    </section>
  );
};

export default MissionAndVision;
