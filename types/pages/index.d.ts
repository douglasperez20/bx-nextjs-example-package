import { GetServerSideProps, NextPage } from 'next';

declare const getServerSideProps: GetServerSideProps;

export const getServerSideProps;

interface Props {
  propTest: string;
}

declare const Home: NextPage<Props>;

export default Home;
