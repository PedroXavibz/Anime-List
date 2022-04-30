import { ThemeProvider } from 'styled-components';
import { BiUserCircle } from 'react-icons/bi';
import { TiTimes } from 'react-icons/ti';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import logo from './assets/logo.png';
import Search from './components/Search';
import Rating from './components/Rating';
import CardAnime from './components/CardAnime';
import { Header, ContextContainer, SectionMyAnimes, Footer } from './style';
import GlobalStyle from './styles/globalStyles';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header>
      <ContextContainer>
        <img src={logo} alt='logo' />
        <nav>
          <ul>
            <li>
              <Search />
            </li>

            <li className='center-nav-opt'>News</li>

            <li className='avatar'>
              <BiUserCircle color={theme.colors.secondaryNeon} size={28} />
              <span className='username'>login</span>
            </li>
          </ul>
        </nav>
      </ContextContainer>
    </Header>

    <section className='ratings'>
      <ContextContainer>
        <Rating theme={theme} title='Top airing anime' name='Anime name' />
        <Rating theme={theme} title='last update episode' name='Anime name' />
        <Rating theme={theme} title='Top animes' name='Anime name' />
      </ContextContainer>
    </section>

    <SectionMyAnimes>
      <ContextContainer>
        <h2>My list</h2>

        <div className='container-my-list'>
          <header className='header-my-animes'>
            <ul className='list-navigation'>
              <li>
                <button type='button'>1</button>
              </li>
              <li>
                <button type='button'>2</button>
              </li>
              <li>
                <button type='button'>3</button>
              </li>
            </ul>

            <ul className='tools'>
              <li className='remove'>
                <button className='btn-remove' type='button'>
                  Remove <TiTimes />
                </button>
              </li>
              <li>
                <select className='sort'>
                  <optgroup>
                    <option value='0'>SORT BY</option>
                    <option value='1'>[OPTIONS SORT]</option>
                  </optgroup>
                </select>
              </li>

              <li>
                <Search />
              </li>
            </ul>
          </header>

          <div className='container-card-anime'>
            <CardAnime />
          </div>
        </div>
      </ContextContainer>
    </SectionMyAnimes>

    <Footer>
      <ContextContainer>
        <span>[COPYRIGHT]</span>
        <ul className='contact'>
          <li>Contact</li>
          <li>
            <FaGithubAlt />
            <a href='/'>[GITHUB]</a>
          </li>

          <li>
            <MdAlternateEmail />
            <a href='/'>[EMAIL]</a>
          </li>

          <li>
            <FaLinkedinIn />
            <a href='/'>[LINKEDIN]</a>
          </li>
        </ul>
        <nav className='nav'>
          <ul className='nav-items'>
            <li>
              <a className='current' href='/'>
                HOME
              </a>
            </li>

            <li>
              <a href='/'>NEWS</a>
            </li>

            <li>
              <a href='/'>ABOUT</a>
            </li>
          </ul>
        </nav>
      </ContextContainer>
    </Footer>
  </ThemeProvider>
);

export default App;
