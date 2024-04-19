document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener - done(solveRoom to solveRoom1)
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID - done(roomResult to room1Result)
                document.getElementById("room1Result").innerHTML = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async', 'components', 'jsx', 'hooks']);
        // 🪲 Bug: What's mssing from JS concepts? - done(moved things around until it looked like solution given)
        const reactConcepts = new Set(['async']);
        // 🪲 Bug: Incorrect function call - done
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function - done(the fetch function returns a promise - as async, you can use the await keyword to wait for promises to resolve without using .then() chains.)
    document.getElementById("solveRoom3").addEventListener("click", async () => {
        try {
            const response = await fetch('directions.json');
            const directions = await response.json();
            const message = await navigateLabyrinth(directions);
            document.getElementById("room3Result").textContent = message;
        } catch (error) {
            console.error('Error:', error);
        }
    });
});

function findMostRecentBook(books) {
    // 🪲 Bug: Logic error - done(from < to >)
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}//If the publication date of the current book is after the most recent book's publication date, then return the current book as the most recent book; otherwise, return the previous most recent book.
        

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic - done(was creating a new set with all elements from setA, which is wrong. Changed it to iterate over one set and check if each element exists in the other set)
    const intersection = new Set();
    for (const elem of setA) {
        if (setB.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay - done(added await for delay)
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

