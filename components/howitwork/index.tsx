export default function () {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          How to create your own AI action figure
        </h2>

        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex h-full flex-col [grid-area:2/1/3/2] md:[grid-area:1/2/2/3]">
            <a
              className="mb-8 flex max-w-lg justify-center gap-4 px-6 py-5 text-black"
              href="#w-tabs-0-data-w-pane-0"
            >
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                <p className="text-sm font-bold sm:text-base">1</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="text-xl font-bold"> Upload your photo</h5>
                <p className="text-sm text-gray-500">
                  Choose a clear, front-facing photo of yourself. The better the
                  quality, the more detailed your action figure will be.
                </p>
              </div>
            </a>

            <a
              className="mb-8 flex max-w-lg justify-center gap-4 px-6 py-5 text-black"
              href="#w-tabs-0-data-w-pane-1"
            >
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                <p className="text-sm font-bold sm:text-base">2</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="text-xl font-bold">
                  Type your action figure prompt
                </h5>
                <p className="text-sm text-gray-500">
                  Describe your ideal look—include outfit details, accessories,
                  colors, or even poses. (Ex: “Wearing a black leather jacket
                  with a blue lightsaber in a retro toy box.”)
                </p>
              </div>
            </a>

            <a
              className="mb-8 flex max-w-lg justify-center gap-4 px-6 py-5 text-black"
              href="#w-tabs-0-data-w-pane-2"
            >
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                <p className="text-sm font-bold sm:text-base">3</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="text-xl font-bold">
                  {" "}
                  Generate your action figure
                </h5>
                <p className="text-sm text-gray-500">
                  Click “Create Figure” and let our AI work its magic. Your
                  unique action figure image will be ready in seconds!
                </p>
              </div>
            </a>
            <a
              className="mb-8 flex max-w-lg justify-center gap-4 px-6 py-5 text-black"
              href="#w-tabs-0-data-w-pane-2"
            >
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                <p className="text-sm font-bold sm:text-base">4</p>
              </div>
              <div className="ml-4 flex flex-col gap-2">
                <h5 className="text-xl font-bold"> Download or share</h5>
                <p className="text-sm text-gray-500">
                  Save your custom figure or post it to socials—perfect for
                  avatars, profile pics, or just flexing your toy-self!
                </p>
              </div>
            </a>
          </div>

          <img
            alt=""
            src="https://aifigure.s3.us-east-1.amazonaws.com/ai_action_figure/ai_action_figure_chatgpt4o_01.jpg"
            className="AI Action Figure Generator"
          />
        </div>
      </div>
    </section>
  );
}
