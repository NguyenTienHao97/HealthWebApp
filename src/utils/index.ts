export const infoValidator = (info: any) => {
    if (!info || info.length <= 0) return 'Bắt buộc nhập';

    return '';
};

export const feeValidator = (value: number) => {
    if (!value || value < 0) return 'Bắt buộc nhập';

    return '';
}

export const phoneValidator = (phone: any) => {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (!phone || phone.length <= 0) return 'Bắt buộc nhập';
    if (!regex.test(phone)) return 'Số điện thoại của bạn phải đúng định dạng';

    return '';
};

export const emailValidator = (email: any) => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email || email.length <= 0) return "Bắt buộc nhập";
    if (!reg.test(email)) return "Email bạn nhập không hợp lệ";

    return '';
}

export const passwordValidator = (password: any) => {
    if (!password || password.length <= 0) return 'Bắc buộc nhập.';
    if (password.length <= 8) return 'Mật khẩu của bạn phải nhiều hơn 8 ký tự';

    return '';
};

export const validateNumber = (number: any) => {
    if (parseInt(number) < 0) return "Giá trị phải >= 0";
    return "";
}

export const isObjEmpty = (obj: any) => {
    return Object.keys(obj).length === 0;
}
