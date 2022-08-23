import React, {Component} from "react";

class Word extends Component{
    render(){
        return(
            <div className="card mb-5">
                <div className="card-header bg-primary rounded-top" >
                    Meaning of {this.props.word}
                </div>
                <div className="card-body bg-dark text-light rounded-bottom">
                    <blockquote className="blockquote mb-0">
                        <p>Definitions : {this.props.text}</p>
                        <p>Phonetics : {this.props.phonetic}</p>
                        <p>Example : {this.props.example}</p>
                        <hr/>
                        <footer className="blockquote-footer text-danger mt-2 ">Searching Word is : " {this.props.word} " .
                        </footer>
                    </blockquote>
                </div>
            </div>
        );
    }
}
export default Word;