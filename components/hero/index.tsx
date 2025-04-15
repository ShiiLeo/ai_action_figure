export default function () {
  return (
    <header>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid items-center justify-items-start gap-8 sm:gap-16 md:grid-cols-2">
          <div className="flex flex-col">
            <h1 className="text-primary mb-4 font-bold md:text-6xl md:leading-tight">
              Turn Yourself into a Custom AI Action Figure
            </h1>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
              Upload your photo, describe your style, and let our AI craft a
              personalized action figure image just for you. Perfect for social
              media, avatars, or just for fun!
            </p>

            <a
              href="https://tally.so/r/n0AkW0"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-auto cursor-pointer rounded-md bg-black px-6 py-2 text-center font-semibold text-white"
            >
              Join the Waitlist
            </a>

            <div className="grid w-full max-w-2xl grid-flow-row grid-cols-3 gap-4"></div>
          </div>

          <img
            src="https://aifigure.s3.us-east-1.amazonaws.com/ai_action_figure/ai_figure_chatgpt4o_01.jpg"
            alt="AI Action Figure Preview"
            className="rounded-md inline-block max-h-3xl w-full max-w-3xl object-contain"
          />
        </div>
      </div>
    </header>
  );
}
