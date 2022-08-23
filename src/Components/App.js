import React, {Component} from "react";
import SearchBar from "./SearchBar";
import WordList from "./WordList";
import axios from "axios";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = { words: [] };
    }


   search = async (searchWord) => {
        const result = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
        );

        this.setState({words: result.data});
   };


    render(){
        return (
            <div className="container d-flex align-items-center justify-content-center flex-column row mt-5">
                <div className="col-6">
                    <SearchBar onFormSubmit={this.search}/>
                </div>
                <div className="col-6 ms-1 mt-2 border-dark">
                    <WordList words = {this.state.words}/>
                </div>
            </div>

        );
    }
}
export default App;