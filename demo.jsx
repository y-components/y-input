/** @jsx React.DOM */
'use strict';

var React = require('react');
var YInput = require('./index.jsx!');

React.render((
    <div style={{padding: '10px'}}>
        <YInput size="s"/>
        <br/><br/>
        <YInput size="m"/>
        <br/><br/>
        <YInput size="l"/>
        <br/><br/>
        <YInput size="xl"/>
        <br/><br/>
        <YInput placeholder="Placeholder"/>
        <br/><br/>
        <YInput clearable placeholder="Clearable"/>
    </div>
), document.getElementById('content'));
