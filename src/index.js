import { getRandomActivity } from './activity.js';

document.addEventListener('DOMContentLoaded', () => {
    displayActivity();
    setInterval(displayActivity, 60000); // Обновление данных каждую минуту
});

/**
 * Displays a random activity on the HTML page.
 */
async function displayActivity() {
    try {
        const activity = await getRandomActivity();
        document.getElementById('activity').textContent = activity;
    } catch (error) {
        document.getElementById('activity').textContent = 'К сожалению, произошла ошибка';
    }
}