import React, { useEffect, useState } from 'react';
import Next from '../icons/next.svg';
import Previous from '../icons/previous.svg';
import Image1 from '../imgs/bestMovies(desktop1).avif';
import Image2 from '../imgs/bestMovies(desktop2).avif';
import Image3 from '../imgs/bestMovies(tablet1).avif';
import Image4 from '../imgs/bestMovies(tablet2).avif';
import Image5 from '../imgs/bestMovies(mobile1).avif';
import Image6 from '../imgs/bestMovies(mobile2).avif';

import HTML from '../icons/whiteHtml.svg';
import JS from '../icons/whiteJS.svg';
import iconReact from '../icons/whiteReact.svg';
import Sass from '../icons/whiteSass.svg';

const BestMovies = () => {
  return (
    <div className=' '>
      <h1 className='anima limit-title modernline font-thin pt-4 py-8 text-[3rem] text-slate-600 text-center -ml-52'>
        S_1best movies
      </h1>

      <div className=' bg-dark grid grid-cols-1 lg:grid-cols-2'>
        <div className='anima-slow relative mx-auto max-w-[320px] sm:max-w-[480px] min-w-[320px] sm:min-w-[480px] max-h-[320px] min-h-[320px] sm:max-h-[560px] sm:min-h-[560px] flex justify-center items-center '>
          <img
            src={Image2}
            alt=''
            className='max-h-[360px] max-w-[420px] sm:max-h-[580px] sm:max-w-[640px]  p-8'
            // className='w-full p-8'
          />
          <img
            src={Next}
            alt=''
            className='absolute w-[15%] sm:w-[12%] top-[45%] -right-3 sm:-right-9'
          />
          <img
            src={Previous}
            alt=''
            className='absolute w-[15%] sm:w-[12%] top-[45%] -left-3 sm:-left-9'
          />
        </div>
        <div className='p-8'>
          <h1 className='anima-right text-slate-100 text-4xl'>Best Movies</h1>
          <span className='anima-left block text-slate-300 -mt-1'>jan 23</span>
          <div className='anima-bottom my-4 flex '>
            <img src={HTML} alt='' className='w-5 mr-1' />
            <img src={JS} alt='' className='w-5 mx-1' />
            <img src={iconReact} alt='' className='w-5 mx-1' />
            <img src={Sass} alt='' className='w-5 ml-1' />
          </div>
          <p className='anima-top my-8 text-slate-300  '>
            <strong className='font-semibold text-slate-200'>
              Best Movies
            </strong>{' '}
            é um projeto frontend desenvolvido com a finalidade de oferecer aos
            usuários uma plataforma de avaliação de filmes. Com uma interface
            intuitiva e de fácil navegação, os usuários tem acesso a informações
            dos top 40 filmes da{' '}
            <strong className='text-cyan-300 hover:text-cyan-100 font-semibold '>
              <a href='https://www.imdb.com/' target='_blank'>
                IMDB
              </a>
            </strong>
            . O design responsivo garante uma boa experiência em diferentes
            dispositivos. O projeto foi desenvolvido utilizando tecnologias de
            ponta, incluindo HTML, CSS, Javascript, React e Sass, o que garante
            uma performance ótima e um código escalável."
          </p>

          <p className='anima-right limit-title text-slate-100'>
            <strong className='text-cyan-300 hover:text-cyan-100 text-lg'>
              <a
                href='https://flx-react3-best-movies.vercel.app/'
                target='_blank'
              >
                Site:
              </a>
            </strong>{' '}
            <a
              href='https://flx-react3-best-movies.vercel.app/'
              target='_blank'
            >
              https://flx-react3-best-movies.vercel.app/
            </a>
          </p>

          <p className='anima-left limit-title text-slate-100'>
            <strong className='text-cyan-300 hover:text-cyan-100 text-lg'>
              <a
                href='https://github.com/flx-lander7/flx-react3__bestMovies'
                target='_blank'
              >
                Github:
              </a>
            </strong>{' '}
            <a
              href='https://github.com/flx-lander7/flx-react3__bestMovies'
              target='_blank'
            >
              https://github.com/flx-lander7/flx-react3__bestMovies
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestMovies;
