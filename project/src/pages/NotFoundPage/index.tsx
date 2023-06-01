import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';

export const NotFoundPage = () => (
  <div className="page-content">
    <section className='page-not-found'>
      <h1>404 Not Found</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>
    <Footer />
  </div>

);
