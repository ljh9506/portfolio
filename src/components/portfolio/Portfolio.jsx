import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import {
  allPortfolio,
  reactPortfolio,
  vuePortfolio,
  nextPortfolio,
  typePortfolio,
} from '../../data';
import Modal from '../modal/Modal';

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(null);
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'featured',
      title: 'ALL',
    },
    {
      id: 'web',
      title: 'React.js',
    },
    {
      id: 'mobile',
      title: 'Vue.js',
    },
    {
      id: 'design',
      title: 'Next.js',
    },
    {
      id: 'content',
      title: 'TypeScript',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(allPortfolio);
        break;
      case 'web':
        setData(reactPortfolio);
        break;
      case 'mobile':
        setData(vuePortfolio);
        break;
      case 'design':
        setData(nextPortfolio);
        break;
      case 'content':
        setData(typePortfolio);
        break;
      default:
        setData(allPortfolio);
    }
  }, [selected]);

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
        {data.map((d, i) => (
          <>
            <div
              className='item'
              onClick={() => {
                setShowModal(!showModal);
                setIndex(i);
              }}>
              <img src={d.img} alt='' />
              <h3>{d.title}</h3>
            </div>
            {index === i && (
              <Modal
                title={d.title}
                image={d.img}
                description={d.description}
                demo={d.demo}
                github={d.github}
                closeModal={() => {
                  setIndex(null);
                }}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
