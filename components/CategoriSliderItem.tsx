import Image from "next/image";

interface CategoriSliderItemProps {
  image: string;
  alt: string;
  name: string;
}
const CategoriSliderItem: React.FC<CategoriSliderItemProps> = ({
  image,
  alt,
  name,
}) => {
  return (
    <div className="w-full h-full relative z-[1] ">
      <Image
        src={image}
        alt={alt}
        height={500}
        width={500}
        className="w-full h-full object-cover"
      />
      <div className="bg-gradient-to-t from-black/50 absolute w-full h-full top-0 left-0 z-[2]"></div>

      <div className="absolute left-1 bottom-3 text-3xl text-white capitalize">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default CategoriSliderItem;
