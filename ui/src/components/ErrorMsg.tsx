import { useNavigate, useParams } from 'react-router-dom';

const ErrorMsg = (error: any) => {

  console.log(error);

  if (error) {
    return (
      <>
        <div className="error-msg">{error}</div>
      </>
    )
  }
};

export default ErrorMsg;
