type ShowMoreButtonProps = {
  onClick: () => void;
}

export const ShowMoreButton = ({onClick}:ShowMoreButtonProps) => {

  const clickButtonHandler = () => {
    onClick();
  };

  return (
    <div className="catalog__more">
      <button onClick ={clickButtonHandler} className="catalog__button" type="button">Show more</button>
    </div>
  );
};
