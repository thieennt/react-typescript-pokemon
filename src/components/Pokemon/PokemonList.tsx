import React, { useEffect, useState } from "react";
import { Detail } from "../../App";
import "./pokemon.css";

interface Props {
  name: string;
  id: number;
  image: string;
  abilities?:
    | {
        ability: {
          name: string;
          url: string;
        };
      }[]
    | undefined;

  viewDetail: Detail;
  setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonList: React.FC<Props> = (props) => {
  const { name, id, image, abilities, viewDetail, setViewDetail } = props;

  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(id === viewDetail?.id);
  }, [viewDetail]);

  const handleCloseDetail = () => {
    setViewDetail({
      id: 0,
      isOpened: false,
    });
  };

  return (
    <div className="">
      {isSelected ? (
        <section className="pokemon-list-detail">
          <div className="detail-container">
            <div className="detail-close" onClick={handleCloseDetail}>
              X
            </div>
            <div className="detail-info">
              <img src={image} alt={name} className="detail-img" />
              <p className="detail-name">{name}</p>
            </div>
            <div className="detail-skill">
              <p className="detail-ability">
                {abilities?.map((ability, index) => (
                  <div key={index}>{ability.ability.name}</div>
                ))}
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="pokemon-list-container">
          <p className="pokemon-name">{name}</p>
          <img src={image} alt="" />
        </section>
      )}
    </div>
  );
};

export default PokemonList;
