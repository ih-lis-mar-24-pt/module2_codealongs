const imgURL =
  'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/home.gif';

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <img src={imgURL} alt='home' className='page-img' />
    </div>
  );
};

export default Homepage;
