import React from "react";
import "./style.css";
import CharacterRegular from "../CharacterRegular";
import PropTypes from "prop-types";

const CharacterGrid = (props, { match }) => (
  <div className="character-grid">
    {Object.values(props.characters)
      .sort((a, b) => {
        return a.position - b.position;
      })
      .map((character, index) => (
        <CharacterRegular
          key={character.key}
          name={character.displayName}
          image={character.image}
          tag={character.key}
          heroImage={character.hero}
          episodeOrigin={props.episode}
        />
      ))}
  </div>
);

CharacterGrid.propTypes = {
  characters: PropTypes.object.isRequired
};

export default CharacterGrid;
