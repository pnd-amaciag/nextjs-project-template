type StatusMessageProps = {
  error?: string;
  message?: string;
};

export function StatusMessage({ error, message }: StatusMessageProps) {
  if (!error && !message) return null;
  
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
        {error}
      </div>
    );
  }
  
  return (
    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
      {message}
    </div>
  );
}