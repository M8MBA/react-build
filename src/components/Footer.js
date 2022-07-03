import React from 'react';

function Footer() {
  const contacts = [
    {
      name: 'github',
      icon: '',
      link: 'https://github.com/M8MBA',
    },
    {
      name: 'linkedin',
      icon: '',
      link: '/https://www.linkedin.com/in/cade-wilson-bullough-6b8569177/',
    },
    {
      name: 'stackoverflow',
      icon: '',
      link: '/https://stackoverflow.com/users/17828535/m8mba',
    },
  ];
  return (
    <footer>
      {contacts.map(item => (
        <a key={item.name} target="_blank" href={item.link}>
          {item.icon}
        </a>
      ))}
    </footer>
  );
}

export default Footer;
