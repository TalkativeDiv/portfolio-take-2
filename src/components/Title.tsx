import React from 'react';
interface props {
  children: any;
  id: any;
}

const Title: React.FC<props> = ({ children, id }) => {
  return (
    <h1 id={id && id} className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-slate-900 dark:text-slate-300">{children}</h1>
  );
};

export default Title;
