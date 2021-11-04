import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href='/news/alink'>a link</Link>
        </li>
        <li>
          <Link href='/news/anotherlink'>another link</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
