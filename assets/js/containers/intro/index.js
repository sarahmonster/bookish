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
                    <ArticleHeader type="intro" title="Hello there, new internet friends." />
                </main>
                <Footer/>
            </section>
        );
    }
}
