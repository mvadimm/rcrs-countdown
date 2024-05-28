type HiddenCardProps = {
  configuration: { [key: string]: string };
};

const HiddenCard = ({ configuration }: HiddenCardProps) => {
  return (
    <div className="flex flex-col gap-[15px] rounded-xl bg-secondaryTableColor px-[25px] py-[12px]">
      <div className="items-center justify-between pb-3 ">
        {Object.entries(configuration).map(([key, value]) => (
          <div key={key} className="mb-1 border-b-2 border-mainTableColor">
            {key}: <strong>{value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiddenCard;
