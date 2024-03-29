type ShowMoreButtonProps = {
  onClick: () => void;
}

export const ShowMoreButton = ({onClick}:ShowMoreButtonProps) => {

  const handleButtonClick = () => {
    onClick();
  };

  return (
    <div className="catalog__more">
      <button onClick ={handleButtonClick} className="catalog__button" type="button">Show more</button>
    </div>
  );
};
