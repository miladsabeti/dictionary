import React, {Component} from "react";
import TextField from '@mui/material/TextField';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {inputText: ''};
    }
    onChangeHandler = (event) => {
        this.setState({inputText: event.target.value})

    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.inputText )

    }

    render(){

        return(
            <form onSubmit={this.onSubmitHandler}>
                <div>
                    <TextField className="text-light" fullWidth label="Search Bar..." id="fullWidth" onChange={this.onChangeHandler} />
                </div>
            </form>

        );
    }
}
export default SearchBar;