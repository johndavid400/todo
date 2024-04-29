import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';
import '../App.css';
import { Flex, Text, Button } from '@radix-ui/themes';

const Logos = () => {
  return (
    <>
      <Flex direction="row" justify="center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Flex>
    </>
  )
};

export default Logos;
