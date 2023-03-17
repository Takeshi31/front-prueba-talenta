type ErrorMessage = {
  errorMessage: string;
};

export default function ErrorComponent({ errorMessage }: ErrorMessage) {
  return (
    <div className="error-message">
      <p>{errorMessage}</p>
    </div>
  );
};
