import { useRouter } from 'next/router';

const DetailsPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  return (
    <>
      <h1>The Details Page</h1>
      <p>{newsId}</p>
    </>
  );
};

export default DetailsPage;
