/**
 * Fetches a random activity from the Bored API.
 * @returns {Promise<string>} The description of the random activity.
 * @throws Will throw an error if the fetch operation fails.
 */
export async function getRandomActivity() {
    const response = await fetch('https://www.boredapi.com/api/activity/');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.activity;
}