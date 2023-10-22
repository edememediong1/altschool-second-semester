import React from 'react';

class ErrorBoundaryTest extends React.Component {
    state = {hasError: false};

    componentDidCatch(){
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError){
            return <div>Error occurred!</div>
        }
        return <button onClick={() => {throw new Error('Synthetic Test Error') }}></button>
    }
}

export default ErrorBoundaryTest