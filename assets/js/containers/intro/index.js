import React, { Component } from 'react';

import Header from 'components/site-header';
import Main from 'components/site-content';
import Footer from 'components/site-footer';
import ArticleHeader from 'components/article-header';

export default class Intro extends Component {
    render() {
        document.title = `${ RT_API.siteName } - ${ RT_API.siteDescription }`;
        return (
            <section className="container-fluid template-single">
                <Header/>
                <main id="site-content" className="intro">
                    <ArticleHeader type="intro" title="Oh, hello there." />
                    <p>I am Sarah. I make things &amp; I wander a lot. Sometimes I write long, rambling stories.</p>
                    <h1>Oh, hello there. I am Sarah.</h1>
                    <h1>I make things &amp; I wander a lot.</h1>
                    <h1>Sometimes I write long, rambling stories.</h1>
                </main>
                <Footer/>
            </section>
        );
    }
}
