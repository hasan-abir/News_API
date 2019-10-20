import React from 'react';

const Header = (props) => {
    return (
        <header>
        	<h1>News Headlines</h1>
        	<p>Find out what's going on around the world!</p>
        	<form onSubmit={props.submitQueries.bind(this)}>
        		<label>Select country you want news from..</label>
        		<select value={props.country} onChange={props.handleEventChange.bind(this)} name="country">
        			<option value="us">United States</option>
        			<option value="ae">Arab Emirates</option>
        			<option value="ar">Argentina</option>
        			<option value="at">Austria</option>
        			<option value="au">Australia</option>
        			<option value="be">Belgium</option>
        			<option value="bg">Bulgaria</option>
        			<option value="br">Brazil</option>
        			<option value="ca">Canada</option>
        			<option value="ch">Switzerland</option>
        			<option value="cn">China</option>
        			<option value="co">Colombia</option>
        			<option value="cu">Cuba</option>
        			<option value="cz">Czech Republic</option>
        			<option value="de">Germany</option>
        			<option value="eg">Egypt</option>
        			<option value="fr">France</option>
        			<option value="gb">Great Britain</option>
        			<option value="gr">Greece</option>
        			<option value="hk">Hong Kong</option>
        			<option value="hu">Hungary</option>
        			<option value="id">Indonesia</option>
        			<option value="ie">Ireland</option>
        			<option value="il">Israel</option>
        			<option value="in">India</option>
        			<option value="it">Italy</option>
        			<option value="jp">Japan</option>
        			<option value="kr">Republic of Korea</option>
        			<option value="lt">Lithuania</option>
        			<option value="lv">Latvia</option>
        			<option value="ma">Morocco</option>
        			<option value="my">Malaysia</option>
        			<option value="mx">Mexico</option>
        			<option value="ng">Nigeria</option>
        			<option value="nl">Netherlands</option>
        			<option value="no">Norway</option>
        			<option value="nz">New Zealand</option>
        			<option value="ph">Philippines</option>
        			<option value="pl">Poland</option>
        			<option value="pt">Portugal</option>
        			<option value="ro">Romania</option>
        			<option value="rs">Republic of Serbia</option>
        			<option value="ru">Russian Federation</option>
        			<option value="sa">Saudi Arabia</option>
        			<option value="se">Sweden</option>
        			<option value="sg">Singapore</option>
        			<option value="si">Slovenia</option>
        			<option value="sk">Slovakia</option>
        			<option value="th">Thailand</option>
        			<option value="tr">Turkey</option>
        			<option value="tw">Taiwan</option>
        			<option value="ua">Ukraine</option>
        			<option value="ve">Venezuela</option>
        			<option value="za">South Africa</option>
        		</select>
        		<label>Select category..</label>
        		<select value={props.category} onChange={props.handleEventChange.bind(this)} name="category">
        			<option value="business">Business</option>
        			<option value="entertainment">Entertainment</option>
        			<option value="general">General</option>
        			<option value="health">Health</option>
        			<option value="science">Science</option>
        			<option value="sports">Sports</option>
        			<option value="technology">Technology</option>
        		</select>
        		<label>Select number of articles..</label>
        		<select value={props.limit} onChange={props.handleEventChange.bind(this)} name="limit">
        			<option value="20">20</option>
        			<option value="30">30</option>
        			<option value="40">40</option>
        			<option value="50">50</option>
        		</select>
        		<button type="submit">GET NEWS</button>
        	</form>
        </header>
    );
};

export default Header;
