import { useState, useEffect, useRef } from 'react';
import { ImSearch } from 'react-icons/im';
import Form from './style';

const Search = () => {
  const [show, isShow] = useState(false);
  const [search, setSearch] = useState('');
  const searchForm = useRef(null);

  useEffect(() => {
    document.body.addEventListener('click', e => {
      const { parentElement } = e.target;
      const isFormTarget = parentElement === searchForm.current;

      if (!isFormTarget) isShow(false);
    });
  }, []);

  const handlerForm = e => {
    e.preventDefault();
  };

  const handlerInput = ({ target: { value } }) => {
    setSearch(value);
  };

  return (
    <Form ref={searchForm} className={show ? 'create-border' : ''} onSubmit={handlerForm}>
      {show && <input type='text' value={search} onChange={handlerInput} />}
      <button type='button' onClick={() => isShow(!show)}>
        <ImSearch />
      </button>
    </Form>
  );
};

export default Search;
