import React, { Component } from 'react';
import classes from './addQuote.module.css'
import axios from '../../axios-add';
//import axios from 'axios'

class addQuote extends Component {
    state = {
        author: '',
        bookTitle: '',
        text: ''
    };

    addLine = (e) => {
        e.preventDefault();
        console.log(e);
        let newLine = {
            author: null
        };
    };

    formStateUpdate = e => {
        this.setState({[e.target.name]:e.target.value});
    };

    sendForm = e => {
        e.preventDefault();
        let newData = {...this.state};
        this.setState({
            author: '',
            bookTitle: '',
            text: ''
        });
        axios.post(`https://great-books-5f716.firebaseio.com/authors/-LaXx5hXMY-QQ9yn9rSv.json`, newData)
            .then(resp => {
                console.log(resp);
                this.props.history.replace('/');
            })
            .catch(e => console.log(e));

    };

    cancelHandler = (e) => {
        this.props.history.goBack();
        e.preventDefault();
    };
    render() {
        return (<div style={{textAlign: 'center'}}>
            <h2>Add a famous opening quote!</h2>
            <form action="" className={classes.form}>
                <div>Book name: <br/><input type="text"
                                            name="bookTitle"
                                            value={this.state.bookTitle}
                                            onChange={this.formStateUpdate}/></div>
                <div>Book author: <br/><input
                    type="text"
                    name="author"
                    value={this.state.author}
                    onChange={this.formStateUpdate}/></div>
                <div>
                    Book quote: <br/><textarea style={{width: '75%', height:'100px'}}
                                                type="text"
                                                name="text"
                                                value={this.state.text}
                                                onChange={this.formStateUpdate}/></div>
                <button style={{width: '60px', padding:'2em', borderRadius: 'solid 2px'}} onClick={this.sendForm}>Add!</button>
                <button onClick={this.cancelHandler}>Cancel</button>
            </form>
        </div>)
    }
}

export default addQuote;
