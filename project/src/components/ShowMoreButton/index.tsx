type ShowMoreButtonProps = {
  onClick: () => void;
}

export const ShowMoreButton = ({onClick}:ShowMoreButtonProps) => {

  const handleClickButton = () => {
    onClick();
  };

  return (
    <div className="catalog__more">
      <button onClick ={handleClickButton} className="catalog__button" type="button">Show more</button>
    </div>
  );
};
