import React, { createContext, useEffect, useReducer } from 'react';

export const LinkContext = createContext();

const linkReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LINK':
      return [
        ...state,
        {
          link: action.link.link,
          shortLink: action.link.shortLink,
        },
      ];
    default:
      throw new Error();
  }
};

const LinkContextProvider = (props) => {
  const [links, dispatch] = useReducer(linkReducer, [], () => {
    const localData = localStorage.getItem('links');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links));
  }, [links]);
  return (
    <LinkContext.Provider value={{ links, dispatch }}>
      {props.children}
    </LinkContext.Provider>
  );
};

export default LinkContextProvider;
