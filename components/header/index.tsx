export default function () {
  return (
    <section className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* 左侧Logo和名称 */}
          <div className="flex flex-shrink-0 items-center">
            <a href="#" className="flex items-center space-x-2">
              <img
                src="https://ai-wallpaper-demoo.s3.us-east-1.amazonaws.com/wallpapers/ai_action_figure+_genarator.png"
                alt="Logo"
                className="h-8 w-8"
              ></img>
              <span className="text-xl font-bold text-primary">
                AI Action Figure Genarator
              </span>
            </a>
          </div>

          {/* 右侧导航链接 */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              AI Action Figure
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              Features
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              FAQ
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}
