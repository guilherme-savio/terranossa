export default function PageTitle({ subTitle, title, desc, img }) {
  return (
    <div className="flex p-5">
      <div className="w-[120px]">
        <img src={img}></img>
      </div>
      <div>
        <span className="text-base-100">{subTitle}</span>
        <h1 className="text-base-100">{title}</h1>
        <p className="text-base-100">{desc}</p>
      </div>
    </div>
  );
}