import { useState } from 'react';
import SearchBar from './SearchBar';
import DataContainer from './DataContainer';
import './styles.css';

const data = [
  { id: 1, title: 'Avenger 1', description: 'TONY STARK -> Tony Stark was the arrogant son of wealthy, weapon manufacturer Howard Stark. Tony cared only about himself, but he would have a change of heart after he was kidnapped by terrorists and gravely injured. Pressured to create a weapon of mass destruction, Stark instead created a suit of armor powerful enough for him to escape' },
  { id: 2, title: 'Avenger 2', description: 'Thor Odinson is the All-father of Asgard /God of Thunder, offspring of All-Father Odin & Elder-Goddess Gaea. Combining the powers of both realms makes him an elder-god hybrid and a being of no perceivable limits. Armed with his enchanted Uru hammer Mjolnir which helps him to channel his godly energies.' },
  { id: 3, title: 'Avenger 3', description: 'After being bombarded with a massive dose of gamma radiation while saving a young man life during an experimental bomb testing, Dr Robert Bruce Banner was transformed into the Incredible Hulk, a green behemoth who is the living personification of rage and pure physical strength' },
  { id: 4, title: 'Avenger 4', description: 'During World War II, Steve Rogers volunteered to receive the experimental Super-Soldier Serum. Enhanced to the pinnacle of human physical potential and armed with an unbreakable shield, he became Captain America. After a failed mission left him encased in ice for decades, he was found and revived by the Avengers, later joining their ranks and eventually becoming the team leader.' },
  { id: 5, title: 'Avenger 5', description: 'Trained by criminals and inspired by heroes, Clint Barton has grown from a troubled youth into one of the greatest heroes on Earth. The world knows him best as Hawkeye: Earths Mightiest Marksman. A member of the Avengers for many years, he has left the team on occasion because of team friction. But he always returns, ready to face any threat.' },
  { id: 6, title: 'Avenger 6', description: 'Vision is an artificial intelligence, a "synthezoid" created by the villain Ultron and an Avenger who possesses the power to alter his density at will. Having gained a modicum of humanity, Vision is always afraid he may one day lose touch with it.' },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>HackSlash Task - Search App</h1>
      <div className="search-container">
        <SearchBar handleSearch={setSearchTerm} />
      </div>
      <div className="card-container">
        <DataContainer searchData={filteredData} />
      </div>
    </div>
  );
};

export default App;
