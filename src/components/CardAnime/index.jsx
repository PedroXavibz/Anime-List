import Card from './style';

const CardAnime = () => (
  <Card>
    <button type='button' className='select-anime'>
      [SELECT]
    </button>

    <div className='anime-image'>[IMAGE HERE]</div>
    <div className='anime-info'>
      <h3 className='title'>ANIME NAME</h3>
      <ul className='genres'>
        <li>Genresi:</li>
        <li>genresi-1</li>
        <li>genresi-2</li>
        <li>genresi-3</li>
      </ul>
      <p>Snopsy resume</p>
      <a href='/' className='anime-link'>
        VIEW
      </a>
    </div>
  </Card>
);

export default CardAnime;
