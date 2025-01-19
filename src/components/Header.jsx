import palmKernel from "../assets/images/palmKernel.jpg"
import GetInTouch from "./GetInTouch"

const Header = () => {
  return (
    <div className="relative flex h-screen w-full overflow-hidden shadow-lg text-white">
      <div
        className="absolute inset-0 h-full"
        style={{
          background:
            "linear-gradient(to right, rgba(54, 85, 55, 0.1), rgba(0, 0, 0, 1))",
        }}
      >
        <div className="flex h-full w-full items-center justify-end px-2 text-right sm:px-4 md:px-8">
          <div className="text-desertStorm">
            <h1 className="font-crimsonText text-5xl font-semibold sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              Camela Oil
            </h1>
            <p className="pb-10 font-light sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl">
              Taking you beyond cooking...
            </p>
            <GetInTouch />
          </div>
        </div>
      </div>
      <img src={palmKernel} className="h-screen w-full object-cover" />
    </div>
  )
}

export default Header
