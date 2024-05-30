import {toast} from "react-toastify";
import Alert from "../../components/alert/alert";

const showSuccess = (title, message) => {
  toast.success(
    <Alert
      title={title}
      message={message}
    />
  )
}

const showError = (title, message) => {
  toast.error(
    <Alert
      title={title}
      message={message}
    />
  )
}

export {
  showSuccess,
  showError
}