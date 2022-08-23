import React from "react";
import Word from "./Word";


class WordList extends React.Component{
    render(){
            console.log(this.props.words);
            const meaning = this.props.words.map ( word => < Word text = { word.meanings[0].definitions[0].definition}
                                                                  example = { word.meanings[0].definitions[0].example }
                                                                  word = { word.word}
                                                                  phonetic = {word.phonetic}/>);



        return <div>{meaning}</div>;

    }
}
export default WordList;