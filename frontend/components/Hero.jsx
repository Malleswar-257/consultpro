import Image from "next/image";

function Hero() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Image src="/hero-image.jpg" width={1920} height={1080} alt="Hero Image" />
      <div className="absolute text-white text-5xl font-bold">Welcome to our Consulting Agency</div>
    </div>
  );
}

export default Hero;