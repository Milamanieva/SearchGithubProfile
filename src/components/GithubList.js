import React from "react";

class GithubList extends React.Component {
    render() {
        const {gits} = this.props;
      return (
        <div className="github-list">
        {gits.map(item =>(
        <div classname="item" key ={item.id}> 
        <p>{item.login}</p>
        <a href= {item.html_url}>link to github</a>
        </div>

        ))}
          
        </div>
      );
    }
  }

export default GithubList;