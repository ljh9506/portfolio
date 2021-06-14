import './intro.scss';

export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className='right'>
        <div className='wrapper'>
          <h2>FRONT-END DEVELOPER</h2>
          <h2>
            <span style={{ color: 'crimson' }}>신입</span> 지원자
          </h2>
          <h2 style={{ marginTop: '15px' }}>이준희 입니다.</h2>
          <a href='#portfolio'>
            <img src='assets/down.png' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
}
