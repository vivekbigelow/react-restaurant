type ErrorFallBackProps = {
    error:Error;
    resetErrorBoundary: ()=>void
}

export default function ErrorFallback({ error, resetErrorBoundary }: ErrorFallBackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={(resetErrorBoundary)} >Try Again</button>
    </div>
  );
}
