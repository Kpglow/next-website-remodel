import Head from "next/head"
import stylesheet from 'styles/main.scss'
import $ from 'jquery';
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import getConfig from 'next/config'
// Only holds serverRuntimeConfig and publicRuntimeConfig from next.config.js nothing else.
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
// const AWS = require('aws-sdk')
// var request = require('ajax-request')

const API_URL = publicRuntimeConfig.AWS_URL
class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isArticleVisible: false,
            timeout: false,
            articleTimeout: false,
            article: "",
            loading: "is-loading",  
            value: ''
        }
        this.handleOpenArticle = this.handleOpenArticle.bind(this)
        this.handleCloseArticle = this.handleCloseArticle.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: "" })
        }, 100)
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
        }
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(event) {
        let body_message = this.state.value
        $(document).ready(function(){
            $.ajax({
                url: API_URL,
                type: 'Post',
                data: JSON.stringify({"message": {text: body_message, email: "karlwng@gmail.com"}}),
                contentType: "application/json",
                success: function(err, res, body) {
                    alert("message sent!")
                }
              },);
        })

        this.setState({value: ""});
      }

    handleOpenArticle(article) {
        this.setState({
            isArticleVisible: !this.state.isArticleVisible,
            article
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                articleTimeout: !this.state.articleTimeout
            })
        }, 350)
    }

    handleCloseArticle() {
        this.setState({
            articleTimeout: !this.state.articleTimeout
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                isArticleVisible: !this.state.isArticleVisible,
                article: ""
            })
        }, 350)
    }
    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? "is-article-visible" : ""}`}>
                <div>
                    <Head>
                        <title>Kpglow - Karl Wong | Software Engineer</title>
                        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                    </Head>

                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

                    <div id="wrapper">
                        <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
                        <Main
                            isArticleVisible={this.state.isArticleVisible}
                            timeout={this.state.timeout}
                            articleTimeout={this.state.articleTimeout}
                            article={this.state.article}
                            onCloseArticle={this.handleCloseArticle}
                            onSubmit={this.handleSubmit}
                            onChange={this.handleChange}
                
                        />
                        <Footer timeout={this.state.timeout} />
                    </div>

                    <div id="bg" />
                </div>
            </div>
        )
    }
}

export default IndexPage
