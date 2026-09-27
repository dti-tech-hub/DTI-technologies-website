import { Component } from 'react';
import { ErrorState } from './States.jsx';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    // Frontend-only logging hook — replace with real reporting if needed later.
    console.error('Render error:', error);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 'calc(var(--navbar-height) + 3rem) var(--gutter) 4rem' }}>
          <div className="container" style={{ maxWidth: '720px' }}>
            <ErrorState
              title="Something went wrong."
              text="An unexpected error occurred while rendering this page. Please try again."
              onRetry={this.handleRetry}
            />
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
