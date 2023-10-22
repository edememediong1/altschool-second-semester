import React from 'react';
import NotFound from './404';
import { ErrorBoundary } from 'react-error-boundary';

class ErrorBoundaryTest extends React.Component {
    state = {hasError: false};

    componentDidCatch(){
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError){
            return <NotFound/>
        }
        return <button onClick={() => {throw new Error('Synthetic Test Error') }}></button>
    }
}

export default ErrorBoundaryTest