const USER_KEY = 'user_data';

export const getUserData = () => {
    const userData = localStorage.getItem(USER_KEY);
    return userData ? JSON.parse(userData) : null;
};

export const updateUserData = (data) => {
    try {
        localStorage.setItem(USER_KEY, JSON.stringify(data));
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

export const saveUserPhoto = (photoFile) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(photoFile);
        reader.onload = () => {
            try {
                const userData = getUserData() || {};
                userData.photoUrl = reader.result;
                localStorage.setItem(USER_KEY, JSON.stringify(userData));
                resolve({ success: true, photoUrl: reader.result });
            } catch (error) {
                reject({ success: false, error: error.message });
            }
        };
        reader.onerror = (error) => reject({ success: false, error: error });
    });
};

export const removePhoto = () => {
    try {
        const userData = getUserData();
        if (userData) {
            delete userData.photoUrl;
            localStorage.setItem(USER_KEY, JSON.stringify(userData));
        }
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}; 