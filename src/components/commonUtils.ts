export const convertMinutesToHours = (value: number) => {
    const hours = Math.floor(value / 60);
    const minutes = Math.floor(value % 60);
    return `${hours} hr ${minutes} mins`;
};

export const calculateLikesPercentage = (numberOfLikes: number, numberOfDislikes: number) => {
    const percentage = Math.floor((numberOfLikes / (numberOfLikes + numberOfDislikes)) * 100);
    return percentage;
};
