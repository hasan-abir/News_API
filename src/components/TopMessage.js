import React from 'react';

const TopMessage = () => {
  return (
    <div className="top-message">
      <p>
        Due to newsapi.org new pricing plans, this app does not have the
        permission to call to the API from a domain. But it does work on
        localhost, which you can check out by cloning the repository and getting
        the API key from newsapi.org. Check out the repo -{' '}
        <a href="https://github.com/abirmeadows/News_API">Github repo</a>
      </p>
    </div>
  );
};

export default TopMessage;
