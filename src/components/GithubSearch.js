import React from 'react';
import ReactDOM from 'react-dom';
import { fetchGithubs } from "../api";
import GithubList from "./GithubList"





class GithubSearch extends React.Component {
    constructor(props) {
    super (props);
    this.state ={searchKeyword:"",gits:[]};
    this.search = this.search.bind(this);
    }

search(){
    fetchGithubs(this.state.searchKeyword).then(body =>
    this.setState({ gits: body.items, })
    );
}

render() {
    const {searchKeyword,gits}= this.state;
    return (
    <div className="github">
        <div className="search">
        <input
            placeholder="Search for github Users"
            onChange={e => {
              this.setState({ searchKeyword: e.target.value });
            }}
            value={searchKeyword}
          />
        <button onClick={this.search}>Search</button>
        <GithubList gits ={gits}/>
        </div>
    </div>
    )
}
}

export default GithubSearch;