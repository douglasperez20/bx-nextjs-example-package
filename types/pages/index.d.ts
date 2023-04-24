import { GetServerSideProps, NextPage } from 'next';

declare const getServerSideProps: GetServerSideProps;

interface Props {
  propTest: string;
}

declare const Home: NextPage<Props>;
export { Home, getServerSideProps };
