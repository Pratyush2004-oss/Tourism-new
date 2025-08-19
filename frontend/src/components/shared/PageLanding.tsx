import Image from "next/image";

const PageLanding = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="border-b-2 sm:border-b-4 md:border-b-8 border-blue-400 relative">
      <Image
        src={image}
        width={500}
        height={500}
        alt={title}
        className="w-full h-56 sm:h-72 object-cover object-center md:h-96"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {title.replaceAll("-", " ")}
        </h1>
      </div>
    </div>
  );
};

export default PageLanding;
