import React from "react";
import Card from "../Compontents/Card";

const data = [
  {
    text: "Title 1",
    desc: "Description 1",
    value: "Link 1",
    hlink: "https://example.com/link1",
  },
  {
    text: "Title 2",
    desc: "Description 2",
    value: "Link 2",
    hlink: "https://example.com/link2",
  },
];

const CardsPage = () => {
  return (
    <div>
      <div>
        {data.map((items, index) => (
          <Card
            key={index}
            text={items.text}
            desc={items.desc}
            value={items.value}
            hlink={items.hlink}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
