import React from 'react';
import { Link } from 'react-router-dom';
class UserClass extends React.Component {
    constructor() {
        super();
        this.state = {
            userData: {
                name: "",
                location: "",
                avatar_url: "",
            },
        }
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/shailya123');
        const json = await data.json();
        if (json.id) {
            this.setState({ userData: json });
        }
    }

    render() {
        return (
            <div style={{ padding: '10px', border: '1px' }}>
                <img src={this.state.userData?.avatar_url} style={{ width: '100px', height: '100px', borderRadius: 50 }} />
                <h2>Name:{this.state.userData?.name}</h2>
                <h2>Location: {this.state.userData?.location}</h2>
                <Link to={this.state.userData?.html_url}>GitHub</Link>
            </div>
        );
    }
}

export default UserClass;