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
            <div className='p-8 shadow-xl flex justify-around items-center'>
                <img src={this.state.userData?.avatar_url} className='h-36 w-36 rounded-full shadow-md' />
                <div className='flex flex-col font-semibold'>
                    <h2>Name:{this.state.userData?.name}</h2>
                    <h2>Location: {this.state.userData?.location}</h2>
                    <Link to={this.state.userData?.html_url} target='_blank' className='text-green-300'>GitHub</Link>
                </div>
            </div>
        );
    }
}

export default UserClass;