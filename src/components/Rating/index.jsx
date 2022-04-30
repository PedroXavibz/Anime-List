import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import ContainerRating from './style';

const Rating = ({ theme, title, name }) => {
  const iconSize = 32;

  return (
    <ContainerRating>
      <h2 className='rating-title'>{title}</h2>
      <div className='rating-anime'>
        <button className='previous' type='button'>
          <GrFormPrevious size={iconSize} color={theme.colors.secondaryNeon} />
        </button>

        <div>
          <a className='anime' href='/'>
            [IMAGE HERE]
            <h4 className='title'>{name}</h4>
            <button className='fav' type='button'>
              <MdFavoriteBorder size={17} color={theme.colors.secondaryNeon} />
            </button>
          </a>
        </div>
        <button className='next' type='button'>
          <GrFormNext size={iconSize} color={theme.colors.secondaryNeon} />
        </button>
      </div>
    </ContainerRating>
  );
};

export default Rating;
