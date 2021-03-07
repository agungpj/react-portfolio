import { About } from "../styles";
import styled from "styled-components";
import Toggle from "./Toggle";
import {AnimateSharedLayout} from 'framer-motion'
const FaqSection = () => {
  return (
    <AnimateSharedLayout>
    <Faq>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <Toggle title='How do i start?'>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
            corrupti.
          </p>
        </div>
      </Toggle>

      <Toggle title='Daily Schedule'>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
            corrupti.
          </p>
        </div>
      </Toggle>

      <Toggle title='Different Paymanet Method'>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
            corrupti.
          </p>
        </div>
      </Toggle>
      <Toggle title='What Product Do You Offers?'>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
            corrupti.
          </p>
        </div>
      </Toggle>
    </Faq>
    </AnimateSharedLayout>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    cursor: pointer;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
