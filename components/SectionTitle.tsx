interface SectionTitleProps {
  subTitle: string;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subTitle, title }) => {
  return (
    <div className="wrapper text-center pb-10 space-y-1">
      <span className=" uppercase tracking-widest text-xl font-semibold">
        {subTitle}
      </span>
      <h2 className="text-gray-500 ">{title}</h2>
    </div>
  );
};

export default SectionTitle;
