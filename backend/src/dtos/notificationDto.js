class NotificationDto {
    constructor(category, message) {
        this.category = category;
        this.message = message;
    }

    static validate(notification) {
        const categories = ['Sports', 'Finance', 'Movies'];
        if (!categories.includes(notification.category)) {
            throw new Error('Invalid category');
        }

        if (!notification.message || notification.message.trim() === '') {
            throw new Error('Message cannot be empty');
        }
    }
}

module.exports = NotificationDto;
