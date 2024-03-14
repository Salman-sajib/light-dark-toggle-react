import useLocalStorage from '../customHooks/useLocalStorage';

function LightDarkToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  function handleThemeToggle() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  // console.log(theme);

  return (
    <div className='light-dark-mode' data-theme={theme}>
      <div className='container'>
        <p>Hello World</p>
        <button onClick={handleThemeToggle}>Change Theme</button>
      </div>
    </div>
  );
}

export default LightDarkToggle;
