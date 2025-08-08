import React from "react";

type Props = {
  title: string;
};

const CardTitle = ({ title }: Props) => {
  return (
    <div className="mb-4">
      <h2 className="text-font-primary text-xl font-bold">{title}</h2>
    </div>
  );
};

export default CardTitle;
