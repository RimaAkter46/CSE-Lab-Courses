const ERROR_TYPE = "error";
const SUCCESS_TYPE = "success";
const DEFAULT_ERROR_MESSAGE = "Error occured, Please contact your admin!";

$(document).ready(() => {

    if ($('.lobidrag').length) {
        $('.lobidrag').lobiPanel({
            sreload: false,
            unpin: false,
            minimize: false,
            editTitle: false,
            close: false,
            reload: false,
            expand: {
                icon: 'ti-fullscreen',
                icon2: 'ti-fullscreen'
            }
        });
    }

   
    
})


const ShowNotifyMessage = (message, type) => {
    let toastBg = 'green';
    if (type == ERROR_TYPE) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
        })
    } else {
        Swal.fire({
            icon: SUCCESS_TYPE,
            title: 'Success...',
            text: message,
        });
    }
}

const SubmitData = (url, data, CallBack) => {
    fetch(`${window.location.origin}/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {

            if (CallBack) {

                CallBack(data);

            }
        })
        .catch(error => console.error('Error:', error));
}