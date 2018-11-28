import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '840631828745-hvqop3k6qiu6kpq0bskm0b30octbh5b9.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render() {
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;