import {toast} from 'react-toastify'

export const toastMessage = () => {
    const showToastMessage = () => {
        toast.error('Oops!! There was some error. Please try again', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };
    const showToastMessage2 = () => {
        toast.warning('Please upload the PDF', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

    return {showToastMessage, showToastMessage2}
}