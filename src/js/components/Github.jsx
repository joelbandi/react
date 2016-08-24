import React from 'react';


class Github extends React.Component{;
    render(){
        var url = "https://github.com/joelbandi/react/tree/master/src/js/components/"+this.props.path;
        return (
            <a href={url} target="_blank" className="btn btn-info btn-sm">Github source</a>
        )
    }
}

export default Github;