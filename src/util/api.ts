export const api = {
    call() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.random() > 0.5 ? resolve(null) : reject(new Error("Failed"));
            }, 1000);
        });
    },
};
