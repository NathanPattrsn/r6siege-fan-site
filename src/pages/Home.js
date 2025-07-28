function Home() {
  return (
    <div className="relative min-h-screen min-w-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-home-bg bg-cover bg-center" />
      <div className="absolute inset-0 bg-black opacity-70" />
      
      <div className="relative z-10 flex flex-col items-center w-full pt-20">
        <h1 className="text-white font-r6s text-4xl text-center px-4">Welcome to R6Siege Fan Site!</h1>
        <p className="text-white font-r6s text-lg mt-4 text-center px-4">
          Your ultimate guide to Rainbow Six Siege.
        </p>
        <p className="text-white font-r6s text-lg mt-2 text-center px-4">
          Explore maps and operators to enhance your gameplay.
        </p>
         <p className="text-white font-r6s text-lg mt-2 text-center px-4">
          This site is a work in progress, so stay tuned for more updates! This is a fan site and not affiliated with Ubisoft.
        </p>
      </div>
    </div>
  );
}

export default Home;