import React from 'react';

const Article = (props) => {
	const { title, url, author, content, urlToImage } = props.article;
 
    return (
       <div className="article">
	       	<h2>{title}</h2>
	       	<p className="author">- {author === null || author === ''? 'Anonymous' : author}</p>
	       	<img src={urlToImage === 'https://s0.wp.com/i/blank.jpg' || urlToImage === 'https://apnews.com/images/PaidContent3.png' ? null : urlToImage} alt="" width="100%"/>
	       	<p>{content === null || content === "To continue, please click the box below to let us know you're not a robot." || content === '[[getSimpleString(data.title)]] [[getSimpleString(data.text)]]' ? 'Click the button below to know the full story.' : content.substr(0, 150)+'...'}</p>
	       	<a href={url} target="_blank" rel="noreferrer noopener">Expand</a>
       </div> 
    );
};

export default Article;
